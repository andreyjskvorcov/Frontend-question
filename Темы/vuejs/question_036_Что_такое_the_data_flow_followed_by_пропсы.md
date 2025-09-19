# 36.  ### Что такое the data flow followed by пропсы?

All props follows a one-way-down binding between the child property and the parent one. i.e, When the parent property is updated then that latest prop value will be passed down to the child, but not the otherway(child to parent) around. The child component should not mutate the prop otherwise it throws a warning in the console.
     The possible mutation cases can be solved as below,
     1. When you try to use parent prop as initial value for child property:

     In this case you can define a local property in child component and assign parent value as initial value
     ```javascript
     props: ['defaultUser'],
     data: function () {
       return {
         username: this.defaultUser
       }
     }
     ```
     2. When you try to transform the parent prop:
     
     You can define a computed property using the prop’s value,
     ```javascript
     props: ['environment'],
     computed: {
       localEnvironment: function () {
         return this.environment.trim().toUpperCase()
       }
     }
     ```