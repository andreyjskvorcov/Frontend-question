# 94.  ### Как использовать различные CDNs?

VueJS is available in jsdelivr, unpkg and cdnjs etc CDNs. Normally you can use them for prototyping or learning purposes. For example, you can use them using jsdelivr with latest versions as below,
     ```javascript
     <script src="https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.js"></script>
     ```
     You can use it for native ES modules as below,
     ```javascript
     <script type="module">
       import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.esm.browser.js'
     </script>
     ```

     **Note:** You can remove version number to get latest version.