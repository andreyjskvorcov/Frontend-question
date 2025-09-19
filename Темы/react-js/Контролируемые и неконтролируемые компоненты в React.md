
---

# Контролируемые и неконтролируемые компоненты в React

В React при работе с формами есть два подхода управления значениями полей: **контролируемые** и **неконтролируемые компоненты**.

---

## Контролируемый компонент (Controlled)

В контролируемом компоненте значение формы хранится в состоянии (`state`) React-компонента, и любое изменение пользовательского ввода происходит через обработчик `onChange` и обновление состояния.

### Пример

```JS <code>
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
</code>
```

- Значение `value` управляется через React state.
- React всегда знает актуальное значение поля.
- Можно валидировать и изменять данные на лету.

---

## Неконтролируемый компонент (Uncontrolled)

В неконтролируемом компоненте значение не хранится в состоянии React, а извлекается напрямую из DOM с помощью `ref`.

### Пример

```JS <code>
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Отправить</button>
    </>
  );
}
</code>
```

- React не знает текущее значение поля ввода.
- Значение считывается только при необходимости (например, при отправке).
- Простой способ реализации, особенно если нужен доступ к значению однократно.

---

## Таблица сравнения

| Особенность             | Контролируемый компонент    | Неконтролируемый компонент |
| ----------------------- | --------------------------- | -------------------------- |
| Где хранится значение   | В состоянии React (`state`) | В DOM через `ref`          |
| React «знает» значение? | Да                          | Нет                        |
| Подходит для валидации  | Отлично                     | Не подходит                |
| Сложность реализации    | Сложнее                     | Проще                      |
| Производительность      | Может чаще перерисовываться | Быстрее при больших формах |
| Простота реализации     | Немного сложнее             | Проще                      |

---

## Когда использовать?

- **Контролируемый компонент:**

  - Если нужно валидировать ввод в реальном времени.
  - Для сложных форм с динамической логикой.
  - Когда важен полный контроль над значениями.

- **Неконтролируемый компонент:**
  - Для простых форм или однократного получения данных.
  - При интеграции со сторонними библиотеками, работающими с DOM.
  - Когда нужна простота и производительность.

---

## Совет

Используйте контролируемые компоненты, когда нужен полный контроль и валидация. Для простых форм и интеграции с `FormData` лучше подходят неконтролируемые компоненты.

---

Источник: [Контролируемые и неконтролируемые компоненты в React — hackfrontend](https://www.hackfrontend.com/docs/react/controlled-and-uncontrolled-components)[1][5]

[1](https://habr.com/ru/articles/502034/)
[2](https://ru.legacy.reactjs.org/docs/uncontrolled-components.html)
[3](https://www.reddit.com/r/reactjs/comments/14bwqtc/controlled_vs_uncontrolled_component/)
[4](https://www.youtube.com/watch?v=g3e6Eyvm3kI)
[5](https://dev-gang.ru/article/kontroliruemye-i-nekontroliruemye-komponenty-v-react-lo65aat2do/)
[6](https://unetway.com/tutorial/reactjs-nekontroliruemy-komponenty-uncontrolled-componen)
[7](https://under-sky-web.ru/post/kontroliruemyie_i_nekontroliruemyie_komponentyi_v_react)
[8](https://www.reddit.com/r/reactjs/comments/1e4jj3n/controlled_or_uncontrolled_form_elements/)
[9](https://www.youtube.com/watch?v=QJe-1i3zi1M)
