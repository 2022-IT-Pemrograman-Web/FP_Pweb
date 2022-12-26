import VueRouter from 'vue-router'
import linkList from '@/components/linkList'
import Showlink from '@/components/Showlink'
import Addlink from '@/components/Addlink'
import Editlink from '@/components/Editlink'
// import Openlink from '@/components/Openlink'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'linkList',
      component: linkList
    },
    {
      path: '/show-link/:id',
      name: 'Showlink',
      component: Showlink
    },
    {
      path: '/add-link',
      name: 'Addlink',
      component: Addlink
    },
    {
      path: '/edit-link/:id',
      name: 'Editlink',
      component: Editlink
    },
    // {
    //   path: '/open-link/:id',
    //   // beforeEnter() {location.href = 'http://github.com'}
    //   name: 'Openlink',
    //   component: Openlink
    // },
  ],

})



