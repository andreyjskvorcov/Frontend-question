# 130. ### Что такое custom blocks?

You can define custom language blocks inside *.vue files based on the `lang` attribute of the block, the block's tag name, and the rules in your webpack config. You can also use `resourceQuery` to match a rule against a custom block with no lang. For example, to match against <message> custom blocks.
     ```javascript
     {
       module: {
         rules: [
           {
             resourceQuery: /blockType=message/,
             loader: 'loader-to-use'
           }
         ]
       }
     }
     ```