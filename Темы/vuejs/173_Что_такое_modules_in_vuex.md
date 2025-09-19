# 173. ### Что такое modules in vuex?

If you keep all state of our application in a single big state, the store can get really bloated. To solve this problem, Vuex allows us to divide our store into modules. Here, each module can contain its own state, mutations, actions, getters, and even nested modules.
     Let's take an example with multiple modules, configuring them in vuex and accessing different modules,
     ```javascript
     const moduleA = {
       state: { ... },
       mutations: { ... },
       actions: { ... },
       getters: { ... }
     }

     const moduleB = {
       state: { ... },
       mutations: { ... },
       actions: { ... },
       getters: { ... }
     }

     const store = new Vuex.Store({
       modules: {
         a: moduleA,
         b: moduleB
       }
     })

     store.state.a // -> `moduleA`'s state
     store.state.b // -> `moduleB`'s state
     ```