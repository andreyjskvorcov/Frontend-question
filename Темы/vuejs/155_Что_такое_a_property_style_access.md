# 155. ### Что такое a property style access?

You can access values of store's getter object(store.getters) as properties. This is known as property style access.
     For example, you can access todo's status as a property,
     ```javascript
     store.getters.todosStatus
     ```
     The getters can be passed as 2nd argument for other getters. For example, you can derive completed todo's count based on their status as below,
     ```javascript
     getters: {
       completedTodosCount: (state, getters) => {
         return getters.todosStatus === 'completed'
       }
     }
     ```
     **Note:** The getters accessed as properties are cached as part of Vue's reactivity system.