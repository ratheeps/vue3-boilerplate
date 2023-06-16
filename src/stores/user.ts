import type { UserType, UserTypeRegister } from "@/types";
import { defineStore } from "pinia";
import { useGlobalStore } from "./global";

interface State {
  users: Array<UserType>;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    users: [],
  }),
  actions: {
    findById(id: number) {
      return this.users.find((user) => user.id === id);
    },
    findByName(name: string) {
      return this.users.find((user) => user.name === name);
    },
    add(user: UserTypeRegister): UserType {
      const alreadyExists = this.users.some(({ name }) => name === user.name);

      if (alreadyExists) {
        throw new Error(
          "User Already Exist"
        );
      }

      const result = {
        id: this.users.length + 1,
        ...user,
      };

      this.users.push(result);

      return result;
    },
    update(id: number, values: Partial<Omit<UserType, "id">>): UserType {
      const index = this.users.findIndex((user) => user.id === id);

      if (index === -1) {
        throw new Error("User Not Found");
      }

      const globalStore = useGlobalStore();

      const result = {
        ...this.users[index],
        ...values,
      };

      const user = (this.users[index] = result);

      if (globalStore.user?.id === id) {
        globalStore.user = user;
      }

      return user;
    },
  },
});
