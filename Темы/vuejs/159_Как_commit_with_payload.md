# 159. ### Как commit with payload?

You can also pass **payload** for the mutation as an additional argument to `store.commit`. For example, the counter mutation with payload object would be as below,
     ```javascript
     mutations: {
       increment (state, payload) {
         state.count += payload.increment
       }
     }
     ```
     And then you can trigger increment commit
     ```javascript
     store.commit('increment', {
       increment: 20
     })
     ```
     **Note:** You can also pass primitives as payload.