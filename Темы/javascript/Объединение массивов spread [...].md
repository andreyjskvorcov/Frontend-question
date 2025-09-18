Оператор spread (`...`) в JavaScript — очень удобный и мощный инструмент для работы с массивами. Он позволяет **распаковывать элементы массива** в местах, где ожидаются отдельные значения, что открывает простые и выразительные способы объединения массивов и добавления в них элементов.

---

### Объединение массивов с помощью spread

Вместо использования метода `concat()`, который соединяет массивы и возвращает новый, можно записать объединение с помощью оператора spread так:

```js
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

let newArray = nums1.concat(nums2); // [1, 2, 3, 4, 5, 6]

// То же самое через spread:
newArray = [...nums1, ...nums2];
```

Оператор `...` раскрывает (распаковывает) все элементы массива по одному и вставляет туда.

---

### Добавление новых элементов

С spread можно легко добавить отдельные элементы в массив при создании:

```js
let numbers = [1, 2, 3];

// Добавляем сразу элементы 4 и 5
numbers = [...numbers, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
```

Также можно вставлять новые элементы в начало, в середину и даже между несколькими массивами следуя порядку:

```js
const a = [1, 2];
const b = [5, 6];

// Вставляем 3 и 4 между a и b
const result = [...a, 3, 4, ...b];

console.log(result); // [1, 2, 3, 4, 5, 6]
```

---

### Отличия от `concat`

- `concat()` — метод массива, возвращает новый массив, склеивая исходные и переданные.
- Spread — синтаксис языка, более универсальный, читаемый и гибкий.
- Spread даёт больше контроля, так как позволяет добавлять напрямую элементы, а не только массивы.
- Spread поддерживается в любом месте, где JavaScript ожидает список элементов (например, аргументы функции, литералы массивов).

---

### Работа с несколькими массивами

Вы можете объединять не только два массива, а сколько угодно:

```js
const arr1 = [1];
const arr2 = [2];
const arr3 = [3];

const merged = [...arr1, ...arr2, ...arr3];
console.log(merged); // [1, 2, 3]
```

---

### Копирование массива

Также spread можно использовать для создания неглубокой копии массива:

```js
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
```

Это удобно, чтобы копировать массив без ссылки на исходный.

---

### Итог

- Spread оператор раскрывает элементы массива, позволяя легко объединять массивы и добавлять элементы.
- Он более читаемый и гибкий по сравнению с классическим `concat()`.
- Очень часто используется в современной разработке для удобной работы с коллекциями.[1][2][6]

[1](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
[2](https://jsexpert.net/array-concat-using-spread/)
[3](https://purpleschool.ru/knowledge-base/article/spread)
[4](https://newwebmaster.ru/merge-arrays-in-js/)
[5](https://ru.hexlet.io/qna/javascript/questions/kak-skleit-2-massiva-na-js)
[6](https://proghunter.ru/articles/javascript-spread-operator-examples-with-collections-and-objects)
[7](https://learn.javascript.ru/rest-parameters-spread-operator)
[8](https://fruntend.com/posts/operatory-rest-i-spread-v-javascript)
