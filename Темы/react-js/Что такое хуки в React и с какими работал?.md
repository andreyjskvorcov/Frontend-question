Хуки в React — это специальные функции, которые позволяют использовать состояние, методы жизненного цикла и другие возможности React внутри функциональных компонентов без необходимости писать классы. Они делают код компактным, модульным и удобным для повторного использования.[1][5]

---

### Как работают хуки

- Хуки вызываются только в функциональных компонентах или в пользовательских хуках.
- Они начинаются с префикса `use`, например, `useState`, `useEffect`.
- React автоматически отслеживает порядок вызовов хуков для корректного связывания с состоянием и другими функциями.

---

### Основные хуки и примеры работы с ними

| Хук             | Назначение                                           | Пример использования                                           |
| --------------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| **useState**    | Управление локальным состоянием компонента           | `const [count, setCount] = useState(0);`                       |
| **useEffect**   | Обработка побочных эффектов (например, API, таймеры) | `useEffect(() => { document.title = count }, [count]);`        |
| **useContext**  | Чтение данных из React Context                       | `const theme = useContext(ThemeContext);`                      |
| **useReducer**  | Альтернатива useState для сложной логики             | `const [state, dispatch] = useReducer(reducer, initialState);` |
| **useCallback** | Мемоизация функций для оптимизации рендеров          | `const memoizedCallback = useCallback(() => {}, []);`          |
| **useMemo**     | Мемоизация вычисленных значений                      | `const memoizedValue = useMemo(() => compute(), [deps]);`      |
| **useRef**      | Создание изменяемого рефа для доступа к DOM          | `const inputRef = useRef(null);`                               |

---

### Личный опыт с хуками

- **useState** — для управления состоянием счётчиков, форм и локальных переменных.
- **useEffect** — для загрузки данных с сервера, подписок и очистки ресурсов.
- **useContext** — для доступа к теме, локализации и глобальным настройкам.
- **useReducer** — при работе с более сложной логикой состояний, например, формы с множеством полей.
- **useRef** — для доступа к элементам DOM и хранения mutable-ссылок.

---

### Пример: счётчик с useState и useEffect

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  }, [count]);

  return (
    <>
      <p>Нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </>
  );
}
```

---

### Итог

Хуки — фундаментальный современный инструмент React, который делает функциональные компоненты мощнее, позволяя им работать с состоянием и жизненным циклом без классов. Они повышают модульность и читаемость кода, упрощая разработку.[5][6][1]

[1](https://ru.legacy.reactjs.org/docs/hooks-overview.html)
[2](https://gitverse.ru/blog/articles/development/54-huki-react-hooks-chto-eto-takoe-v-programmirovanii)
[3](https://ru.legacy.reactjs.org/docs/hooks-state.html)
[4](https://habr.com/ru/companies/otus/articles/667706/)
[5](https://wiki.merionet.ru/articles/xuki-v-react-osnovy-dlia-nacinaiushhix)
[6](https://reactdev.ru/reference/react/hooks/)
[7](https://ru.react-redux.js.org/api/hooks/)
[8](https://my-js.org/docs/cheatsheet/react-hooks)
[9](https://habr.com/ru/companies/otus/articles/576960/)
