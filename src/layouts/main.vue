<template>
  <NavBar />

  <div class="h-full flex-1">
    <main class="sm:px-auto container mx-auto space-y-3 py-3 px-3">
      <RouterView />
    </main>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import { Footer, NavBar } from "@/components";
</script>
