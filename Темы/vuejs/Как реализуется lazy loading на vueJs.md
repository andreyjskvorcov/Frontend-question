Lazy loading во Vue реализуется с помощью динамического импорта компонентов. При этом компонент загружается только при первом использовании, что уменьшает размер основного бандла и ускоряет начальную загрузку страницы.

### Как сделать lazy loading во Vue

Используется функция `defineAsyncComponent` из Vue 3 или просто динамический импорт в Vue 2.

### Пример для Vue 3 с defineAsyncComponent

```js
import { defineAsyncComponent } from "vue";

const LazyComponent = defineAsyncComponent(() =>
  import("./components/LazyComponent.vue")
);

export default {
  components: {
    LazyComponent,
  },
};
```

И в шаблоне:

```vue
<template>
  <LazyComponent />
</template>
```

### Пример для Vue 2 с динамическим импортом

```js
export default {
  components: {
    LazyComponent: () => import("./components/LazyComponent.vue"),
  },
};
```

---

### Особенности

- Vue сам обрабатывает динамический импорт и загрузку отдельного чанка.
- Можно добавить обработку загрузки, ошибок и таймаутов через параметры `defineAsyncComponent`.

Таким образом, lazy loading в Vue помогает оптимизировать загрузку приложения, разбивая код на части и загружая их только при необходимости.

Источник: официальная документация Vue, статьи на habr и форумах.[1][2]

[1](https://ru.vuejs.org/guide/extras/rendering-mechanism.html)
[2](https://reactdev.ru/reference/react/lazy/)
