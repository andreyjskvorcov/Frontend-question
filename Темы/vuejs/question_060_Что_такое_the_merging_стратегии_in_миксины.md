# 60.  ### Что такое the merging стратегии in миксины?

When a mixin and the component itself contain overlapping options, the options will be merged based on some strategies.
     1. The data objects undergo a recursive merge, with the component’s data taking priority over mixins in cases of overlapping or conflicts.
     ```javascript
     var mixin = {
       data: function () {
         return {
           message: 'Hello, this is a Mixin'
         }
       }
      }
     new Vue({
       mixins: [mixin],
       data: function () {
         return {
           message: 'Hello, this is a Component'
         }
       },
       created: function () {
         console.log(this.$data); // => { message: "Hello, this is a Component'" }
       }
     })
     ```
     2. The Hook functions which are overlapping merged into an array so that all of them will be called. Mixin hooks will be called before the component’s own hooks.
     ```javascript
     const myMixin = {
       created(){
         console.log("Called from Mixin")
       }
     }

     new Vue({
       el: '#root',
       mixins:[myMixin],
       created(){
         console.log("Called from Component")
       }
     })

     //Called from Mixin
     //Called from Component
     ```
     3. The options that expect object values(such as methods, components and directives) will be merged into the same object. In this case, the component’s options will take priority when there are conflicting keys in these objects.
     ```javascript
     var mixin = {
       methods: {
         firstName: function () {
           console.log('John')
         },
         contact: function () {
           console.log('+65 99898987')
         }
       }
     }

     var vm = new Vue({
       mixins: [mixin],
       methods: {
         lastName: function () {
           console.log('Murray')
         },
         contact: function () {
           console.log('+91 893839389')
         }
       }
     })

     vm.firstName() // "John"
     vm.lastName() // "Murray"
     vm.contact() // "+91 893839389"
     ```