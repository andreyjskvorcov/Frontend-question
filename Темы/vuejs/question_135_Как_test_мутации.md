# 135. ### Как test мутации?

Since mutations are just functions that completely rely on their arguments it will be easier to test. You need to keep mutations inside your store.js file and should also export the mutations as a named export apart from default export.
     Let's take an example of increment mutations,
     ```javascript
     // mutations.js
     export const mutations = {
       increment: state => state.counter++
     }
     ```
     And test them using mocha and chai as below,
     ```javascript
     // mutations.spec.js
     import { expect } from 'chai'
     import { mutations } from './store'

     // destructure assign `mutations`
     const { increment } = mutations

     describe('mutations', () => {
       it('INCREMENT', () => {
         // mock state
         const state = { counter: 10 }
         // apply mutation
         increment(state)
         // assert result
         expect(state.counter).to.equal(11)
       })
     })
     ```