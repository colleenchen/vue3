
import axios from "axios";
import { ref } from "@vue/runtime-core";

export function useFetch() {
    const data = ref([]);

    const errMsg = ref('');



    const fetchInit = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            data.value = res.data;
        } catch (error) {
            errMsg.value = 'API錯誤';
        }
    }

    return { data, errMsg, fetchInit };
}