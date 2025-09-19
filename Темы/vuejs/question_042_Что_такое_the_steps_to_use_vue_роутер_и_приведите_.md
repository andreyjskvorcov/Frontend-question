# 42.  ### Что такое the steps to use vue роутер и приведите пример?

It is easy to integrate vue router in the vue application. Let us see the example with step by step instructions.

     **Step 1:** Configure router link and router view in the template
     ```javascript
     <script src="https://unpkg.com/vue/dist/vue.js"></script>
     <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

     <div id="app">
       <h1>Welcome to Vue routing app!</h1>
       <p>
         <!-- use router-link component for navigation using `to` prop. It rendered as an `<a>` tag -->
         <router-link to="/home">Home</router-link>
         <router-link to="/services">Services</router-link>
       </p>
       <!-- route outlet in which component matched by the route will render here -->
       <router-view></router-view>
     </div>
     ```
     **Step 2:** Import Vue and VueRouter packages and then apply router
     ```javascript
     import Vue from 'vue';
     import VueRouter from 'vue-router';

     Vue.use(VueRouter)
     ```
     **Step 3:** Define or import route components.
     ```javacript
     const Home = { template: '<div>Home</div>' }
     const Services = { template: '<div>Services</div>' }
     ```
     **Step 4:** Define your route where each one maps to a component
     ```javascript
     const routes = [
       { path: '/home', component: Home },
       { path: '/services', component: Services }
     ]
     ```
     **Step 5:** Create the router instance and pass the `routes` option
     ```javascript
     const router = new VueRouter({
       routes // short for `routes: routes`
     })
     ```
     **Step 6:**  Create and mount the root instance.
     ```javacript
     const app = new Vue({
       router
     }).$mount('#app')
     ```

     Now you are able to navigate different pages(Home, Services) with in Vue application.