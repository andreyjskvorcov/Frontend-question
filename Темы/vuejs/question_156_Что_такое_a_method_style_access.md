# 156. ### Что такое a method style access?

You can access store's state in a method style by passing arguments. For example, you can pass user id to find user profile information as below,
     ```javascript
     getters: {
       getUserProfileById: (state) => (id) => {
         return state.users.find(user => user.id === id)
       }
     }
     ```
     After that you can access it as a method call,
     ```javascript
     store.getters.getUserProfileById(111); {id: '111', name: 'John', age: 33}
     ```