# 102. ### Что такое the major компоненты of состояние Management Pattern?

The state management has state, view and actions as major components. The pattern followed by these components in a application is known as State Management Pattern. Below are the components in a detail,
     1. The **state**, which is the source of truth that drives our app
     2. The **view**, which is just a declarative mapping of the state
     3. The **actions**, which are the possible ways the state could change in reaction to user inputs from the view.
     Let us take a counter example which follows state management pattern with the above 3 components,
     ```javascript
     new Vue({
       // state
       data () {
         return {
           count: 0
         }
       },
       // view
       template: `
         <div>{{ count }}</div>
       `,
       // actions
       methods: {
         increment () {
           this.count++
         }
       }
     })
     ```