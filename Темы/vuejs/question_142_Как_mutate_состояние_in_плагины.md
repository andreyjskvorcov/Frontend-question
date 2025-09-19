# 142. ### Как mutate состояние in плагины?

Similar to components you can't mutate state directly but they can trigger changes by by committing mutations. This way a plugin can be used to sync a data source to the store.
     For example, createWebSocketPlugin plugin is used to sync a websocket data source to the store.
     ```javascript
     export default function createWebSocketPlugin (socket) {
       return store => {
         socket.on('data', data => {
           store.commit('receiveData', data)
         })
         store.subscribe(mutation => {
           if (mutation.type === 'UPDATE_DATA') {
             socket.emit('update', mutation.payload)
           }
         })
       }
     }
     ```
     And then configure plugin in vuex store as below
     ```javascript
     const plugin = createWebSocketPlugin(socket)

     const store = new Vuex.Store({
       state,
       mutations,
       plugins: [plugin]
     })
     ```