
---

### Как изменить цвет в SVG-файле?

В SVG цвет задаётся двумя основными атрибутами:

- `fill` — цвет заливки фигуры
- `stroke` — цвет обводки

---

### Изменение цвета в самом SVG-файле

Прямо внутри файла SVG можно указать нужные цвета:

```html
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>
```

- `fill="red"` — закрасит круг красным
- `stroke="black"` — нарисует черную обводку

---

### Управление цветом через CSS (если SVG встроен inline в HTML)

Если SVG вставлен в HTML код, цветом можно управлять с помощью CSS:

```html
<svg class="icon" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>

<style>
  .icon circle {
    fill: blue;
    stroke: black;
    stroke-width: 3;
  }
</style>
```

Такой способ работает только для inline SVG, а не для внешних файлов.

---

### Использование `currentColor`

Чтобы управлять цветом SVG через CSS-свойство `color` родительского элемента, в SVG можно использовать `fill="currentColor"`:

```html
<svg class="icon" viewBox="0 0 24 24">
  <path fill="currentColor" d="..." />
</svg>

<style>
  .icon {
    color: green;
  }
</style>
```

---

### Если SVG — внешний файл (через `<img src="icon.svg">`)

- Изменить цвет такого SVG через CSS нельзя.
- Для изменения цвета нужно либо:
  - Вставить SVG inline в HTML
  - Использовать сложные техники с `mask-image` или CSS-фильтрами

Лучше всего импортировать SVG как React-компонент или использовать загрузчики (inline-loader) в сборщиках вроде Webpack, Vite.

---

### Как работать с цветом в React (если SVG — компонент)

```js
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return <Logo style={{ fill: 'blue' }} />;
}
```

Или использовать `fill="currentColor"` в SVG и менять цвет через `color` у обертки.

---

### Совет

Для максимального контроля и удобства работы с цветом встроенные (inline) SVG или React-компоненты — лучший выбор.

---

Если нужны примеры по интеграции SVG и управлению цветом в Vue.js — могу подготовить. Хотите?

[1](https://www.hackfrontend.com/docs/html-and-css/svg-color)
