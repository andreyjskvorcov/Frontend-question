# 83.  ### Что такое встроенные шаблоны?

If you keep an `inline-template` on a child component then it will use its inner content as a template instead of treating as reusable independent content.
     ```javascript
     <my-component inline-template>
        <div>
            <h1>Inline templates</p>
            <p>Treated as component component owne content</p>
        </div>
     </my-component>
     ```
     **Note:** Even though this inline-templates gives more flexibility for template authoring, it is recommended to define template using template property or <template> tag inside .vue component.