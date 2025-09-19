# 147. ### Как install vuex?

You can install vuex using npm or yarn as below,
     ```javascript
     npm install vuex --save
     (or)
     yarn add vuex
     ```
     In a module system, you must explicitly install Vuex via Vue.use()
     ```javascript
     import Vue from 'vue'
     import Vuex from 'vuex'

     Vue.use(Vuex)
     ```
     (OR)
     You can also install it using CDN links such as unpkg.cpm which provides NPM-based CDN links. Just include vuex after Vue and it will install itself automatically.
     ```javascript
     <script src="https://unpkg.com/vue.js"></script>
     <script src="https://unpkg.com/vuex.js"></script>
     ```
     **Note:** You can  use a specific version/tag via URLs like https://unpkg.com/vuex@2.0.0. If you don't mention any version then it will point to latest version.