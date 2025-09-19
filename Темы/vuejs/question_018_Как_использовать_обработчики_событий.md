# 18.  ### Как использовать обработчики событий?

You can use event handlers in vue similar to plain javascript. The method calls also support the special $event variable.
     ```javascript
     <button v-on:click="show('Welcome to VueJS world', $event)">
       Submit
     </button>

     methods: {
       show: function (message, event) {
         // now we have access to the native event
         if (event) event.preventDefault()
         console.log(message);
       }
     }
     ```