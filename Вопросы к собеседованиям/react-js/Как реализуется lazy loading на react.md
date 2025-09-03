Lazy loading в React реализуется с помощью функции `React.lazy()` вместе с компонентом `Suspense`. Это позволяет загружать компоненты динамически только при их первом рендеринге, что снижает размер первоначального бандла и ускоряет загрузку страницы.

### Как работает React.lazy

- `React.lazy` принимает функцию с динамическим импортом компонента.
- Возвращает ленивый React-компонент, который загрузится при первом отображении.
- Пока компонент загружается, его рендеринг приостанавливается.
- Компонент `Suspense` оборачивает ленивый компонент и показывает fallback (например, индикатор загрузки) до завершения загрузки.

### Пример использования

```jsx
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

В этом примере `LazyComponent` будет загружен только при первом рендере, а пока идет загрузка, будет показываться текст "Загрузка...".

---

Такой подход помогает разбивать код на части (code-splitting) и улучшать производительность приложения.

Источник: reactdev.ru, habr.com, reactjs.org.[1][4][6]

[1](https://reactdev.ru/reference/react/lazy/)
[2](https://www.youtube.com/watch?v=Mv1bA2zGbCY)
[3](https://www.rush-analytics.ru/blog/lazy-loading)
[4](https://habr.com/ru/sandbox/183594/)
[5](https://gitverse.ru/blog/articles/development/734-chto-takoe-lazy-loading-i-kak-ee-vklyuchit-na-sajte)
[6](https://habr.com/ru/companies/macloud/articles/559108/)
[7](https://ru.nextjs.im/docs/13/pages/building-your-application/optimizing/lazy-loading)
[8](https://developer.mozilla.org/ru/docs/Web/Performance/Guides/Lazy_loading)
[9](https://ru.legacy.reactjs.org/docs/code-splitting.html)
[10](https://www.youtube.com/watch?v=bYaIBy6rIc0)
