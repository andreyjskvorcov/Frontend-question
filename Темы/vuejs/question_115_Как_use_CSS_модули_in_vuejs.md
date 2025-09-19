# 115. ### Как use CSS модули in vuejs?

Below are the steps to use css modules in VueJS,
     1. ** Enable CSS modules:**  CSS Modules must be enabled by passing modules: true option to css-loader
     ```javascript
     // webpack.config.js
     {
       module: {
         rules: [
           // ... other rules omitted
           {
             test: /\.css$/,
             use: [
               'vue-style-loader',
               {
                 loader: 'css-loader',
                 options: {
                   // enable CSS Modules
                   modules: true,
                   // customize generated class names
                   localIdentName: '[local]_[hash:base64:8]'
                 }
               }
             ]
           }
         ]
       }
     }
     ```
     2. ** Add module attribute:** Add the module attribute to your `<style>`
     ```javascript
     <style module>
     .customStyle {
       background: blue;
     }
     </style>
     ```
     3. ** Inject CSS modules:** You can inject CSS modules object with computed property $style
     ```javascript
     <template>
       <div :class="$style.blue">
         Background color should be in blue
       </p>
     </template>
     ```
     It can work with object/array syntax of :class binding.