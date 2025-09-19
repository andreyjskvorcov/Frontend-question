# 62.  ### Что такое пользовательские директивы?

Custom Directives are tiny commands that you can attach to DOM elements. They are prefixed with v- to let the library know you're using a special bit of markup and to keep syntax consistent. They are typically useful if you need low-level access to an HTML element to control a bit of behavior. Let's create a custom focus directive to provide focus on specific form element during page load time,
     ```javascript
     // Register a global custom directive called `v-focus`
     Vue.directive('focus', {
       // When the bound element is inserted into the DOM...
       inserted: function (el) {
         // Focus the element
         el.focus()
       }
     })
     ```
     Now you can use v-focus directive on any element as below,
     ```html
     <input v-focus>
     ```