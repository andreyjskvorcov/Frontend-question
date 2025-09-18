useEffect — это хук, который позволяет выполнять побочные эффекты в функциональных компонентах React: сетевые запросы, подписки на события, работу с DOM и многое другое. Он объединяет логику, которая раньше была разбита между методами жизненного цикла классов: componentDidMount, componentDidUpdate и componentWillUnmount.[1][2][5][6][7]

### Синтаксис и основы

- useEffect принимает функцию-эффект и необязательный массив зависимостей.
- Если массив зависимостей не указан, эффект выполняется после каждого рендера.[5][6][1]
- Если передать пустой массив, эффект сработает только после первого монтирования (аналог componentDidMount).[2][6][5]
- Если указать массив с зависимостями, useEffect будет вызываться только при изменении хотя бы одной из них (аналог componentDidUpdate).[6][5]

### Пример 1: Эффект после каждого рендера

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  }); // Нет массива зависимостей — срабатывает после любого рендера

  return <button onClick={() => setCount(count + 1)}>Нажми меня</button>;
}
```

Этот код обновляет заголовок страницы при каждом изменении состояния счетчика.[1][5]

### Пример 2: Разовая инициализация / Подписка

```jsx
useEffect(() => {
  const handler = () => console.log('Случился клик!');
  window.addEventListener('click', handler);

  return () => {
    window.removeEventListener('click', handler); // Очистка перед размонтированием
  };
}, []); // Пустой массив — аналог componentDidMount/componentWillUnmount
```

Здесь слушатель добавляется при монтировании и удаляется при размонтировании.[2][5][6]

### Пример 3: Зависимости

```jsx
const [query, setQuery] = useState('react');

useEffect(() => {
  fetchData(query); // Выполнится при изменении query
}, [query]);
```

Эффект вызовется только если изменится переменная query.[5][6]

### Пример 4: Асинхронный эффект

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // setData(data);
  }
  fetchData();
}, []);
```

Асинхронная функция запускается внутри useEffect при монтировании.[6]

### Очистка

Если useEffect возвращает функцию, она будет вызвана на этапе размонтирования или до следующего вызова эффекта, если зависимости изменились:

```jsx
useEffect(() => {
  const id = setInterval(() => console.log('тик'), 1000);
  return () => clearInterval(id); // Очистка
}, []); // Разово
```

Это аналог componentWillUnmount в классовых компонентах.[1][2]

### Особенности

- useEffect нельзя вызывать внутри циклов, условий или вложенных функций.[7]
- Хук позволяет синхронизировать компонент с внешней системой: API, подписками, DOM и др..[4][5][6]

useEffect — универсальный инструмент для любых побочных действий во функциональных компонентах React, охватывающий большинство вариантов применения методов жизненного цикла классовых компонентов.[7][2][5][1]

[1](https://ru.legacy.reactjs.org/docs/hooks-effect.html)
[2](https://webtricks-master.ru/react-hooks/uchim-useeffect-na-primerah/)
[3](https://habr.com/ru/companies/rshb/articles/687364/)
[4](https://reactdev.ru/reference/react/useEffect/)
[5](https://my-js.org/docs/cheatsheet/react-hooks)
[6](https://www.hackfrontend.com/docs/react/react-hooks-2)
[7](https://habr.com/ru/companies/otus/articles/668700/)
[8](https://www.youtube.com/watch?v=ivtRckdgfts)
[9](https://www.youtube.com/watch?v=EzdCRKXqi7c)
