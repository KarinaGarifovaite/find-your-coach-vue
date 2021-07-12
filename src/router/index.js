import Vue from 'vue';
import VueRouter from 'vue-router';
import CoachDetail from '../views/coaches/CoachDetail.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachRegistration from '../views/coaches/CoachRegistration.vue';
import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import UserAuth from '../views/auth/UserAuth.vue';
import NotFound from '../views/NotFound.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    name: 'Coach',
    component: CoachDetail,
    props: true,
    children: [
      {
        path: 'contact',
        name: 'Contact',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: CoachRegistration,
    meta: { requiredAuth: true },
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestReceived,
    meta: { requiredAuth: true },
  },
  {
    path: '/auth',
    name: 'UserAuth',
    component: UserAuth,
    meta: { requiredUnAuth: true },
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiredAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.requiredUnAuth && store.getters.isAuth) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
