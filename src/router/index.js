import { createRouter, createWebHistory } from 'vue-router'
import { getAuthState } from '../firebase'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      requiresAuth: true
    },
    component: Home
  },
  {
    path: '/body',
    name: 'Body',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Body.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
    import("@/views/Login.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
    import("@/views/Register.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let state = await getAuthState();
    if(!state){
      next({
        name: 'Login'
      });
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router