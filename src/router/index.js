import { createRouter, createWebHistory } from 'vue-router'
import i18n, { defaultLocale } from '../i18n'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: '/:locale',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          // Note that we're using about not /about
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from) => {
  const newLocale = to.params.locale
  const prevLocale = from.params.locale

  if (newLocale === prevLocale) {
    return
  }

  await i18n.loadMessagesFor(newLocale)
  i18n.setLocale(newLocale)
})

export default router
