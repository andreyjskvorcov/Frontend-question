# 53.  ### Возможно ли to pass parameters for фильтры?

Yes, you can pass arguments for a filter similar to a javascript function. The generic structure of filter parameters would be as follows,
     ```javascript
     {{ message | filterA('arg1', arg2) }}
     ```
     In this case, filterA takes message expression as first argument and the explicit parameters mentioned in the filter as second and third arguments.
     For example, you can find the exponential strength of a particular value
     ```javascript
     {{ 2 | exponentialStrength(10) }} // prints 2 power 10 = 1024
     ```