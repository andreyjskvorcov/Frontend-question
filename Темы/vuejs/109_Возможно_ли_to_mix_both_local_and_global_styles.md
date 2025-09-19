# 109. ### Возможно ли to mix both local and global styles?

Yes, You can include both scoped and non-scoped styles in the same component. If you don't mention scoped attribute then it will become global style.
     ```javascript
     <style>
     /* global styles */
     </style>

     <style scoped>
     /* local styles */
     </style>
     ```