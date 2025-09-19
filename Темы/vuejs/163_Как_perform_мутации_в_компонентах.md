# 163. ### Как perform мутации в компонентах?

You can commit mutations in components with  either **this.$store.commit('mutation name')** or mapMutations helper to map component methods to **store.commit** calls.
     For example, the usage of mapMutations helper on counter example would be as below,
     ```javascript
     import { mapMutations } from 'vuex'

     export default {
       methods: {
         ...mapMutations([
           'increment', // map `this.increment()` to `this.$store.commit('increment')`

           // `mapMutations` also supports payloads:
           'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
         ]),
         ...mapMutations({
           add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
         })
       }
     }
     ```