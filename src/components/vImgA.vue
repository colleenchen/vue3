
<script setup>
const props = defineProps({
  alt: {
    type: String,
    default: "alt",
  },
  className: {
    type: String,
    default: "img",
  },
  src: {
    type: String,
    default: "src",
  },
  width: {
    type: String,
    default: 100,
  },
  height: {
    type: String,
    default: 100,
  },
});
</script>

<template>
  <img
    :alt="props.alt"
    :class="props.className"
    :src="props.src"
    :width="props.width"
    :height="props.height"
  />
</template>


<style lang="scss">
</style>