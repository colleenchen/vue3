<script  setup>
import { computed, reactive, ref } from "vue";

const data = ref("123888");
const yoyo = "fff";
const sing = ref(1);
const dataList = ["a", "b", "c", "d", "e"];
const changesing = (index) => {
  sing.value = index;
};
const userInfo = reactive({
  name: "cooc",
  age: 25,
  address: "台灣",
});

setTimeout(() => {
  userInfo.name = "an2000";
  userInfo.age = 18;
  userInfo.address = "日本";
}, 2000);

const userShow = computed(() => {
  return `我是${userInfo.name}，家住${userInfo.address}`;
});
</script>


<template>
  <h3>自我介紹</h3>
  <div>{{ userShow }}</div>
  <ul class="user">
    <li>{{ userInfo.name }}</li>
    <li>{{ userInfo.age }}</li>
    <li>{{ userInfo.address }}</li>
  </ul>
  <button @click="changesing(1)">單向綁定</button>
  <button @click="changesing(2)">雙向綁定</button>
  <div class="con-1" v-if="sing === 1">
    <p>單向綁定</p>
    <div>{{ yoyo }}</div>
  </div>
  <div class="con-2" v-if="sing === 2">
    <p>雙向綁定</p>
    <input type="text" v-model="data" />
    <div>{{ data }}</div>
  </div>
  <ul class="con-3">
    <li v-for="list in dataList" :key="list.value">{{ list }}</li>
  </ul>
</template>


<style lang="scss">
button {
  margin: 10px;
}
.con-1 {
  border: 2px solid rgb(231, 66, 66);
  padding: 10px;
}
.con-2 {
  border: 2px solid rgb(27, 147, 163);
  padding: 10px;
}
ul.con-3 {
  li {
    display: inline-block;
    margin: 10px;
  }
}

.user {
  text-align: left;
}
</style>