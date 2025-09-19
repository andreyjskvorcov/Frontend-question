
---

### Свойство box-sizing в CSS

Свойство `box-sizing` определяет, как рассчитываются размеры элемента: только для содержимого (content-box) либо включая padding и border (border-box). Это влияет на итоговую ширину/высоту блока с учётом внутренних отступов и границ.

---

### Значения свойства box-sizing

#### content-box

- Значение по умолчанию.
- Свойства `width` и `height` применяются только к содержимому, **padding** и **border** добавляются к размеру отдельно.
- Итоговая ширина = содержимое + padding + border.

```css
.element {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

В этом случае элемент будет шире 200px, потому что к ширине добавятся отступы и граница.[1][2][5][7]

---

#### border-box

- Свойства `width` и `height` включают и содержимое, и padding, и границу.
- Итоговая ширина элемента = ровно `width`.
- Padding и border «вписываются» в заданные размеры.

```css
.element {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

В этом случае элемент будет иметь ровно ширину 200px, включая padding и границы.[2][5][7][1]

---

### Важные моменты

- `box-sizing: content-box`: размеры увеличиваются с добавлением padding и border.
- `box-sizing: border-box`: размеры фиксированы, padding и border включены внутрь.
- Рекомендуется использовать `box-sizing: border-box` для всех элементов, чтобы избежать неожиданных изменений размеров при верстке:

```css
* {
  box-sizing: border-box;
}
```

---

Если нужно, могу дополнить примерами типичных версточных задач для `box-sizing` в Vue/React или адаптивной сетке. Нужно?

[1](https://www.hackfrontend.com/docs/html-and-css/css-box-sizing)
[2](https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing)
[3](https://doka.guide/css/box-sizing/)
[4](https://htmlbook.ru/css/box-sizing)
[5](https://learn.javascript.ru/box-sizing)
[6](https://www.hackfrontend.com/docs/html-and-css/css-box-sizing)
[7](https://code.mu/ru/markup/manual/css/property/box-sizing/)
[8](https://webref.ru/css/box-sizing)
[9](https://hcdev.ru/css/box-sizing/)
[10](https://habr.com/ru/articles/149441/)
