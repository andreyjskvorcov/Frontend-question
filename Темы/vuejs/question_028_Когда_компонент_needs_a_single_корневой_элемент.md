# 28.  ### Когда компонент needs a single корневой элемент?

Every component must have a single root element **when template has more than one element**. In this case, you need to wrap the elements with a parent element.
     ```javascript
     <div class="todo-item">
       <h2>{{ title }}</h2>
       <div v-html="content"></div>
     </div>
     ```
     Otherwise there will an error throwing, saying that "Component template should contain exactly one root element...".