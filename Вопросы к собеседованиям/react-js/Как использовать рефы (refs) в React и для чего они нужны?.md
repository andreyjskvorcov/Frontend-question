Рефы (refs) в React — это механизм, позволяющий получить ссылки на DOM-элементы или сохранить изменяемые значения, которые не участвуют в процессе рендеринга компонента. Они применяются для прямого доступа к элементам, управления фокусом, измерения размеров или хранения любых mutable данных между рендерами.[1][3][4]

---

### Для чего нужны рефы

- Доступ к DOM-элементам (например, установка фокуса, прокрутка).
- Сохранение значений, которые не требуют рендеринга при изменении (например, таймеры, счётчики).
- Взаимодействие с сторонними библиотеками, работающими напрямую с DOM.
- Управление формами и анимациями без использования состояния.

---

### Как использовать useRef — хук для рефов в функциональных компонентах

```jsx
import React, { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null); // создаём реф

  useEffect(() => {
    inputRef.current.focus(); // устанавливаем фокус при монтировании
  }, []);

  return <input ref={inputRef} type='text' placeholder='Введите текст...' />;
}
```

- `useRef(initialValue)` создаёт объект с единственным свойством `current`, которое изначально равно `initialValue`.
- В JSX реф передаётся через атрибут `ref`, связываясь с DOM-узлом.
- Значение `ref.current` можно обновлять вручную без вызова повторного рендера.

---

### Другой пример — хранение mutable значения (счётчика нажатий)

```jsx
import React, { useRef } from 'react';

function ClickCounter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    alert(`Вы нажали ${countRef.current} раз(а)`);
  }

  return <button onClick={handleClick}>Нажми меня</button>;
}
```

- Здесь `countRef.current` увеличивается без вызова повторного рендеринга компонента.

---

### Итог

Рефы в React — это удобный способ сохранить ссылки на DOM-элементы или mutable значения без влияния на рендер. Они полезны для прямого доступа к элементам, управления фокусом и хранения данных между рендерами.[4][8][1]

[1](https://reactdev.ru/reference/react/useRef/)
[2](https://ru.react.dev/reference/react/useRef)
[3](https://habr.com/ru/companies/otus/articles/856624/)
[4](https://webtricks-master.ru/react-hooks/uchim-useref-na-primerah/)
[5](https://ru.hexlet.io/courses/js-react/lessons/use-ref/theory_unit)
[6](https://code.mu/ru/javascript/framework/react/book/supreme/hooks/use-ref/)
[7](https://ru.legacy.reactjs.org/docs/hooks-reference.html)
[8](https://www.hackfrontend.com/docs/react/react-hooks-4)
[9](https://habr.com/ru/companies/otus/articles/699434/)
