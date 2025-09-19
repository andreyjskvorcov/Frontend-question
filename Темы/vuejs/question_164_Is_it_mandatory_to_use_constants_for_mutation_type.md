# 164. ### Is it mandatory to use constants for mutation types?

No, it is not mandatory. But you might observed that State management implementations such Flux and Redux use constants for mutation types. This convention is just a preference and useful to take advantage of tooling like linters, and putting all constants in a single file allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application.
     For example, the mutations can be declared as below,
     ```javascript
     // mutation-types.js
     export const SOME_MUTATION = 'SOME_MUTATION'
     ```
     And you can configure them in store as follows,
     ```javascript
     // store.js
     import Vuex from 'vuex'
     import { SOME_MUTATION } from './mutation-types'

     const store = new Vuex.Store({
       state: { ... },
       mutations: {
         // ES2015 computed property name feature to use a constant as the function name
         [SOME_MUTATION] (state) {
           // mutate state
         }
       }
     })
     ```