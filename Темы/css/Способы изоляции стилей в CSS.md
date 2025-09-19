
---

### Что такое изоляция стилей?

Изоляция стилей — подход, при котором стили одного компонента не влияют на другие части приложения. Это важно для:

- предотвращения конфликтов между стилями,
- упрощения масштабирования кода,
- переиспользования компонентов без побочных эффектов.

---

### Способы изоляции стилей

---

#### 1. БЭМ (BEM) — Block Element Modifier

- Методология именования классов, обеспечивающая уникальность и предсказуемость.
- Имена классов отражают иерархию компонента.

```css
/* Пример стилей BEM */
.button {
}
.button__icon {
}
.button--primary {
}
```

- Работает в любом CSS без специальных инструментов.

---

#### 2. CSS Modules

- Файлы с расширениями `.module.css` или `.module.scss` для React, Vue и других.
- Классы автоматически локализуются и получают уникальные имена.
- Исключают пересечения стилей между компонентами.

```js
import styles from './Button.module.css';

function Button() {
  return <button className={styles.primary}>Click</button>;
}
```

---

#### 3. Shadow DOM (Web Components)

- Изоляция происходит на уровне браузера — создаётся «теневая» область внутри DOM.
- Стили внутри Shadow DOM не влияют наружу и не подвержены внешним стилям.

```js
const shadow = element.attachShadow({ mode: 'open' });
shadow.innerHTML = `<style>p { color: red; }</style><p>Hello</p>`;
```

- Требует поддержки Web Components.

---

#### 4. CSS-in-JS

- Стили пишутся прямо в JavaScript с использованием библиотек:
  - `styled-components`
  - `emotion`
  - `stitches`
  - `vanilla-extract`

```js
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: blue;
`;
```

- Даёт отличную изоляцию и динамические стили, но увеличивает размер бандла и зависит от библиотеки.

---

#### 5. Atomic CSS (Utility-first)

- Использует классы с конкретными свойствами и значениями (например, Tailwind CSS).

```html
<button class="bg-blue-500 text-white px-4 py-2">Click</button>
```

- Нет «настоящих» компонентов, всё строится из утилитарных классов.
- Стили предсказуемы и не конфликтуют.

---

Если нужно, могу помочь с примерами изоляции стилей для Vue.js и React, или рекомендации по выбору метода для конкретного проекта. Хотите?

[1](https://www.hackfrontend.com/docs/html-and-css/isolating-styles)
