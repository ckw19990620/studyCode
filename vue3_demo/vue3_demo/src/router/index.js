import Home from "../views/Home.vue";
import About from "../views/About.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import notFound from "../views/notFound.vue";

const routes = [{
  path: '/',
  redirect: '/Home'
}, {
  path: '/Home',
  components: {default: Home, About}
}, {
  path: '/about',
  component: About,
  children: [
    {
      path: 'hello/:id',
      name: 'hello',
      props: true,
      component: HelloWorld
    }
  ]
}, {
  path: '/:path(.*)',
  component: notFound
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
