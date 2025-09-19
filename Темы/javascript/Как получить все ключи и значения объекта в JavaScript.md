---

### Методы для работы с объектами

JavaScript предоставляет три удобных метода для получения ключей, значений и пар ключ-значение объекта:

| Метод              | Описание                        | Возвращает                       |
| ------------------ | ------------------------------- | -------------------------------- |
| `Object.keys()`    | Получить все ключи объекта      | Массив строк (`string[]`)        |
| `Object.values()`  | Получить все значения объекта   | Массив значений (`any[]`)        |
| `Object.entries()` | Получить все пары ключ-значение | Массив пар `[[key, value], ...]` |

---

### Получить все ключи

```js
const user = { name: 'Alice', age: 25, role: 'admin' };

const keys = Object.keys(user);
console.log(keys); // ["name", "age", "role"]
```

---

### Получить все значения

```js
const values = Object.values(user);
console.log(values); // ["Alice", 25, "admin"]
```

---

### Получить пары ключ-значение

```js
const entries = Object.entries(user);
console.log(entries);
// [["name", "Alice"], ["age", 25], ["role", "admin"]]
```

---

### Итерация по объекту

#### Используя `for...of` с `Object.entries()`

```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

#### Используя `for...in` (реже рекомендуется)

```js
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}
```

_Замечание:_ `for...in` перечисляет все перечисляемые свойства, включая унаследованные, поэтому полезно использовать `hasOwnProperty`.

---

### Важное

Порядок ключей в объекте не гарантируется строго, но в современных браузерах обычно стабилен.

---

Если нужно, могу добавить примеры использования этих методов в Vue.js и React. Хотите?

[1](https://learn.javascript.ru/keys-values-entries)
[2](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
[3](https://learnjs.ru/lessons/object-entries-keys-values/)
[4](https://www.nodul.ru/blog/kak-perebrat-svoystva-obekta-v-javascript)
[5](https://ru.w3docs.com/uchebnik-javascript/object-keys-values-entries.html)
[6](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-ru)
[7](https://arenda-server.cloud/blog/objasnenie-metodov-object-entries-i-object-values-v-javascript/)
[8](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
[9](https://www.youtube.com/watch?v=Ha2geO5Qw_Q)
[10](https://easyadvice.ru/questions/frontend/object_methods_with_arrays/)
