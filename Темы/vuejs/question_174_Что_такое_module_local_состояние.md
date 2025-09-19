# 174. ### Что такое module local состояние?

When you use modules the local state will be available to mutations, getters and actions in different ways.
     1. Both mutations and getters will receive module local state as first argument.
     ```javascript
     const moduleOne = {
       state: { count: 0 },
       mutations: {
         increment (state) {
           state.count++; // Here state refers local module state
         }
       },

       getters: {
         average (state) {
           return state.count / 2
         }
       }
     }
     ```
     2. In actions, local state will be available as first argument.
     ```javascript
     const moduleOne = {
       actions: {
         incrementConditional ({ state, commit, rootState }) {
           if (state.count < rootState.count) {
             commit('increment')
           }
         }
       }
     }
     ```