# 91.  ### Что такое the purpose of vuejs compiler?

The compiler is  is responsible for compiling template strings into JavaScript render functions. For example, the below code snippet shows the difference of templates which need compiler and not,
     ```javascript
     // this requires the compiler
     new Vue({
       template: '<div>{{ message }}</div>'
     })

     // this does not
     new Vue({
       render (h) {
         return h('div', this.message)
       }
     })
     ```