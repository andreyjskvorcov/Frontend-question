# 171. ### Как dispatch действия в компонентах?

You can dispatch actions in components with **this.$store.dispatch('action name')**, or use the **mapActions** helper which maps component methods to store.dispatch calls.
     For example, you can dispatch increment actions in counter component as below,
     ```javascript
     import { mapActions } from 'vuex'

     export default {
       // ...
       methods: {
         ...mapActions([
           'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

           // `mapActions` also supports payloads:
           'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
         ]),
         ...mapActions({
           add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
         })
       }
     }
     ```