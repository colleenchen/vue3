// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {

    const counter = ref(0);

    const doubleCount = computed(() => {
        return counter.value * 2
    })

    const addCount = () => {
        counter.value++
    }


    return { counter, doubleCount, addCount };

});