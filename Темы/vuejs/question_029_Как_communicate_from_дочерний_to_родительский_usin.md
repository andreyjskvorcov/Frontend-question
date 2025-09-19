# 29.  ### Как communicate from дочерний to родительский using events?

If you want child wants to communicate back up to the parent, then emit an event from child using `$event` object to parent,
     ```javascript
     Vue.component('todo-tem', {
       props: ['todo'],
       template: `
         <div class="todo-item">
           <h3>{{ todo.title }}</h3>
           <button v-on:click="$emit('increment-count', 1)">
             Add
           </button>
           <div v-html="todo.description"></div>
         </div>
       `
     })
     ```
     Now you can use this todo-item in parent component to access the count value.
     ```javascript
     <ul v-for="todo in todos">
     <li>
        <todo-item
           v-bind:key="todo.id"
           v-bind:todo="todo" v-on:increment-count="total += 1"></todo-item>
     </li>
     </ul>
     <span> Total todos count is {{total}}</span>
     ```