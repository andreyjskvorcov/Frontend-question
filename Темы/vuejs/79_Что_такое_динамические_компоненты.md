# 79.  ### Что такое динамические компоненты?

The dynamic component is used to dynamically switch beetween multiple components using **<component>** element and pass data to v-bind:is attribute.
     Let's create a dynamic component to switch between different pages of a website,
     ```javascript
     new Vue({
       el: '#app',
       data: {
         currentPage: 'home'
       },
       components: {
         home: {
           template: "<p>Home</p>"
         },
         about: {
           template: "<p>About</p>"
         },
         contact: {
           template: "<p>Contact</p>"
         }
       }
     })
     ```
     Now you can use the dynamic component which holds the current page,
     ```html
     <div id="app">
        <component v-bind:is="currentPage">
            <!-- component changes when currentPage changes! -->
            <!-- output: Home -->
        </component>
     </div>
     ```