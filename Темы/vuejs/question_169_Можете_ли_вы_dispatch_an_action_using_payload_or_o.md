# 169. ### Можете ли вы dispatch an action using payload or object style?

Yes, actions support both payload and object style format similar to mutations.
     ```javascript
     // dispatch with a payload
     store.dispatch('incrementAsync', {
       amount: 10
     })

     // dispatch with an object
     store.dispatch({
       type: 'incrementAsync',
       amount: 10
     })
     ```