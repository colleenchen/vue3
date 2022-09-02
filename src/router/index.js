import { createWebHistory, createRouter } from "vue-router";
import Home from "../Views/Home.vue";
import Naive from "../components/Naive.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Naive",
        name: "Naive",
        component: Naive,
        children: [
            {
                path: "XXX",
                name: "XXX",
                component: () => import('../Views/Naive/XXX.vue'),
            },
            {
                path: "YYY",
                name: "YYY",
                component: () => import('../Views/Naive/YYY.vue'),
            }
        ]
    },
    {
        path: "/About",
        children: [
            {
                path: "AAA",
                name: "AAA",
                component: () => import('../Views/About/A.vue'),
            },
            {
                path: "BBB",
                name: "BBB",
                component: () => import('../Views/About/B.vue'),
            }
        ]
    },
    {
        path: '/:id',
        name: 'UserData',
        component: () => import('../Views/[id].vue')
    },
    {//錯誤網址到入頁面404
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        //動態載入
        component: () => import('../Views/NotFound.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;