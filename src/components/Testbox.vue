<template>
  <h1>{{ props.name }}</h1>
  <button @click="changeName">change name</button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["change-name"]);
const changeName = () => {
  emit("change-name", "mary");
};
</script>

<style>
</style>