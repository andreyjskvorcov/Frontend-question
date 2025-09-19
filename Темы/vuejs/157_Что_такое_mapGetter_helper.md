# 157. ### Что такое mapGetter helper??

The mapGetters is a helper that simply maps store getters to local computed properties. For example, the usage of getters for todo app would be as below,
     ```javascript
     import { mapGetters } from 'vuex'

     export default {
       computed: {
         // mix the getters into computed with object spread operator
         ...mapGetters([
           'completedTodos',
           'todosCount',
           // ...
         ])
       }
     }
     ```