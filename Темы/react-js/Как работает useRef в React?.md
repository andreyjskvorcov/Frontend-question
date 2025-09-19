
---

# Как работает useRef в React?

**useRef** — это хук в React, который позволяет сохранять ссылки на DOM-элементы или значения, которые не вызывают перерисовки компонента при изменении. Это полезно для доступа к DOM или хранения значений между рендерами без дополнительного ререндера.

---

## Основные возможности useRef

- **Ссылки на DOM-элементы**  
  `useRef` часто используется для получения прямого доступа к DOM-узлам, например, чтобы установить фокус на поле ввода или измерить размер элемента.

- **Хранение данных между рендерами**  
  Значение `useRef` сохраняется между рендерами и изменение `ref.current` не вызывает повторной отрисовки компонента.

---

## Синтаксис

```JS <code>
const myRef = useRef(initialValue);
```

- `initialValue` — начальное значение ссылки (например, `null` для DOM-элементов).
- `myRef.current` хранит текущее значение ссылки или DOM-элемента.

---

## Пример: использование useRef для работы с DOM

```JS <code>
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Фокусируемся на поле ввода
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Фокус на поле ввода</button>
    </div>
  );
}
</code>
```

Здесь `inputRef` создаётся с помощью `useRef` и передаётся в атрибут `ref` поля ввода. При клике на кнопку вызывается функция `focusInput`, которая устанавливает фокус на этот элемент через `inputRef.current.focus()`.

---

## Пример: использование useRef для хранения значений между рендерами

```JS <code>
import { useRef } from "react";

function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current); // Печатает количество обновлений
  };

  return (
    <div>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
}
</code>
```

Здесь `countRef` хранит значение, которое изменяется напрямую. Изменение `countRef.current` не вызывает повторного рендера компонента.

---

## Когда использовать useRef?

- Для доступа к DOM-элементам (фокус, измерения, анимации).
- Для хранения данных между рендерами, которые не должны вызывать повторный рендер.
- Для хранения любого состояния, не связанного с визуальным отображением компонента.

---

## Итог

`useRef` — удобный способ хранить данные или ссылки на DOM, не влияя на перерисовку и поддерживая значения между рендерами.

---

Источник: [Как работает useRef в React — hackfrontend](https://www.hackfrontend.com/docs/react/react-hooks-4)[1]

[1](https://www.hackfrontend.com/docs/react/react-batching)
