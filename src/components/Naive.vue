<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { NButton } from "naive-ui";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const info = ref("123");
watch(info, (newVal) => {
  console.log(newVal);
});
</script>


<template>
  <n-button>naive-ui</n-button>
  <div>
    <input
      type="text"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>

  <nav>
    <router-link to="/Naive/XXX">XXX</router-link>
    <router-link to="/Naive/YYY">YYY</router-link>
  </nav>
  <router-view></router-view>
</template>


<style lang="scss" scoped>
div {
  margin: 10px;
}
nav {
  margin: 20px;
  a {
    margin: 20px;
  }
}
</style>