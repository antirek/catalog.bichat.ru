
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/card',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':id',
        component: () => import('pages/Card.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: ':id', 
        component: () => import('pages/Chat.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Login.vue'),
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Profile.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
