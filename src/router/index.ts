import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  // The <Transition mode="out-in"> on RouterView delays the new page's DOM by
  // ~350ms. Wait for it before scrolling, otherwise the new page opens scrolled
  // down to wherever the previous page was.
  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ el: to.hash, behavior: 'smooth', top: 90 })
        } else if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ top: 0, left: 0 })
        }
      }, 380)
    })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'MAGIC photo — ретушь и обработка фотографий' },
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('@/views/PricesView.vue'),
      meta: { title: 'Прайс и заказ — MAGIC photo' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'О студии и контакты — MAGIC photo' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
})

export default router
