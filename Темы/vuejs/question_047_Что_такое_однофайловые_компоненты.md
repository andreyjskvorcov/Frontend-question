# 47.  ### Что такое однофайловые компоненты?

Single File Components are an easy concept to understand. Earlier you might heard about all three parts(HTML, JavaScript and CSS) of your application kept in different components. But Single File Components encapsulate the structure, styling and behaviour into one file. In the beginning, it seems strange to have all three parts in one file, but it actually makes a lot more sense.
     Let's take an example of Singile File Components
     ```javascript
     <template>
         <div>
             <h1>Welcome {{ name }}!</h1>
         </div>
     </template>

     <script>
         module.exports = {
            data: function() {
                return {
                    name: 'John'
                }
            }
         }
     </script>

     <style scoped>
         h1 {
             color: #34c779;
             padding: 3px;
         }
     </style>
     ```