
---

### Что такое полифил?

Полифил (polyfill) — это код, обычно на JavaScript, который реализует функциональность, отсутствующую в старых браузерах, но уже доступную в современных версиях. Другими словами, это «заплатка», которая добавляет поддержку нового API там, где её ещё нет.

---

### Пример полифила для `Array.prototype.includes`

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function (item) {
    return this.indexOf(item) !== -1;
  };
}
```

Теперь даже в старом браузере метод `includes` будет работать корректно.

---

### Дополнительные примеры полифилов

#### Полифил для `Object.assign`

```js
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    let to = Object(target);
    for (let source of sources) {
      if (source != null) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }
    return to;
  };
}
```

---

#### Полифил для `Promise`

Полифилы для сложных API, таких как Promise, обычно подключаются через готовые библиотеки, например [core-js](https://github.com/zloirock/core-js), чтобы гарантировать поддержку во всех браузерах.

---

### Важное

- Полифилы увеличивают размер бандла — подключайте только необходимые.
- В современных проектах рационально использовать полифилы через инструменты, например, [Babel](https://babeljs.io/docs/en/babel-polyfill) с настройками для конкретных браузеров.

---

Если нужно, могу дополнить примерами использования полифилов в реальных приложениях Vue.js и React. Хотите?

[1](https://habr.com/ru/companies/usetech/articles/687288/)
[2](https://learn.javascript.ru/polyfills)
[3](https://sky.pro/wiki/javascript/polyfill-v-javascript-chto-eto-primery-i-kak-ispolzovat/)
[4](https://ru.hexlet.io/courses/js-dom/lessons/polyfills/theory_unit)
[5](https://mycodeplace.ru/articles/javascript-polyfills)
[6](https://developer.mozilla.org/ru/docs/Glossary/Polyfill)
[7](https://q-pax.ru/blog/erid/it/front/js/javascript_polyfills/)
[8](https://www.hackfrontend.com/docs/javascript/polyfill)
[9](https://www.youtube.com/watch?v=ti6vnn3NypQ)
