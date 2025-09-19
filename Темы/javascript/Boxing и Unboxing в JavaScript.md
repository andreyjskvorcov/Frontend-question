---

### Что такое Boxing?

Boxing — это автоматическое оборачивание примитивного значения во временный объект, чтобы можно было использовать методы и свойства объектов на примитивах.

```js
const str = 'hello';
console.log(str.toUpperCase()); // "HELLO"
```

Под капотом происходит примерно так:

```js
const str = 'hello';
const temp = new String(str); // Boxing: примитив → объект String
console.log(temp.toUpperCase()); // вызывается метод объекта
// temp удаляется, возвращается результат
```

---

### Пример Boxing для Number:

```js
const num = 42;
console.log(num.toFixed(2)); // "42.00" — примитив превращается во временный объект Number
```

---

### Что такое Unboxing?

Unboxing — процесс извлечения примитивного значения из объектной обёртки.

```js
const numObj = new Number(123); // объект
const primitive = numObj.valueOf(); // Unboxing
console.log(typeof primitive); // "number"
```

---

### Типы объектных обёрток:

| Примитив | Объектная обёртка |
| -------- | ----------------- |
| string   | String            |
| number   | Number            |
| boolean  | Boolean           |
| symbol   | Symbol            |
| bigint   | BigInt            |

---

### Пример автоматического Boxing и Unboxing:

```js
const str = 'hello';

// Boxing: создаётся временный объект
console.log(str.length); // 5
console.log(str.toUpperCase()); // "HELLO"

// Unboxing
const obj = new Boolean(false);
if (obj) {
  console.log('Это истина!'); // Выведется, так как obj — объект (truthy), а не примитив false
}
```

---

### Важное замечание:

Будьте осторожны с объектами-обёртками, например, `new Boolean(false)` или `new Number(0)` — эти объекты всегда считаются truthy, что может привести к неожиданному поведению.

---

### Итог:

- **Boxing** — это автоматическое создание временного объекта для примитива, позволяющего использовать методы.
- **Unboxing** — извлечение примитива из объекта-обёртки через `valueOf()`.
- Эти процессы происходят неявно — обычно вручную их использовать не нужно, но их понимание помогает лучше разбираться в внутреннем устройстве JavaScript.

---

Если хотите, могу дополнить примеры использования Boxing и Unboxing с Vue и React. Нужно?Вот дополнение к твоему вопросу и ответу про Boxing и Unboxing в JavaScript — исходный текст сохранён, добавлены примеры для наглядности:

---

### Что такое Boxing?

Boxing — это процесс автоматического оборачивания примитива во временный объект, чтобы можно было применять методы объектов к примитивам.

```js
const str = 'hello';
console.log(str.toUpperCase()); // "HELLO"
```

Под капотом происходит так:

```js
const temp = new String(str); // Boxing: примитив → объект
console.log(temp.toUpperCase()); // Вызывается метод объекта, потом temp удаляется
```

---

### Пример для Number:

```js
const num = 42;
console.log(num.toFixed(2)); // "42.00" — временный объект Number
```

---

### Что такое Unboxing?

Unboxing — обратный процесс — извлечение примитива из объектной обёртки.

```js
const numObj = new Number(123); // объект
const primitive = numObj.valueOf(); // Unboxing — примитивное число
console.log(typeof primitive); // "number"
```

---

### Типы объектных обёрток

| Примитив | Объектная обёртка |
| -------- | ----------------- |
| string   | String            |
| number   | Number            |
| boolean  | Boolean           |
| symbol   | Symbol            |
| bigint   | BigInt            |

---

### Автоматическое Boxing и Unboxing

```js
const str = 'hello';

// Boxing
console.log(str.length); // 5
console.log(str.toUpperCase()); // "HELLO"

// Unboxing
const obj = new Boolean(false);
if (obj) {
  console.log('Это истина!'); // true, т.к. obj — объект (truthy), а не примитив false
}
```

---

### Важно

Использование новых объектов обёрток типа `new Boolean(false)` может вызвать неожиданные результаты, так как объекты всегда truthy.

---

### Итог

Понимание Boxing и Unboxing помогает лучше разобраться в работе с примитивами и объектами в JavaScript. Обычно эти процессы выполняются автоматически.

---

Если нужно, могу добавить примеры для Vue.js и React. Хотите?

[1](https://www.hackfrontend.com/docs/javascript/boxing-and-unboxing)
[2](https://ru.stackoverflow.com/questions/583927/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D1%80%D0%B0%D1%81%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0boxing-unboxing)
[3](https://javarush.com/groups/posts/619-avtoupakovka-i-raspakovka-v-java)
[4](https://habr.com/ru/articles/328052/)
[5](https://ulearn.me/course/basicprogramming/Boxing_unboxing_fe30b329-13dc-4c9d-8312-80d1b87a0b61)
[6](https://dev.to/ikbalarslan/javascript-boxing-and-unboxing-4o9g)
[7](https://itvdn.com/ru/blog/article/boxing-unboxing)
[8](https://vectree.ru/text/135/4/0)
[9](https://sobes.tech/bank/frontend/94f94868-3398-4b19-952f-e3a77b2efccc)
[10](https://learn.microsoft.com/ru-ru/dotnet/csharp/programming-guide/types/boxing-and-unboxing)
