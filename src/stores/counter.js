// stores/counter.js
import { defineStore } from 'pinia'
import { computed, ref } from "@vue/runtime-core";
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {

    const counter = ref(0);
    const userList = ref({});

    const doubleCount = computed(() => {
        return counter.value * 2
    });

    const addCount = () => {
        counter.value++
    }

    const fetchAPIData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            userList.value = res.data;
        } catch (error) {
            // errMsg.value = 'API錯誤';
        }
    }

    return { counter, userList, doubleCount, addCount, fetchAPIData };

});