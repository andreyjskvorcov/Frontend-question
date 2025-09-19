# 48.  ### Is однофайловые компоненты violating separation of concerns?

As for the latest modern UI development, separation of concerns is not equal to separation of file types. So it is preferred to divide codebase layers into loosely-coupled components and compose them instead of dividing the codebase into three huge layers that interweave with one another. This way makes Single File Components more cohesive and maintainable by combining template, logic and styles together inside a component.
     You can also still maintain javascript and CSS files separately with hot-reloading and pre-compilation features. For example,
     ```
     <template>
       <div>This section will be pre-compiled and hot reloaded</div>
     </template>
     <script src="./my-component.js"></script>
     <style src="./my-component.css"></style>
     ```