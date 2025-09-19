---
### Что такое проваливание промисов (Promise Chaining)?

Проваливание промисов — механизм, при котором каждый `.then()` возвращает новый промис, позволяя строить цепочку асинхронных операций. Результат одного `.then()` передаётся следующему до финального результата.
---

### Пример из твоего текста:

```js
fetch('/user.json')
  .then((response) => response.json()) // промис №1
  .then((user) => fetch(`/users/${user.id}`)) // промис №2
  .then((response) => response.json()) // промис №3
  .then((userData) => console.log(userData)) // промис №4
  .catch((error) => console.error(error)); // обработка ошибок
```

---

### Дополнительные примеры:

```js
// Последовательные асинхронные задачи с задержками
function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, delay);
  });
}

task('Задача 1', 1000)
  .then(() => task('Задача 2', 500))
  .then(() => task('Задача 3', 300))
  .then(() => console.log('Все задачи выполнены'));
```

---

```js
// Пример ошибки в цепочке и её обработки
new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    throw new Error('Ошибка на втором шаге');
    return result * 2;
  })
  .then((result) => {
    console.log(result); // Этот шаг не выполнится
  })
  .catch((err) => {
    console.error('Поймана ошибка:', err.message);
  });
```

---

### Неправильный пример без проваливания (callback hell):

```js
fetch('/user.json').then((response) => {
  response.json().then((user) => {
    fetch(`/users/${user.id}`).then((response) => {
      response.json().then((userData) => {
        console.log(userData);
      });
    });
  });
});
```

---

### Правильный пример с проваливанием (чейнингом):

```js
fetch('/user.json')
  .then((res) => res.json())
  .then((user) => fetch(`/users/${user.id}`))
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

### Вывод:

- **Promise chaining** позволяет писать асинхронный код последовательно и читабельно.
- Каждый `.then()` возвращает промис, который ждёт завершения операции.
- Помогает избежать «адской пирамиды колбэков» (callback hell).
- `async/await` — синтаксический сахар над цепочками промисов.

---

Если нужно, могу добавить примеры использования цепочек промисов в Vue и React. Хотите?

[1](https://learn.javascript.ru/promise-chaining)
[2](https://www.hackfrontend.com/docs/javascript/promise-chaining)
[3](https://javascript.info/promise-chaining)
[4](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises)
[5](https://www.geeksforgeeks.org/javascript/javascript-promise-chaining/)
[6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
[7](https://learn.javascript.ru/promise)
[8](https://dou.ua/forums/topic/19787/)
[9](https://gist.github.com/Ebazhanov/30ce06b55e8d9b4aea5169ab6ab4a3af)
