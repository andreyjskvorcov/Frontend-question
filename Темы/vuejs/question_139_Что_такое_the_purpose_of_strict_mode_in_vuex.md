# 139. ### Что такое the purpose of strict mode in vuex?

In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown. It make sure that all state mutations can be explicitly tracked by debugging tools. You can just enable this by passing `strict: true` while creating the vuex store.
     ```javascript
     const store = new Vuex.Store({
       // ...
       strict: true
     })
     ```