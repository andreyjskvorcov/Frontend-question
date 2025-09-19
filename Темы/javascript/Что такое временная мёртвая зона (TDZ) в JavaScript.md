
---

### Что такое Temporal Dead Zone (TDZ)?

TDZ — это период времени между началом области видимости переменной (например, в блоке, функции) и её инициализацией, в течение которого к переменной нельзя обращаться. Возникает для переменных, объявленных с `let` и `const`.

---

### Простой пример:

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

Несмотря на объявление `x`, доступ к ней до присвоения вызовет ошибку из-за TDZ.

---

### К чему применяется TDZ?

- `let`
- `const`
- Параметры функций с деструктуризацией
- Классы, объявленные через `class`

---

### Дополнительные примеры:

```js
{
  // TDZ для переменной a начинается с блока и заканчивается объявлением
  // Ошибка если обратиться до объявления
  // console.log(a); // ReferenceError
  let a = 5;
  console.log(a); // 5
}
```

```js
function func() {
  // TDZ начинается с входа в функцию и заканчивается объявлением b
  // console.log(b); // ReferenceError
  let b = 20;
  console.log(b); // 20
}

func();
```

---

### Особенность с var:

```js
console.log(c); // undefined — var нет TDZ, переменная поднимается и инициализируется undefined
var c = 30;
```

---

### Итог

| Тип переменной | Поднимается? | Инициализируется? | Есть TDZ? |
| -------------- | ------------ | ----------------- | --------- |
| `var`          | Да           | Да (undefined)    | Нет       |
| `let`          | Да           | Нет               | Да        |
| `const`        | Да           | Нет               | Да        |

---

### Почему TDZ важна?

- Предотвращает использование переменных до их объявления или инициализации.
- Повышает предсказуемость и безопасность кода.
- Одна из причин, почему рекомендуется использовать `let` и `const` вместо `var`.

---

Если нужно, могу добавить примеры работы с TDZ в Vue.js и React. Хотите?

[1](https://skondratev.com/tdz-temporal-dead-zone-in-js/)
[2](https://dmenshikov.com/2017-07-13-temporal-dead-zone/)
[3](https://dev.to/paharihacker/understanding-the-temporal-dead-zone-tdz-in-javascript-4flc)
[4](https://defront.ru/posts/2019/06-june/01-unpacking-hoisting/)
[5](https://blog.ithillel.ua/ru/articles/10-must-have-methods-in-javascript)
[6](https://itcodik.com/article/osnovy-javascript-dlya-opytnyh-razrabotchikov----hoisting-tdz-glubokoe-kopirovanie-i-drugie-koncepcii-kodik-obuchenie-programmirovaniyu)
[7](https://www.youtube.com/watch?v=OgE3P6kEPz4)
[8](https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/)
[9](https://www.educative.io/answers/what-is-the-temporal-dead-zone-in-javascript)
