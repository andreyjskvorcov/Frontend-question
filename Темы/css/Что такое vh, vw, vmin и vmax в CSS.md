
---

### Что такое vh, vw, vmin и vmax в CSS

---

Viewport-единицы основаны на размере области просмотра (viewport) и используются для создания адаптивной и резиновой верстки.

---

### Обзор единиц

| Единица | Значение                        | Что означает                       |
| ------- | ------------------------------- | ---------------------------------- |
| `1vh`   | 1% от высоты окна               | Высота = 1/100 от viewport height  |
| `1vw`   | 1% от ширины окна               | Ширина = 1/100 от viewport width   |
| `1vmin` | 1% от меньшего из `vh` или `vw` | Минимум из ширины или высоты окна  |
| `1vmax` | 1% от большего из `vh` или `vw` | Максимум из ширины или высоты окна |

---

### Пример использования

```css
.box {
  width: 50vmin; /* 50% от меньшей стороны окна */
  height: 50vmax; /* 50% от большей стороны окна */
  background: lightcoral;
}
```

Такой блок автоматически адаптируется к ориентации экрана: если повернуть устройство, размеры будут меняться в зависимости от `vmin` и `vmax`.

---

### Применение

- `vh`, `vw` — идеально подходят для полноэкранных секций, слайдеров, фоновых блоков.
- `vmin` — удобен, чтобы элементы не выходили за края меньшей стороны экрана.
- `vmax` — полезен для элементов, которые должны растягиваться по большей стороне окна (например, пользовательские кнопки в ландшафтном режиме).

---

### Особенности для мобильных браузеров

- Высота `vh` может изменяться при показе/скрытии адресной строки на мобильных устройствах.
- Чтобы избежать нестабильного поведения, рекомендуется применять CSS-переменные и вычислять высоту через JavaScript:

```js
document.documentElement.style.setProperty(
  '--vh',
  `${window.innerHeight * 0.01}px`
);
```

```css
.full-height {
  height: calc(var(--vh, 1vh) * 100);
}
```

---

### Совет

Используйте `vmin` и `vmax` для адаптивных шрифтов, отступов и масштабирования интерфейса, чтобы не привязываться жестко к ширине или высоте экрана.

---

Если нужны расширенные примеры с responsive design в Vue.js и React — могу подготовить!

[1](https://www.hackfrontend.com/docs/html-and-css/vh-vw-vmin-vmax-in-css)
[2](https://doka.guide/css/vw-vh/)
[3](https://purpleschool.ru/knowledge-base/article/vw-vh-vmin-vmax)
[4](https://html5book.ru/edinicy-izmereniya-vh-vw-vmin-vmax/)
[5](https://tproger.ru/articles/novye-edinicy-izmereniya-svh-lvh-dvh-dlya-adaptivnoj-verstki)
[6](https://habr.com/ru/articles/331184/)
[7](https://stasonmars.ru/html-css/viewport-edinitsy-v-css/)
[8](https://www.dev-notes.ru/articles/css/introduction-to-css-viewports/)
[9](https://www.youtube.com/watch?v=JT4J5hOcfqE)
[10](https://www.reddit.com/r/css/comments/q3p7bd/what_tutorial_helped_you_to_learn_best_practices/)
[11](https://doka.guide/css/numeric-types/)
