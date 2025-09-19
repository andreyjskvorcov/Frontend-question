
---

### Что такое Symbol.iterator и зачем он нужен

Symbol.iterator — это специальный символ, используемый в JavaScript для создания итерируемых объектов, то есть таких, которые можно перебирать с помощью `for...of`, оператора расширения (`...`), и других конструкций, требующих итерации.

---

### Итерируемые объекты

Объекты, у которых определён метод с ключом `Symbol.iterator`, считаются итерируемыми. Это:

- массивы `[]`
- строки `"hello"`
- множества `Set`
- карты `Map`
- объект `arguments`
- и другие встроенные коллекции

---

### Пример использования с массивом

```js
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value); // 1, 2, 3
}
```

Здесь `arr[Symbol.iterator]` автоматически вызывается при проходе в цикле `for...of`.

---

### Как работает Symbol.iterator

Метод `Symbol.iterator` должен возвращать объект-итератор, у которого есть метод `next()`.

Метод `next()` возвращает объект:

- `value` — текущее значение
- `done` — булево, указывает, завершен ли перебор

---

### Пример собственного итератора

```js
const customIterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const num of customIterable) {
  console.log(num); // 10, 20, 30
}
```

---

### Почему нельзя итерировать обычный объект?

```js
const obj = { a: 1, b: 2 };
for (const key of obj) {
  // TypeError: obj is not iterable
}
```

Обычные объекты не являются итерируемыми, так как не реализуют метод `[Symbol.iterator]`.

---

### Где используется Symbol.iterator

- Цикл `for...of`
- Оператор расширения `...`
- `Array.from()`
- `Promise.all`
- Структуры данных `Set` и `Map`
- Деструктуризация `[...something]`

---

### Вывод

- `Symbol.iterator` — ключ к итерируемости объектов.
- Любой объект с методом `[Symbol.iterator]` можно использовать в `for...of`.
- Можно создавать свои итерируемые структуры с кастомным поведением итерации.

---

Если нужно, могу добавить примеры использования `Symbol.iterator` с Vue.js и React. Хотите?

[1](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
[2](https://habr.com/ru/articles/481548/)
[3](https://learn.javascript.ru/iterator)
[4](https://doka.guide/js/iterator/)
[5](https://www.youtube.com/watch?v=CDpBHAwFsog)
[6](https://proglib.io/p/simple-js-concepts)
[7](https://purpleschool.ru/knowledge-base/article/iterator)
[8](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_generators)
