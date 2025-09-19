# 143. ### Что такое хранилище vuex?

A Vuex "store" is basically a container that holds your application state. The store creation is pretty straightforward.
     Below are the list of instructions to use vuex in an increment application,
     1. Configure vuex in vuejs ecosystem
     ```javascript
     import Vuex from "vuex";
     Vue.use(Vuex)
     ```
     2. Provide an initial state object and some mutations
     ```javascript
     // Make sure to call Vue.use(Vuex) first if using a module system

     const store = new Vuex.Store({
       state: {
         count: 0
       },
       mutations: {
         increment (state) {
           state.count++
         }
       }
     })
     ```
     3. Trigger state change with commit and access state variables,
     ```javascript
     store.commit('increment')

     console.log(store.state.count) // -> 1
     ```