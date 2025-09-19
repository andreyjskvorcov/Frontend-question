# 37.  ### Что такое non prop attributes?

A non-prop attribute is an attribute that is passed to a component, but does not have a corresponding prop defined.
     For example, If you are using a 3rd-party custom-input component that requires a `data-tooltip` attribute on the input then you can add this attribute to component instance,
     ```javascript
     <custom-input data-tooltip="Enter your input" />
     ```
     If you try to pass the props from parent component the child props with the same names will be overridden. But props like `class` and `style` are exception to this, these values will be merged in the child component.
     ```javascript
     //Child component
     <input type="date" class="date-control">
     //Parent component
     <custom-input class="custom-class" />
     ```