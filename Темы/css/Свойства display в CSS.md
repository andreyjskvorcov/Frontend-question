
---

### Свойство display в CSS

Свойство `display` определяет, как элемент будет отображаться на странице: как блок, строка, таблица, сетка и т.д. Это влияет на поток документа и на доступные для элемента свойства позиционирования и размеры.

---

### Основные значения для свойства display

| Значение       | Описание                                                        | Примеры тегов                      |
| -------------- | --------------------------------------------------------------- | ---------------------------------- |
| `block`        | Элемент занимает всю ширину, начинается с новой строки          | `<div>`, `<p>`, `<h1>`             |
| `inline`       | Элемент занимает только необходимую ширину, не переносит строку | `<span>`, `<a>`, `<strong>`        |
| `inline-block` | Как inline, но можно задавать размеры (ширина/высота)           | `<img>`, `<button>`                |
| `none`         | Элемент не отображается и не занимает места                     | `<div style="display:none;">`      |
| `flex`         | Элемент — флекс-контейнер, дочерние — флекс-элементы            | `<div style="display:flex;">`      |
| `grid`         | Элемент — контейнер для сетки, дочерние — ячейки сетки          | `<div style="display:grid;">`      |
| `table`        | Элемент ведет себя как таблица                                  | `<div style="display:table;">`     |
| `list-item`    | Ведет себя как элемент списка (`<li>`)                          | `<div style="display:list-item;">` |
| `run-in`       | Редко используется, комбинированное поведение                   | `<div style="display:run-in;">`    |
| `inherit`      | Наследует значение от родителя                                  | `<div style="display:inherit;">`   |
| `unset`        | Сбрасывает значение, возвращаясь к дефолту                      | `<div style="display:unset;">`     |

---

### Когда использовать каждое значение

- **block** — для контейнеров и крупных элементов, занимающих всю ширину строки.
- **inline** — для небольших, вложенных элементов текста или ссылок.
- **inline-block** — нужны размеры, но размещение "в строку".
- **none** — когда нужно полностью скрыть элемент.
- **flex** — для современных адаптивных макетов (флекс-контейнеры).
- **grid** — для сложных, двумерных сеточных макетов.
- **table**, **list-item**, **run-in** — для специфических задач, похожих на поведение HTML-таблиц, списков и смешанное поведение.

---

### Примеры использования

```css
/* Флекс-контейнер */
.container {
  display: flex;
  justify-content: space-between;
}

/* Элемент в сетке */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Скрытие элемента */
.hidden {
  display: none;
}

/* Классический блочный элемент */
.block {
  display: block;
}

/* Строчный элемент */
.inline {
  display: inline;
}

/* Элемент-список */
.list-item {
  display: list-item;
}
```

---

### Особенности

- При `display: none` элемент исчезает из потока и не занимает места — его нельзя использовать ни в позиционировании, ни для доступа через скринридеры или поиск.
- Для сохранения места, но скрытия визуального контента используйте `visibility: hidden`.
- Сочетания типа `inline-flex`, `inline-grid` позволяют разместить контейнер как строчный, но с функционалом flex/grid.
- `display: contents` удаляет элемент из потока, но его потомки остаются в DOM — удобно для сложных макетов.

---

Если нужны примеры и пояснения для использования display с Vue.js, React или адаптивной верстки, могу добавить. Нужно?

[1](https://developer.mozilla.org/ru/docs/Web/CSS/display)
[2](https://learn.javascript.ru/display)
[3](https://doka.guide/css/display/)
[4](https://htmlacademy.ru/blog/css/display-in-css)
[5](https://www.dev-notes.ru/articles/css/exploring-css-display-property/)
[6](https://www.vanar.md/novosti/svoystva-css-display-i-visibility-6-ppimepov-skpytiya-otobpazheniya)
[7](https://hcdev.ru/css/display/)
[8](https://msiter.ru/references/css-reference/display)
[9](https://purpleschool.ru/knowledge-base/article/display)
