
---

### Основное различие

| Метод                     | Что делает                                   |
| ------------------------- | -------------------------------------------- |
| `event.preventDefault()`  | Отменяет стандартное поведение браузера      |
| `event.stopPropagation()` | Останавливает всплытие события по DOM-дереву |

Оба метода часто используются вместе, но выполняют разные задачи.

---

### Что делает `event.preventDefault()`

Останавливает действие по умолчанию, которое браузер выполняет при определённом событии.

---

### Пример `event.preventDefault()`

```html
<a href="https://google.com" id="link">Перейти</a>
```

```js
document.getElementById('link').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Переход отменён');
});
```

Ссылка не откроется — стандартное действие браузера отменено.

---

### Что делает `event.stopPropagation()`

Останавливает всплытие события вверх по дереву DOM — родительские обработчики не будут вызваны.

---

### Пример `event.stopPropagation()`

```html
<div id="parent">
  <button id="child">Нажми меня</button>
</div>
```

```js
document.getElementById('parent').addEventListener('click', () => {
  console.log('Клик по родителю');
});

document.getElementById('child').addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Клик по кнопке');
});
```

При клике по кнопке будет выведено только:

```
Клик по кнопке
```

Родительский обработчик не сработает.

---

### А если использовать оба?

Иногда нужно одновременно и предотвратить действие, и остановить всплытие:

```js
element.addEventListener('submit', (event) => {
  event.preventDefault(); // отменить отправку формы
  event.stopPropagation(); // не дать событию дойти до родителя
});
```

---

### Важное замечание:

Оба метода не взаимозаменяемы — используйте каждый строго по назначению!

---

Если нужно, могу дополнить примерами использования в Vue.js и React. Хотите?

[1](https://sky.pro/wiki/javascript/otlichiya-event-stop-propagation-i-event-prevent-default-v-java-script/)
[2](https://ru.stackoverflow.com/questions/46805/%D0%A7%D0%B5%D0%BC-%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F-preventdefault-%D0%BE%D1%82-stoppropagation)
[3](https://www.hackfrontend.com/docs/javascript/difference-between-prevent-default-stop-propagation)
[4](https://ru.hexlet.io/qna/javascript/questions/v-chem-otlichiya-event-stoppropagation-i-event-preventdefault-v-javascript)
[5](https://ya.ru/neurum/c/tehnologii/q/v_chem_raznica_mezhdu_preventdefault_i_stoppropagation_78931d37)
[6](https://sobes.tech/en/bank/frontend/cddaaab9-43ad-45c2-93c6-b28ab2f2fe6f)
[7](https://stepansuvorov.com/blog/2013/05/%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-preventdefault-stoppropagation-%D0%B8-stopimmediatepropagation/index.html)
[8](https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault)
[9](https://doka.guide/js/event-prevent-default/)
[10](https://techrocks.ru/2022/07/27/event-preventdefault-and-event-stoppropagation-js-methods/)
