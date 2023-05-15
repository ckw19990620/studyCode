import Home from "../views/Home.vue";
import About from "../views/About.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [{
  path: '/', redirect: '/Home'
}, {
  path: '/Home', component: Home
}, {
  path: '/about', component: About, children: [{
    path: 'hello/:id', component: HelloWorld
  }]
}]

const router = createRouter({
  history: createWebHashHistory(), routes
})
export default router
