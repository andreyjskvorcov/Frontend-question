# 52.  ### Как chain фильтры?

You can chain filters one after the other to perform multiple manipulations on the expression. The generic structure of filter chain would be as below,
     ```javascript
     {{ message | filterA | filterB | filterB ... }}
     ```
     In the above chain stack, you can observe that message expression applied with three filters, each separated by a pipe(|) symbol. The first filter(filterA) takes the expression as a single argument and the result of the expression becomes an argument for second filter(filterB) and the chain continue for remaining filters.
     For example, if you want to transform date expression with a full date format and uppercase then you can apply dateFormat and uppercase filters as below,
     ```javascript
     {{ birthday | dateFormat | uppercase }}
     ```