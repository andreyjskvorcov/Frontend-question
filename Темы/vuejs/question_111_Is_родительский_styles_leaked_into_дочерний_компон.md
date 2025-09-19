# 111. ### Is родительский styles leaked into дочерний компоненты in изолированный CSS?

The parent component's styles will not leak into child components. But a child component's root node will be affected by both the parent's scoped CSS and the child's scoped CSS. i.e, your child component's root element has a class that also exists in the parent component, the parent component's styles will leak to the child. Anyway this is by design so that the parent can style the child root element for layout purposes.
     For example, the background color property of parent component leaked into child component as below,
     //parent.vue
     ```javascript
     <template>
       <div class="wrapper">
         <p>parent</p>
         <ChildMessageComponent/>
       </div>
     </template>

     <script>
     import ChildMessageComponent from "./components/child";

     export default {
       name: "App",
       components: {
         ChildMessageComponent
       }
     };
     </script>
     <style scoped>
     .wrapper {
       background: blue;
     }
     </style>
     ```
     //child.vue
     ```javascript
     <template>
       <div class="wrapper">
         <p>child</p>
       </div>
     </template>

     <script>
     export default {
       name: "Hello, Scoped CSS",
     };
     </script>
     <style scoped>
     .wrapper {
       background: red;
     }
     </style>
     ```
     Now the background color of child wrapper is going to be blue instead red.