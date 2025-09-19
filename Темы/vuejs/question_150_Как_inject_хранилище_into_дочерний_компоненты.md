# 150. ### Как inject хранилище into дочерний компоненты?

Vuex provides a mechanism to "inject" the store into all child components from the root component with the store option. It will be enabled by vue.use(vuex).
     For example, let's inject into our app component as below,
     ```javascript
     const app = new Vue({
       el: '#app',
       // provide the store using the "store" option.
       // this will inject the store instance to all child components.
       store,
       components: { Greeting },
       template: `
         <div class="app">
           <greeting></greeting>
         </div>
       `
     })
     ```
     Now the store will be injected into all child components of the root and will be available on them as **this.$store**
     ```javascript
      // let's create a hello world component
          const Greeting = {
            template: `<div>{{ greet }}</div>`,
            computed: {
              greet () {
                return this.$store.state.msg
              }
            }
          }
     ```