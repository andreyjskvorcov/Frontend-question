# 82.  ### Что такое the структура of async компонент factory?

Async component factory is useful to resolve the component asynchronously. The async component factory can  return an object of the below format.
     ```javascript
     const AsyncComponent = () => ({
       // The component to load (should be a Promise)
       component: import('./MyComponent.vue'),
       // A component to use while the async component is loading
       loading: LoadingComponent,
       // A component to use if the load fails
       error: ErrorComponent,
       // Delay before showing the loading component. Default: 200ms.
       delay: 200,
       // The error component will be displayed if a timeout is
       // provided and exceeded. Default: Infinity.
       timeout: 3000
     })
     ```