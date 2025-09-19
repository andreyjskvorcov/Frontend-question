# 149. ### Как display хранилище состояние in vue компоненты?

Since Vuex stores are reactive, you can retrieve" state from store by simply returning store's state from within a computed property. i.e, Whenever store state changes, it will cause the computed property to re-evaluate, and trigger associated DOM updates.
     Let's take a hello word component which display store's state in the template,
     ```javascript
     // let's create a hello world component
     const Greeting = {
       template: `<div>{{ greet }}</div>`,
       computed: {
         greet () {
           return store.state.msg
         }
       }
     }
     ```