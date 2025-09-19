# 141. ### Что такое vuex плагин?

The vuex plugin is an option hat exposes hooks for each mutation. It is a normal function that receives the store as the only argument. You can create your own plugin or use built-in plugins.
     The plugin skeleton would be as below,
     ```javascript
     const myPlugin = store => {
       // called when the store is initialized
       store.subscribe((mutation, state) => {
         // called after every mutation.
         // The mutation comes in the format of `{ type, payload }`.
       })
     }
     ```
     After that plugin can be configured for plugins options as below,
     ```javascript
     const store = new Vuex.Store({
       // ...
       plugins: [myPlugin]
     })
     ```