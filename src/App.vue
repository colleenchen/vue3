<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, onMounted, ref } from "@vue/runtime-core";
import HelloColleen from "./components/HelloColleen.vue";
import vImgA from "./components/vImgA.vue";
import AddEmit from "./components/AddEmit.vue";
import Naive from "./components/Naive.vue";
import Testbox from "./components/Testbox.vue";
import Logo from "./assets/vue.svg";
import { useWindowsPosition } from "./composables/useWindowsPosition.js";
import { useAddCount } from "./composables/useAddCount.js";
import { useFetch } from "./composables/useFetch.js";
import { useCounterStore } from "./stores/counter.js";
// export const getImgSrc = (url: string) => new URL(`/src/assets/${url}`, import.meta.url).href

const store = useCounterStore();

const { pageX, pageY } = useWindowsPosition();

const { count, addCouunt } = useAddCount();

const { data, errMsg, fetchInit } = useFetch();

const name = ref("coco");
const isChange = ref(0);
const callBack = (res) => {
  console.log("callback", res);
};

const changeComp = (inx) => {
  isChange.value = inx;
};

const compShow = computed(() => {
  switch (isChange.value) {
    case 0:
      return AddEmit;
    case 1:
      return vImgA;
    default:
      HelloColleen;
  }
});

const updateName = (newName) => {
  name.value = newName;
};

onMounted(() => {
  fetchInit();
});
</script>

<template>
  <!-- <Naive v-model="name" />
  <div>{{ name }}</div> -->

  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Naive">Naive</router-link>
  </div>
  <nav>
    <router-link to="/About/AAA">A</router-link>
    <router-link to="/About/BBB">B</router-link>
  </nav>
  <router-view></router-view>
  <!-- <div>{{ store.userList }}</div>
  <div>{{ store.counter }}</div>
  <div><button @click="store.fetchAPIData()">store ADD</button></div>
  <div v-if="data.length === 0 && errMsg === ''">loading...</div>
  <pre v-else>{{ data }}</pre>
  <div v-if="errMsg !== ''">{{ errMsg }}</div>
  <div>{{ count }}</div>
  <p><button @click="addCouunt">加加++</button></p>
  <div>{{ pageX }},{{ pageY }}</div>
  <Testbox :name="name" @change-name="updateName" /> -->
  <!-- <AddEmit @AddEmit="callBack" />
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloColleen />
  <vImgA
    alt="Vue logo"
    className="logoImg"
    :src="Logo"
    width="125"
    height="125"
  />

  <div class="main">
    <button @click="changeComp(0)">component0</button>
    <button @click="changeComp(1)">component1</button>
    <component :is="compShow"></component>
  </div> -->
</template>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: aquamarine;
  a {
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
}
nav {
  a {
    margin: 20px;
  }
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main {
  width: 300px;
}
pre {
  text-align: left;
}
</style>
