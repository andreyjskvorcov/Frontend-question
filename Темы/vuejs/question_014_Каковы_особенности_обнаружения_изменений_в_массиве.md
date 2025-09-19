# 14.  ### Каковы особенности обнаружения изменений в массиве?

Vue не может определить изменения в массиве в следующих случаях:
     1. Когда вы напрямую меняете элемент массива, обращаясь по индексу, например:
      ```javascript
      vm.todos[indexOfTodo] = newTodo
      ```
     2. Когда вы меняете длину массива напрямую, например:
      ```javascript
      vm.todos.length = todosLength
      ```
     Вы можете достичь этих целей при помощи методов `set` и `splice`, например:
     **Первый случай**
     ```javascript
     // Vue.set
     Vue.set(vm.todos, indexOfTodo, newTodoValue)
     // или
     // Array.prototype.splice
     vm.todos.splice(indexOfTodo, 1, newTodoValue)
     ```
     **Второй случай**
     ```javascript
     vm.todos.splice(todosLength)
     ```