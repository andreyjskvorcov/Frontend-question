
---

### Что такое схлопывание границ (margin collapsing) в CSS

Margin collapsing — особенность CSS, при которой соседние вертикальные внешние отступы (`margin-top`, `margin-bottom`) смежных блоков не суммируются, а схлопываются до большего из них. Это работает только для вертикальных отступов и может вызывать неожиданные визуальные эффекты.

---

### Пример схлопывания margin

```html
<div class="block1">...</div>
<div class="block2">...</div>
```

```css
.block1 {
  margin-bottom: 30px;
}
.block2 {
  margin-top: 50px;
}
```

Между блоками будет отступ в **50px**, а не 80px, т.к. берётся максимальный margin.

---

### Когда происходит схлопывание?

- **Смежные вертикально расположенные блоки**, когда `margin-bottom` одного граничит с `margin-top` другого.
- **Родитель и первый/последний ребёнок**: если у родителя нет `padding`, `border` или встроенного контента, margin первого/последнего ребёнка схлопывается с margin родителя.
- **Пустые блоки**: верхний и нижний margin пустого блока схлопываются в один.

---

### Пример схлопывания margin между родителем и ребёнком

```html
<div class="parent">
  <div class="child">Я потомок</div>
</div>
```

```css
.parent {
  margin-top: 30px;
}
.child {
  margin-top: 50px;
}
```

Если у `.parent` нет `padding`, `border` или содержимого, то `margin-top` родителя и ребёнка схлопываются и итоговый отступ будет 50px.

---

### Как избежать схлопывания margin?

- Добавить `padding` или `border` родителю.
- Установить `overflow: hidden`, `auto` или `scroll` у родителя.
- Использовать `display: flex` или `display: grid` для контейнера.
- Добавить пустые псевдоэлементы `::before` или `::after` с `content: ""` и `display: table`.

```css
.parent {
  overflow: hidden; /* или auto */
}
```

---

### Итоговые примеры

| Сценарий                                                     | Итоговый margin |
| ------------------------------------------------------------ | --------------- |
| Блок A: margin-bottom: 20px; Блок B: margin-top: 40px        | 40px            |
| Родитель: margin-top: 30px; Первый ребёнок: margin-top: 50px | 50px            |
| Пустой блок с margin-top: 20px и margin-bottom: 20px         | 20px            |

---

### Важность

Схлопывание margin — нормальное поведение CSS, но может быть неожиданным, если не учитывать контекст. Чтобы контролировать эффект, проверяйте стили родителя и используйте перечисленные способы.

---

Если нужно, могу дополнить примерами управления margin collapsing в Vue.js и React проектах. Хотите?

[1](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
[2](https://webref.ru/course/block-model/margin-collapse)
[3](https://htmlacademy.ru/blog/css/margin)
[4](https://habr.com/ru/articles/465839/)
[5](https://softwaremaniacs.org/blog/2005/09/05/css-layout-flow-margins/)
[6](https://idg.net.ua/blog/uchebnik-css/ispolzovanie-css/margin-i-padding)
[7](https://habr.com/ru/articles/257327/)
[8](https://www.youtube.com/watch?v=b0OixvFBnsA)
[9](https://htmlbook.ru/samlayout/blochnaya-verstka/skhlopyvayushchiesya-otstupy)
