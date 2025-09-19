# 160. ### Что такое object style commit?

You can also commit a mutation is by directly using an object that has a **type** property.
     ```javascript
     store.commit({
       type: 'increment',
       value: 20
     })
     ```
     Now the entire object will be passed as the payload to mutation handlers(i.e, without any changes to handler signature).
     ```javascript
     mutations: {
       increment (state, payload) {
         state.count += payload.value
       }
     }
     ```