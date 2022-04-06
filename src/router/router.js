import {createRouter, createWebHistory} from "vue-router";
import Form from "@/pages/Form";
import Success from "@/pages/Success";

const routes = [
    {
        path: '/',
        component: Form
    },
    {
        path: '/success',
        component: Success
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;