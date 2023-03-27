import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "./nprogress";
import { AxiosCanceler } from "@/api/helper/axiosCancel";
const axiosCanceler = new AxiosCanceler();
import { getCookie } from "@/utils"

const routes: Array<RouteRecordRaw> = [
    {
		path: "/",
		redirect: { name: "home" }
	},
    {
        path: "/layout",
        name: "layout",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/layout/index.vue"),
        redirect:'/home',
        children: [
            {
                path: "/home",
                name: "home",
                component: () =>
                    import(/* webpackChunkName: "home" */ "../views/home/index.vue")
            }    
        ]
    },
    {
		path: "/404",
		name: "404",
		component: () => import("@/components/ErrorMessage/404.vue"),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
    },
    {
		path: "/500",
		name: "500",
		component: () => import("@/components/ErrorMessage/500.vue"),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
    },
    {
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
    }   
];

const router = createRouter({
    history: createWebHistory('goldjetanalysis-sit'),
    routes,
    strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

// * 路由拦截 beforeEach
router.beforeEach((to, from, next) => {
	NProgress.start();
	// * 在跳转路由之前，清除所有的请求
	axiosCanceler.removeAllPending();

	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
