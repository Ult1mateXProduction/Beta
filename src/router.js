import { createWebHistory, createRouter } from "vue-router";
import Landing from "./components/Landing.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Profile from "@/components/Profile";
// lazy-loaded
//const Page = () => import("./components/Page")

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/me",
    name: "User",
    component: Profile
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;