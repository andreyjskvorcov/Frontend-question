# 104. ### Что такое a vuejs loader?

Vue loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs). For example, it authors HelloWorld component in a SFC,
     ```javascript
     <template>
       <div class="greeting">{{ message }}</div>
     </template>

     <script>
     export default {
       data () {
         return {
           message: 'Hello world for vueloader!'
         }
       }
     }
     </script>

     <style>
     .greeting {
       color: blue;
     }
     </style>
     ```