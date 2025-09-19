# 16.  ### Как использовать v-директиву v-for с диапазоном?

You can also use integer type(say 'n') for v-for directive which repeats the element many times.
     ```javascript
     <div>
       <span v-for="n in 20">{{ n }} </span>
     </div>
     ```
     It displays the number 1 to 20.