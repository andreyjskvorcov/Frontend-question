---
### Что такое каррирование (Currying)?

Каррирование — техника преобразования функции с несколькими аргументами в цепочку функций, каждая из которых принимает по одному аргументу.
---

### Простой пример:

```js
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3)); // 6
```

---

### Частичное применение:

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2); // частично применили функцию
console.log(double(5)); // 10
```

---

### Универсальная функция каррирования:

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```

---

### Отличие от обычной функции

| Характеристика        | Обычная функция | Каррированная функция               |
| --------------------- | --------------- | ----------------------------------- |
| Вызов                 | `sum(1, 2, 3)`  | `sum(1)(2)(3)`                      |
| Применение аргументов | Все сразу       | По одному                           |
| Переиспользование     | Сложнее         | Удобно фиксировать часть аргументов |

---

### Когда применять каррирование?

- Когда нужно частично применить аргументы
- Для функционального стиля (map, filter, reduce)
- При составлении сложных функций из простых

---

Если нужно, могу добавить примеры использования каррирования в Vue.js и React. Хотите?

[1](https://learn.javascript.ru/currying-partials)
[2](https://habr.com/ru/companies/ruvds/articles/427295/)
[3](https://thecode.media/currying/)
[4](https://proweb63.ru/help/js/carry-js)
[5](https://techrocks.ru/2021/10/29/currying-and-composition-in-javascript/)
[6](https://proglib.io/p/karrirovanie-i-funkcii-vysshego-poryadka-v-javascript-za-5-prostyh-shagov-2021-10-15)
[7](https://frontend-stuff.com/blog/currying/)
[8](https://www.youtube.com/watch?v=j_dXcJ11jsI)
[9](https://monsterlessons.com/project/lessons/karrirovanie-currying-v-javascript)
