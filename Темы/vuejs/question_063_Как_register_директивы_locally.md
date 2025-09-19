# 63.  ### Как register директивы locally?

You can also register directives locally(apart from globally) using directives option in component as below,
     ```javascript
     directives: {
       focus: {
         // directive definition
         inserted: function (el) {
           el.focus()
         }
       }
     }
     ```
     Now you can use v-focus directive on any element as below,
     ```html
     <input v-focus>
     ```