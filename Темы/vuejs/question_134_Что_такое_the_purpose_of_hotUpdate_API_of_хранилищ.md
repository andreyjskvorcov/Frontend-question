# 134. ### Что такое the purpose of hotUpdate API of хранилище vuex?

The store.hotUpdate() API method is used for mutations and modules. For example, you need to configure vuex store as below,
     ```javascript
     // store.js
     import Vue from 'vue'
     import Vuex from 'vuex'
     import mutations from './mutations'
     import myModule from './modules/myModule'

     Vue.use(Vuex)

     const state = { message: "Welcome to hot reloading" }

     const store = new Vuex.Store({
       state,
       mutations,
       modules: {
         moduleA: myModule
       }
     })

     if (module.hot) {
       // accept actions and mutations as hot modules
       module.hot.accept(['./mutations', './modules/newMyModule'], () => {
         // Get the updated modules
         const newMutations = require('./mutations').default
         const newMyModule = require('./modules/myModule').default
         //swap in the new modules and mutations
         store.hotUpdate({
           mutations: newMutations,
           modules: {
             moduleA: newMyModule
           }
         })
       })
     }
     ```