# 35.  ### Что такое возможные prop types?

You can declare props with type or without type. But it is recommended to have prop types because it provides the documentation for the component and warns the developer for any incorrect data type being assigned.
     ```javascript
     props: {
       name: String,
       age: Number,
       isAuthenticated: Boolean,
       phoneNumbers: Array,
       address: Object
     }
     ```
     As mentioned in the above code snippet, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively.