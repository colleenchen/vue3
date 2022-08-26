<script setup>
import { handleError } from "@vue/runtime-core";

const emit = defineEmits(["AddEmit"]);

const handleClick = (a, b) => {
  const add = (a || 2) + (b || 3);
  emit("AddEmit", add);
};
</script>


<template>
  <div><button @click="handleClick(5, 5)">click</button></div>
</template>

<style>
</style>