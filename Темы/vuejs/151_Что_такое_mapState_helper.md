# 151. ### Что такое mapState helper?

In Vuex application, creating a computed property every time whenever we want to access the store's state property or getter is going to be repetitive and verbose, especially if a component needs more than one state property. In this case, we can make use of the mapState helper of vuex which generates computed getter functions for us.
     Let's take an increment example to demonstrate mapState helper,
     ```javascript
     // in full builds helpers are exposed as Vuex.mapState
     import { mapState } from 'vuex'

     export default {
       // ...
       computed: mapState({
         // arrow functions can make the code very succinct!
         username: state => state.username,

         // passing the string value 'username' is same as `state => state.username`
         usernameAlias: 'username',

         // to access local state with `this`, a normal function must be used
          greeting (state) {
           return this.localTitle + state.username
         }
       })
     }
     ```
     We can also pass a string array to mapState when the name of a mapped computed property is the same as a state sub tree name
     ```javascript
     computed: mapState([
       // map this.username to store.state.username
       'username'
     ])
     ```