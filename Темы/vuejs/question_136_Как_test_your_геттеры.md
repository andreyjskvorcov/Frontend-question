# 136. ### Как test your геттеры?

It is easier to test getters similar to mutations. It is recommended to test these getters if they have complicated computation.
     Let's take a simple todo filter as a getter
     ```javascript
     // getters.js
     export const getters = {
       filterTodos (state, status) {
         return state.todos.filter(todo => {
           return todo.status === status
         })
       }
     }
     ```
     And the test case for above getter as follows,
     ```javascript
     // getters.spec.js
     import { expect } from 'chai'
     import { getters } from './getters'

     describe('getters', () => {
       it('filteredTodos', () => {
         // mock state
         const state = {
           todos: [
             { id: 1, title: 'design', status: 'Completed' },
             { id: 2, title: 'testing', status: 'InProgress' },
             { id: 3, title: 'development', status: 'Completed' }
           ]
         }
         // mock getter
         const filterStatus = 'Completed'

         // get the result from the getter
         const result = getters.filterTodos(state, filterStatus)

         // assert the result
         expect(result).to.deep.equal([
           { id: 1, title: 'design', status: 'Completed' },
           { id: 2, title: 'development', status: 'Completed' }
         ])
       })
     })
     ```