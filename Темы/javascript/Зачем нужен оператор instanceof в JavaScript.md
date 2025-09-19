
---

### Что такое оператор instanceof в JavaScript?

`instanceof` проверяет, принадлежит ли объект определённому классу (или функции-конструктору) в цепочке прототипов.

---

### Синтаксис:

```js
obj instanceof Constructor;
```

- `obj` — объект, который проверяем.
- `Constructor` — функция-конструктор или класс.

Возвращает `true`, если `Constructor.prototype` есть в прототипной цепочке `obj`.

---

### Пример:

```js
function Animal() {}
function Dog() {}

const rex = new Dog();

console.log(rex instanceof Dog); // true
console.log(rex instanceof Animal); // false

// Если Dog наследует Animal:

Dog.prototype = Object.create(Animal.prototype);

const max = new Dog();
console.log(max instanceof Dog); // true
console.log(max instanceof Animal); // true
```

---

### Как работает оператор instanceof?

- Берёт `obj.__proto__`.
- Сравнивает его с `Constructor.prototype`.
- Если совпадают — возвращает `true`.
- Если нет — поднимается по цепочке `__proto__` пока не найдёт или не дойдёт до `null`.

---

### Не путайте с typeof:

```js
typeof []; // "object"
[] instanceof Array; // true
```

---

### Дополнительные примеры:

```js
class Car {}
const myCar = new Car();

console.log(myCar instanceof Car); // true
console.log(myCar instanceof Object); // true
```

---

### Важные замечания:

- `instanceof` работает только с объектами, созданными через `new` или с явно установленным прототипом.
- Для примитивов он возвращает `false`.
- Поведение `instanceof` можно кастомизировать через статический метод `Symbol.hasInstance`.

---

Если нужно, могу добавить примеры использования `instanceof` в Vue.js и React. Хотите?

[1](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof)
[2](https://learn.javascript.ru/instanceof)
[3](https://sky.pro/wiki/javascript/otritsanie-instanceof-v-java-script-uslovniy-operator-bez-else/)
[4](https://habr.com/ru/articles/675684/)
[5](https://code.mu/ru/javascript/book/oop/operator-instanceof/)
[6](https://javascript.ru/instanceof)
[7](https://freecode.academy/learn/exercises/587d7dae367417b2b2512b7a)
[8](https://proproprogs.ru/javascript_oop/privatnye-metody-i-svoystva-operator-instanceof)
[9](https://sky.pro/wiki/javascript/pochemu-instanceof-vozvraschaet-false-dlya-nekotorykh-literalov/)
[10](https://www.youtube.com/watch?v=J3qp6n-4ifE)
