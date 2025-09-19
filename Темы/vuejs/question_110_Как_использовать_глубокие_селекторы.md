# 110. ### Как использовать глубокие селекторы?

In scoped css, if you need to modify the styles of a child component using deep selectors(i,e from parent scoped css) then you need to use **>>>** combinator. For example, the scoped deep selector on parent scoped css would be as below,
     ```javascript
     <style scoped>
     .class1 >>> .class2 { /* ... */ }
     </style>
     ```
     It will be converted as,
     ```javascript
     .class1[data-v-f3f3eg9] .class2 { /* ... */ }
     ```
     **Note:** If you preprocessors such as SASS then it may not be able to processs >>> properly. In such cases use the /deep/ or ::v-deep combinator instead >>> combinator.