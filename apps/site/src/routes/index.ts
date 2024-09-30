export const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
  {
    path: '/conta',
    // component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'entrar',
        name: 'Login', 
        component: () => import('@/views/login.vue')
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'cadastro',
        name: 'Register', 
        component: () => import('@/views/register.vue')
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/notfound.vue') },
]

