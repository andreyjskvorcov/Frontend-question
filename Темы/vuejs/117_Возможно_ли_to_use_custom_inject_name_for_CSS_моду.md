# 117. ### Возможно ли to use custom inject name for CSS модули?

You can customize the name of the injected computed property by giving the module attribute a value. This will be helpful to avoid overwriting injected styled if you have more than one <style> tags in a single *.vue component. For example, you can use module attribute as below,
     ```javascript
     <style module="a">
       /* identifiers injected as a */
     </style>

     <style module="b">
       /* identifiers injected as b */
     </style>
     ```