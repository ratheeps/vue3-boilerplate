<template>
  <main>
    <p>{{ code }}</p>
    <p>{{ message }} </p>
  </main>
</template>


<script setup lang="ts">

import { type ErrorProps } from "./types";

defineProps<ErrorProps>();
</script>
