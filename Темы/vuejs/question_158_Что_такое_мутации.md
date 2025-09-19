# 158. ### Что такое мутации?

Vuex mutations are similar to any events with a string `type` and a `handler`. The handler function is where we perform actual state modifications, and it will receive the state as the first argument.
     For example, the counter example with increment mutation would be as below,
     ```javascript
     const store = new Vuex.Store({
       state: {
         count: 0
       },
       mutations: {
         increment (state) {
           // mutate state
           state.count++
         }
       }
     })
     ```
     You can't directly invoke mutation instead you need to call `store.commit` with its type. The above mutation would be triggered as folows
     ```javascript
     store.commit('increment')
     ```