# 50.  ### Что такое фильтры?

Filters can be used to apply common text formatting. These Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol. You can use them in two specific cases:
     1. mustache interpolations
     2. v-bind expressions

     For example, Let's define a local filter named capitalize in a component’s options
     ```javascript
     filters: {
       capitalize: function (value) {
         if (!value) return ''
         value = value.toString()
         return value.charAt(0).toUpperCase() + value.slice(1)
       }
     }
     ```
     Now you can use the filter in either mustache interpolation or v-bind expression,
     ```javascript
     <!-- in mustaches -->
     {{ username | capitalize }}

     <!-- in v-bind -->
     <div v-bind:id="username | capitalize"></div>
     ```