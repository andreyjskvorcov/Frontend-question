## Что такое NaN?

**NaN** расшифровывается как **"Not A Number"** и представляет собой специальное числовое значение, которое означает "не число".  
Это возникает, когда результат математической операции не может быть представлен как корректное число. Например, деление 0 на 0, парсинг нечисловой строки и т.п.

---

## Тип данных NaN

Несмотря на название, `typeof NaN` возвращает **"number"**. Это особенность языка — NaN является числовым, но невалидным числом.

```js
console.log(typeof NaN); // "number"
```

---

## Почему нельзя сравнивать с NaN напрямую?

`NaN` — единственное значение в JavaScript, которое **не равно самому себе**:

```js
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
```

Поэтому для проверки на NaN нельзя использовать операторы равенства.

---

## Как проверить, что значение NaN?

### 1. Глобальная функция `isNaN()`

- Преобразует аргумент к числу и проверяет, равен ли он NaN.
- Может вернуть `true` и для значений, которые **не являются NaN, но преобразуются в NaN**.

```js
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true — потому что "hello" преобразуется в NaN
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false — строка "10" приводится к числу 10
```

### 2. Метод `Number.isNaN()`

- Проверяет строго, является ли значение именно NaN.
- Не приводит аргумент к числу, поэтому работает точнее и без ложных срабатываний.

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false ("hello" — не число)
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("10")); // false
console.log(Number.isNaN(0 / 0)); // true (0/0 = NaN)
```

---

## Пример - различие isNaN и Number.isNaN

```js
console.log(isNaN("hello")); // true (т.к. "hello" при Number("hello") = NaN)
console.log(Number.isNaN("hello")); // false (строка не равна NaN без преобразования)

console.log(isNaN("123")); // false (строка "123" успешно приводится к числу)
console.log(Number.isNaN("123")); // false (не NaN)

console.log(isNaN(undefined)); // true (undefined -> NaN)
console.log(Number.isNaN(undefined)); // false

console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true
```

---

## Дополнительный способ проверки NaN

Поскольку `NaN !== NaN`, можно проверить, не равен ли элемент самому себе:

```js
function isReallyNaN(value) {
  return value !== value;
}

console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(123)); // false
```

---

## Итоги

- **NaN** — числовое значение, обозначающее "не число".
- `typeof NaN` возвращает `"number"`.
- Для проверки на NaN не подходят операторы равенства.
- Используйте **`Number.isNaN()`** для безопасной и точной проверки на NaN.
- Глобальная функция `isNaN()` преобразует аргумент в число, что может привести к ложным срабатываниям.

---

Если нужно, могу дополнительно показать примеры с обработкой NaN в реальных задачах, например, при валидации числового ввода.

[1](https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript)
[2](https://dev.to/otumianempire/isnan-vs-numberisnan-52gk)
[3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
[4](https://www.reddit.com/r/webdev/comments/1d4vezd/til_windowisnan_and_numberisnan_have_different/)
[5](https://www.w3schools.com/jsref/jsref_isnan_number.asp)
[6](https://www.linkedin.com/pulse/understanding-difference-between-isnan-numberisnan-pushpendra-singh)
[7](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
[8](https://www.youtube.com/watch?v=V1KU1gAMAxw)
