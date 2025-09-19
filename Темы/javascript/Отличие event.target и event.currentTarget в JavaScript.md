
---

### Отличие event.target и event.currentTarget в JavaScript

---

### Определения:

- `event.target` — элемент, на котором фактически произошло событие (может быть вложенный элемент).
- `event.currentTarget` — элемент, на котором висит обработчик события.

---

### Пример HTML:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

### Пример JavaScript:

```js
const parent = document.getElementById('parent');

parent.addEventListener('click', function (event) {
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget);
});
```

Если кликнуть по кнопке `#child`, то:

- `event.target` будет `<button id="child">`
- `event.currentTarget` будет `<div id="parent">`

Потому что событие произошло на кнопке, но обработчик навешан на родителя.

---

### Когда используется?

- `event.target` полезен при делегировании событий, чтобы узнать, на каком элементе произошло событие.
- `event.currentTarget` удобен, чтобы получить элемент, на котором повешен обработчик, особенно в универсальном обработчике.

---

### Полезный пример делегирования:

```js
document.querySelector('#list').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log('Clicked item:', e.target.textContent);
  }
});
```

Здесь `event.target` — конкретный `<li>`, по которому кликнули, даже если элементы создаются динамически.

---

### Итог:

| Свойство              | Что возвращает                        | Когда использовать                                 |
| --------------------- | ------------------------------------- | -------------------------------------------------- |
| `event.target`        | Элемент, на котором произошло событие | При делегировании, отслеживании исходного элемента |
| `event.currentTarget` | Элемент, на котором висит обработчик  | Когда нужно знать, где повешен `addEventListener`  |

---

### Запомни:

- `target` — где произошло событие
- `currentTarget` — где обрабатывается событие

---

Если нужно, могу дополнить примерами с Vue.js и React, как использовать event.target и event.currentTarget. Хотите?Вот дополнение к твоему вопросу и ответу про отличия event.target и event.currentTarget в JavaScript — исходный текст без изменений, только добавлены примеры для наглядности:

---

### Определения:

- **event.target** — элемент, на котором фактически произошло событие (может быть вложенный элемент).
- **event.currentTarget** — элемент, на котором висит обработчик события.

---

### Пример HTML:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

---

### Пример JavaScript:

```js
const parent = document.getElementById('parent');

parent.addEventListener('click', function (event) {
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget);
});
```

Если кликнуть по кнопке #child, то:

- `event.target` будет `<button id="child">`
- `event.currentTarget` будет `<div id="parent">`

---

### Когда используется?

- `event.target` — полезен при делегировании событий, чтобы узнать, на каком элементе произошло событие.
- `event.currentTarget` — удобен, когда нужно получить элемент, на котором висит обработчик.

---

### Пример делегирования событий:

```js
document.querySelector('#list').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log('Clicked item:', e.target.textContent);
  }
});
```

---

### Итог:

| Свойство              | Возвращает                            | Когда использовать                                            |
| --------------------- | ------------------------------------- | ------------------------------------------------------------- |
| `event.target`        | Элемент, на котором произошло событие | При делегировании, для получения конкретного элемента события |
| `event.currentTarget` | Элемент, на котором висит обработчик  | Когда важен сам элемент, который слушает событие              |

Запомни:

- `target` — где произошло событие
- `currentTarget` — где событие обрабатывается

---

Если нужно, могу добавить примеры с Vue.js и React для использования этих свойств. Хотите?

[1](https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property)
[2](https://www.reddit.com/r/learnjavascript/comments/xplckh/what_am_i_understanding_wrong_difference_between/)
[3](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
[4](https://www.youtube.com/watch?v=F2pbD_Mr91Y)
[5](https://www.linkedin.com/pulse/lightning-web-components-exploring-contrast-between-gaurav-gupta)
[6](https://javascript.plainenglish.io/what-is-the-difference-between-e-currenttarget-and-e-target-740204b03577)
[7](https://michalhonc.cz/blog/difference-between-event-targets-in-javascript)
[8](https://dev.to/gamil91/simple-explanation-of-event-currenttarget-event-target-and-event-delegation-294k)
