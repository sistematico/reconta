export const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/notfound.vue') },
]

