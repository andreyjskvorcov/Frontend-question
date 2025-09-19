# 58.  ### Что такое global миксины?

Sometimes there is a need to extend the functionality of Vue or apply an option to all Vue components available in our application. In this case, mixins can be applied globally to affect all components in Vue. These mixins are called as global mixins. Let's take an example of global mixin,
     ```javascript
     Vue.mixin({
       created(){
       console.log("Write global mixins")
       }
     })

     new Vue({
       el: '#app'
     })
     ```
     In the above global mixin, the mixin options spread across all components with the console running during the instance creation. These are useful during test, and debugging or third party libraries. At the same time, You need to use these global mixins sparsely and carefully, because it affects every single Vue instance created, including third party components.