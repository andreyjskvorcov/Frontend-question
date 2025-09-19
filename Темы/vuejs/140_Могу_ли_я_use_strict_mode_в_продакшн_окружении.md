# 140. ### Могу ли я use strict mode в продакшн окружении?

No, it is not recommended to use strict mode in production environment. Strict mode runs a synchronous deep watcher on the state tree for detecting inappropriate mutations and it can be quite expensive when you perform large amount of mutations. i.e, It can impact performance if you enable in production mode.
     Hence it should be handled through build tools,
     ```javascript
     const store = new Vuex.Store({
       // ...
       strict: process.env.NODE_ENV !== 'production'
     })
     ```