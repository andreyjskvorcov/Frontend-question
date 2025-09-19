# 172. ### Как compose действия?

You can write multiple actions together to handle more complex async flows either by chaining promises or async/await. i.e, `store.dispatch` can handle Promise returned by the triggered action handler and it also returns Promise.
     Let's take two actions to see how they are combined and handled async flows,
     ```javascript
     actions: {
       actionOne ({ commit }) {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
             commit('first mutation')
             resolve()
           }, 1000)
         })
       },
        actionTwo ({ dispatch, commit }) {
           return dispatch('actionA').then(() => {
             commit('second mutation')
           })
         }
     }
     ```
     As per the above example, When you try to dispatch actionTwo it dispatchs actionOne first and then commits respective mutation. You can still simplify with async/await as below,
     ```javascript
     actions: {
       async actionOne ({ commit }) {
         commit('first mutation', await getDataAsPromise())
       },
       async actionTwo ({ dispatch, commit }) {
         await dispatch('actionOne') // wait for `actionA` to finish
         commit('second mutation', await getSomeDataAsPromise())
       }
     }
     ```