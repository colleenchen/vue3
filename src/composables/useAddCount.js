import { ref } from "@vue/runtime-core";
export function useAddCount() {
    const count = ref(0);
    const addCouunt = () => {
        count.value++
    }
    return { count, addCouunt };
}