Если не хочется использовать Redux в небольшом проекте, есть несколько альтернативных библиотек и подходов для управления состоянием React-приложений.

---

### Основные альтернативы Redux

| Библиотека / Подход     | Описание                                                                                     | Преимущества                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **React Context API**   | Встроенный механизм для передачи данных между компонентами без проброса пропсов              | Простой, без установки сторонних библиотек, хорошо для небольшого и среднего состояния |
| **Zustand**             | Легковесное мини-хранилище с простым API, основанное на хуках React                          | Малый размер, удобный синтаксис, поддержка TypeScript                                  |
| **MobX**                | Реактивное управление состоянием с помощью наблюдаемых объектов и автоматическим обновлением | Прост в освоении, автоматическая реактивность, меньше шаблонного кода                  |
| **Recoil**              | Библиотека управления состоянием от Facebook, интегрируется с React, поддерживает атомы      | Гранулярное состояние, удобство использования, атомарные состояния                     |
| **Jotai**               | Минималистичный атомарный менеджер состояния                                                 | Простой, быстрый, реактивный, гибкий                                                   |
| **Redux Toolkit (RTK)** | Официальный инструмент для упрощенной работы с Redux                                         | Упрощает написание Redux-кода, но всё равно включает Redux                             |

---

### Простое использование React Context

```jsx
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// Использование
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

---

### Пример с Zustand

```js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>Count: {count}</button>;
}
```

---

### Итог

Для небольших проектов Redux может оказаться избыточным. Простые встроенные механизмы React (Context), а также лёгкие и удобные библиотеки вроде Zustand, MobX, Recoil и Jotai — отличные альтернативы, позволяющие управлять состоянием эффективно и с меньшим количеством кода.[1][2][3][6][8]

[1](https://www.reddit.com/r/reactjs/comments/1em8hc6/what_are_the_alternatives_to_redux_and_reduxsaga/)
[2](https://habr.com/ru/articles/795901/)
[3](https://webadventures.ru/zustand-sovremennaja-alternativa-redux/)
[4](https://habr.com/ru/companies/ibs/articles/885868/)
[5](https://proglib.io/p/react-ne-nuzhen-5-alternativnyh-freymvorkov-2024-08-14)
[6](https://dan-it.com.ua/blog/chi-potribno-vivchati-redux-u-2023-roci/)
[7](https://www.reddit.com/r/reactjs/comments/xc156q/i_am_sick_and_tired_of_reactredux_who_has_some/)
[8](https://www.youtube.com/watch?v=ttQ8MAoY4FY)
