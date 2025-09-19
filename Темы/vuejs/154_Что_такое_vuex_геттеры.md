# 154. ### Что такое vuex геттеры??

Vuex getters acts as computed properties for stores to compute derived state based on store state. Similar to computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.
     Let's take a todo example which as completedTodos getter to find all completed todos,
     ```javascript
     const store = new Vuex.Store({
       state: {
         todos: [
           { id: 1, text: 'Vue course', completed: true },
           { id: 2, text: 'Vuex course', completed: false },
           { id: 2, text: 'Vue Router course', completed: true }
         ]
       },
       getters: {
         completedTodos: state => {
           return state.todos.filter(todo => todo.completed)
         }
       }
     })
     ```
     **Note:**Getters receive state as first argument.