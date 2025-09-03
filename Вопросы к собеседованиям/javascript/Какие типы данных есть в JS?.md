В JavaScript есть всего 8 основных типов данных. Они делятся на примитивные и объектный тип. Ниже подробно расписаны каждый тип с примерами.

---

## Основные типы данных в JavaScript

### 1. Number (число)

- Представляет целые и числа с плавающей точкой.
- В JS все числа — 64-битные числа с плавающей точкой (обычный формат IEEE 754).
- Специальные значения: `Infinity`, `-Infinity`, `NaN` (не число).

```js
let age = 30;
let price = 99.99;
let infinity = Infinity;
let notANumber = NaN;

console.log(typeof age); // "number"
```

---

### 2. BigInt

- Для представления целых чисел произвольной длины (очень большие числа).
- Обозначается суффиксом `n`.
- Используется при необходимости работать с числами больше, чем максимально безопасные для `Number`.

```js
let big = 900719925474099123456789n;
console.log(typeof big); // "bigint"
```

---

### 3. String (строка)

- Последовательность символов.
- Обозначается кавычками (одинарными, двойными или обратными для шаблонных строк).
- Строки неизменяемые.

```js
let greeting = "Hello";
let name = "John";
let template = `My name is ${name}`;

console.log(typeof greeting); // "string"
```

---

### 4. Boolean (булевый / логический тип)

- Имеет два значения: `true` или `false`.
- Используется для логических операций и условий.

```js
let isLoggedIn = true;
let hasPermission = false;

console.log(typeof isLoggedIn); // "boolean"
```

---

### 5. Symbol

- Уникальный и неизменяемый примитив, используется для создания уникальных идентификаторов свойств объектов.
- Каждый символ уникален и не равен другому, даже если описание одинаковое.

```js
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

console.log(typeof sym1); // "symbol"
```

---

### 6. null

- Специальное значение, означающее "намеренное отсутствие значения".
- Тип при применении `typeof` — `"object"` (особенность языка).

```js
let empty = null;
console.log(empty); // null
console.log(typeof empty); // "object" — историческая ошибка языка
```

---

### 7. undefined

- Значение переменной, которой **не присвоено** значение.
- Является отдельным типом с единственным значением `undefined`.

```js
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"
```

---

### 8. Object (объект)

- Сложный тип для хранения коллекций и более сложных структур данных.
- Включает объекты, массивы, функции и др.
- При помощи ключей и значений хранит данные.
- `typeof` для объектов возвращает `"object"`.
- Особый подтип — функция — возвращает `"function"`.

```js
let person = {
  name: "Alice",
  age: 25,
  isEmployed: true,
};

let arr = [1, 2, 3];

console.log(typeof person); // "object"
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true, проверка на массив
```

---

## Дополнительные примеры с typeof

```js
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof Symbol()); // "symbol"
console.log(typeof null); // "object" (особенность)
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof 10n); // "bigint"
```

---

## Итог

| Тип данных | Описание                         | Пример                                  | typeof возвращает     |
| ---------- | -------------------------------- | --------------------------------------- | --------------------- |
| Number     | Числа с плавающей точкой и целые | `123, 3.14, NaN, Infinity`              | "number"              |
| BigInt     | Большие целые числа              | `123n, 900719925474099123456789n`       | "bigint"              |
| String     | Текстовые строки                 | `"hello", 'world', \`template\``        | "string"              |
| Boolean    | Логические значения              | `true, false`                           | "boolean"             |
| Symbol     | Уникальные идентификаторы        | `Symbol("id")`                          | "symbol"              |
| null       | Отсутствие значения              | `null`                                  | "object" (ошибка)     |
| undefined  | Неинициализированная переменная  | `undefined`                             | "undefined"           |
| Object     | Сложные структуры данных         | `{key: "value"}, [1,2,3], function(){}` | "object" / "function" |

---

Если нужно — могу подробно объяснить любой из этих типов с дополнительными примерами и особенностями работы.

[1](https://learn.javascript.ru/types)
[2](https://elbrusboot.camp/blog/tipy-dannykh-v-javascript-kratkoie-rukovodstvo-2/)
[3](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Data_structures)
[4](https://htmlacademy.ru/blog/js/javascript-types)
[5](https://stackdev.blog/blog/js-types)
[6](https://www.schoolsw3.com/js/js_datatypes.php)
[7](https://sky.pro/wiki/javascript/peremennye-i-tipy-dannyh-v-javascript/)
[8](https://proproprogs.ru/javascript/primitivnye-tipy-dannyh)
[9](https://msiter.ru/tutorials/javascript/js_datatypes)
