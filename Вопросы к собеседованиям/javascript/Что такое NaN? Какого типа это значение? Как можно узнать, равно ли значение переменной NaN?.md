## Что такое NaN в JavaScript?

**NaN** расшифровывается как **"Not A Number"** — это специальное значение, которое обозначает **"не число"**. Оно появляется в результате выполнения некорректных или неопределённых математических операций, которые не могут быть представлены как допустимое число.

---

## Каким типом является NaN?

Хотя NaN означает "не число", его тип данных в JavaScript — **"number"**. То есть `typeof NaN === "number"`. Это особенность языка.

```js
console.log(typeof NaN); // "number"
```

Это значит, что NaN — это особое числовое значение, представляющее ошибку или неопределённость в числовом выражении.

---

## Когда появляется NaN?

NaN возникает в таких ситуациях, например:

- Деление числа на строку, которую нельзя привести к числу:

```js
let result = 5 / "hello"; // NaN
```

- Результат математической операции, не определённой в стандартном арифметическом смысле:

```js
Math.sqrt(-1); // NaN — корень из отрицательного числа
parseInt("blabla"); // NaN — парсинг нечисловой строки
```

---

## Как проверить, что переменная содержит NaN?

Проверка через оператор равенства (`===`, `==`) **не работает**, потому что:

- `NaN !== NaN` (NaN не равен даже самому себе)

```js
console.log(NaN === NaN); // false
```

### Правильные способы:

1. **Глобальная функция `isNaN()`**

- Проверяет, является ли значение _или_ его преобразование в число равным NaN.
- Может возвращать `true` и для нечисловых значений, которые при преобразовании дадут NaN.

```js
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (так как "hello" преобразуется в NaN)
console.log(isNaN(10)); // false
```

2. **Метод `Number.isNaN()`**

- Проверяет строгое совпадение с NaN.
- Не приводит значение к числу, поэтому ложных срабатываний нет.

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (не преобразует)
console.log(Number.isNaN(10)); // false
```

3. **Самостоятельная проверка на NaN через свойство уникальности:**

Поскольку NaN не равен самому себе, можно проверить так:

```js
function isReallyNaN(value) {
  return value !== value;
}

console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(10)); // false
```

---

## Примеры кода

```js
let x = NaN;
console.log(typeof x); // number
console.log(x === NaN); // false

console.log(isNaN(x)); // true
console.log(Number.isNaN(x)); // true

let y = 5 / "hello";
console.log(y); // NaN
console.log(isNaN(y)); // true
console.log(Number.isNaN(y)); // true

let z = 10;
console.log(isNaN(z)); // false
console.log(Number.isNaN(z)); // false
```

---

## Итоги

- **NaN** — специальное числовое значение, которое означает "не число".
- `typeof NaN` возвращает строку `"number"`.
- Сравнение с помощью `===` или `==` не подходит для проверки NaN, так как `NaN !== NaN`.
- Для проверки используют:
  - `Number.isNaN()` — предпочтительный метод, строго проверяющий именно значение NaN.
  - `isNaN()` — более общая проверка с преобразованием значения.
  - Сравнение с самим собой (`value !== value`).

---

Если нужно, могу привести примеры практического использования NaN при обработке ошибок или валидации данных.

[1](https://doka.guide/js/number-is-nan/)
[2](https://code.mu/ru/javascript/manual/lang/NaN/)
[3](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN)
[4](https://purpleschool.ru/knowledge-base/article/numberisnan)
[5](https://webformyself.com/nan-v-javascript/)
[6](https://awilum.ru/articles/understanding-nan-in-javascript/)
[7](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
[8](https://sky.pro/wiki/javascript/proverka-na-na-n-v-java-script-ispolzovanie-parse-float/)
[9](https://netology.ru/glossariy/nan)
[10](https://www.reddit.com/r/learnjavascript/comments/vje1m3/what_exactly_is_nan_at_a_deeper_level/?tl=ru)
