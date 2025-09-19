# 23.  ### Что такое the поддерживаемые модификаторы кнопок мыши?

Vue supports below mouse button modifiers
     1. .left
     2. .right
     3. .middle

     For example, the usage of `.right` modifier as below
     ```javascript
      <button
        v-if="button === 'right'"
        v-on:mousedown.right="increment"
        v-on:mousedown.left="decrement"
      />
     ```