import { defineStore } from "pinia";
import { type AuthStage } from "./types";

export const useUserStore = defineStore(
	"auth",
	{
		state: (): AuthStage => ({
			authenticating: false,
			authenticated: false,
			token: null,
			token_expiry: null
		}),
		getters: {
			isAuthenticating: (state) => state.authenticating,
			isAuthenticated: (state) => state.authenticated,
			getToken: (state) => state.token,
			getTokenExpiry: (state) => state.token_expiry
		},
		actions: {
			logIn() {
				return true;
			},
			logOut() {
				this.$reset();
				return true;
			},
			getAuthUser() {
				return {  };
			}
		}
	}
);
