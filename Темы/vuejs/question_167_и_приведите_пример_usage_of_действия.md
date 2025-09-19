# 167. ### и приведите пример usage of действия?

Vuex provides actions property similar mutations property in order to define action handlers. These action handlers receive context object as an argument which has same properties and methods of store instance.
     Let's see counter example to demonstrate increment action which commits respective mutation,
     ```javascript
     const store = new Vuex.Store({
       state: {
         count: 0
       },
       mutations: {
         increment (state) {
           state.count++
         }
       },
       actions: {
         increment (context) {
           context.commit('increment')
         }
       }
     })
     ```