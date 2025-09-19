
---

# Зачем нужен useImperativeHandle в React

**useImperativeHandle** — это хук в React, который позволяет управлять тем, какие методы и свойства будут доступны родительскому компоненту при использовании `ref` на дочернем компоненте.

Он используется в паре с `forwardRef` для настройки внешнего интерфейса доступа к внутренним функциям или значениям компонента.

---

## Синтаксис

```JS <code>
useImperativeHandle(ref, () => ({
  // методы, которые будут доступны извне
  someMethod() {
    // ...
  },
}), [dependencies]);
```

- `ref` — ссылка, переданная через `forwardRef`.
- Функция `() => ({ ... })` возвращает объект с публичным API.
- `[dependencies]` — список зависимостей для обновления объекта.

---

## Когда нужен useImperativeHandle

- Чтобы ограничить доступ к внутренним функциям компонента (инкапсуляция).
- Чтобы предоставить родительскому компоненту методы дочернего компонента (например, `focus`, `reset`, `scrollToTop`).
- При работе с нестандартными или сложными DOM-элементами, кастомными компонентами, модальными окнами и т.д.

---

## Пример: доступ к методу `focus` из родителя

```JS <code>
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});

export default function App() {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Фокус</button>
      <button onClick={() => inputRef.current?.clear()}>Очистить</button>
    </div>
  );
}
```

---

## Важно

- `useImperativeHandle` работает только внутри компонентов, обёрнутых в `forwardRef`.

---

## Вывод

`useImperativeHandle` — продвинутый инструмент React, позволяющий явно настраивать интерфейс доступа к компоненту через `ref`. Полезен при создании контролируемых компонентов, модальных окон, кастомных инпутов и других случаев, когда родитель должен управлять поведением потомка напрямую.

---

Источник: [useImperativeHandle в React — hackfrontend](https://www.hackfrontend.com/docs/react/useImperativeHandle)[2]

[1](https://reactdev.ru/reference/react/useImperativeHandle/)
[2](https://www.hackfrontend.com/docs/react/useImperativeHandle)
[3](https://webformyself.com/nedoocenennye-xuki-react/)
[4](https://ru.hedashelving.com/blog/how-to-use-useimperativehandle-for-customizing-refs-273138.html)
[5](https://docureacten.github.io/Hook/7-8-useImperativeHandle)
[6](https://react.dev/reference/react/useImperativeHandle)
[7](https://www.youtube.com/watch?v=AyaAz42Yvi4)
[8](https://ru.legacy.reactjs.org/docs/hooks-reference.html)
[9](https://javascript.plainenglish.io/how-to-use-useimperativehandle-in-react-the-right-way-97d4f8481275)
[10](https://qna.habr.com/q/1287776)
