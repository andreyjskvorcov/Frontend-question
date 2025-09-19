# 152. ### Как combine local computed properties with mapState helper?

You can use object spread operator syntax in order to combine mapState helper(which returns an object) with other local computed properties. This way it simplify merging techniques using utilities.
     ```javascript
     computed: {
       localComputed () { /* ... */ },
       // mix this into the outer object with the object spread operator
       ...mapState({
         // ...
       })
     }
     ```