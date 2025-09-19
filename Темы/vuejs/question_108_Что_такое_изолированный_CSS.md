# 108. ### Что такое изолированный CSS?

Scoped CSS is a mechanism in VueJS Single File Components(SFC) that prevents styles from leaking out of the current component and affecting other unintended components on your page. i.e, When a <style> tag has the scoped attribute, its CSS will apply to elements of the current component only. It uses PostCSS to transform scoped css to plain CSS.
     Let's take an example usage of scoped css,
     ```javascript
     <style scoped>
     .greeting {
       color: green;
     }
     </style>

     <template>
       <div class="greeting">Let's start Scoped CSS</div>
     </template>
     ```
     The above code will be converted to plain CSS,
     ```javascript
       <style scoped>
      .greeting[data-v-f3f3eg9] {
        color: green;
      }
      </style>

      <template>
        <div class="greeting" data-v-f3f3eg9>Let's start Scoped CSS</div>
      </template>
     ```