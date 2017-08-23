import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import components from '../components/components'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'development'
    },
    {
      path: '/o-index',
      name: 'o-index',
      component (resolve) {
        require.ensure(['@/components/OIndex.vue'], () => {
          resolve(require('@/components/OIndex.vue'))
        })
      },
      children: [
        {
          path: '/development',
          name: 'development',
          component (resolve) {
            require.ensure(['@/components/ODevelopment.vue'], () => {
              resolve(require('@/components/ODevelopment.vue'))
            })
          }
        },
        {
          path: '/information',
          name: 'information',
          component (resolve) {
            require.ensure(['@/components/OInformation.vue'], () => {
              resolve(require('@/components/OInformation.vue'))
            })
          }
        },
        {
          path: '/case',
          name: 'case',
          component (resolve) {
            require.ensure(['@/components/OCase.vue'], () => {
              resolve(require('@/components/OCase.vue'))
            })
          }
        }
      ]
    }
  ]
})

export default router
