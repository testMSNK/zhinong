import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import components from '../components/components'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'components'
    },
    {
      path: '/hello',
      name: 'Hello',
      component (resolve) {
        require.ensure(['@/components/Hello.vue'], () => {
          resolve(require('@/components/Hello.vue'))
        })
      }
    },
    {
      path: '/components',
      name: 'components',
      component (resolve) {
        require.ensure(['@/components/components.vue'], () => {
          resolve(require('@/components/components.vue'))
        })
      }
    }
  ]
})

export default router
