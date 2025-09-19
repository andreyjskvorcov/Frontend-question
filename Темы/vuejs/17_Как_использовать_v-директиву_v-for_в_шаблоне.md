# 17.  ### Как использовать v-директиву v-for в шаблоне?

Just similar to v-if directive on template, you can also use a `<template>` tag with v-for directive to render a block of multiple elements. Let's take a todo example,
     ```javascript
     <ul>
       <template v-for="todo in todos">
         <li>{{ todo.title }}</li>
         <li class="divider"></li>
       </template>
     </ul>
     ```