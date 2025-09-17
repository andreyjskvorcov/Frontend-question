useState — это хук в React, который позволяет функциональному компоненту иметь состояние, аналогично state в классовых компонентах. Он возвращает пару: текущее значение состояния и функцию для его обновления.[1][2][6]

### Как работает useState

- При вызове useState с начальным значением (например, числом, строкой, объектом) React сохраняет это состояние между рендерами компонента.
- useState возвращает массив из двух элементов: первого — текущее значение состояния, второго — функцию для его изменения.
- Вызов функции обновления состояния вызывает повторный рендер компонента с новым значением состояния.[6][1]
- Состояние через useState для функциональных компонентов заменяет необходимость классового this.state и this.setState.[2][9]

### Пример использования

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Инициализация состояния с 0

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
```

В этом примере:

- `count` — значение состояния, начальным будет 0.
- `setCount` — функция для обновления состояния.
- При нажатии кнопки вызывается `setCount` с новым значением `count + 1`, что приводит к обновлению и повторному рендеру.[1][2][6]

### Особенности и советы

- Можно создать несколько отдельных состояний, вызывая useState несколько раз с разными переменными.[8][6]
- Обновление состояния асинхронно, поэтому при последовательных вызовах с зависимостью от предыдущего значения рекомендуется использовать функцию внутри setState:

  ```js
  setCount((prevCount) => prevCount + 1);
  ```

- Начальное состояние можно задать не только значением, но и функцией, возвращающей состояние (для ленивой инициализации).[6]
- useState работает только внутри функциональных компонентов или кастомных хуков, не в классах или вне компонентов.[1][6]

useState — один из основных хуков, позволяющий гибко и удобно управлять состоянием в функциональных компонентах React.[9][6][1]

[1](https://ru.legacy.reactjs.org/docs/hooks-overview.html)
[2](https://ru.legacy.reactjs.org/docs/hooks-state.html)
[3](https://ru.legacy.reactjs.org/docs/hooks-reference.html)
[4](https://habr.com/ru/companies/otus/articles/667706/)
[5](https://tokmakov.msk.ru/blog/item/640)
[6](https://habr.com/ru/companies/simbirsoft/articles/652321/)
[7](https://coffee-web.ru/blog/what-you-may-not-know-about-the-usestate-hook-in-react/)
[8](https://webtricks-master.ru/react-hooks/learn-usestate-on-examples/)
[9](https://reactdev.ru/archive/react16/hooks-state/)
[10](https://reactdev.ru/reference/react/useState/)
