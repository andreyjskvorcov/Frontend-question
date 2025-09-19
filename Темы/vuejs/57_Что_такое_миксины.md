# 57.  ### Что такое миксины?

Mixin gives us a way to distribute reusable functionalities in Vue components. These reusable functions are merged with existing functions. A mixin object can contain any component options. Let us take an example of mixin with `created` lifecycle which can be shared across components,
     ```javascript
     const myMixin = {
       created(){
         console.log("Welcome to Mixins!")
       }
     }
     var app = new Vue({
       el: '#root',
       mixins: [myMixin]
     })
     ```
     **Note:** Multiple mixins can be specified in the mixin array of the component.