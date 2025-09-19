# 124. ### Как access global properties of функциональные компоненты?

If you need to access properties defined globally on `Vue.prototype` then you can access them on parent,

     ```javascript
     <template functional>
       <div>{{ parent.$someProperty }}</div>
     </template>
     ```