---

### Что такое queueMicrotask?

`queueMicrotask()` — встроенная функция JavaScript, добавляющая задачу в очередь микрозадач (microtask queue). Микрозадачи выполняются сразу после завершения текущего стека вызовов и до следующей макрозадачи.

---

### Синтаксис:

```js
queueMicrotask(() => {
  // Ваш код
});
```

---

### Пример использования:

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

queueMicrotask(() => {
  console.log('Microtask Hack Frontend');
});

console.log('End');
```

Что выведется?

```
Start
End
Microtask Hack Frontend
Timeout
```

---

### Дополнительные примеры:

```js
// Пример: последовательное выполнение microtask и macrotask
queueMicrotask(() => {
  console.log('Сначала эта микрозадача');
});

setTimeout(() => {
  console.log('Затем макрозадача, даже с задержкой 0');
}, 0);

console.log('Сначала синхронный код');
```

---

```js
// Использование внутри промиса для вспомогательной микрозадачи
Promise.resolve().then(() => {
  console.log('Микрозадача из промиса');
});

queueMicrotask(() => {
  console.log('Микрозадача из queueMicrotask');
});
```

---

### Где используется queueMicrotask?

- Внутри React, Vue и других фреймворков для оптимизации очередей рендеринга
- Для обновления состояния сразу после текущей операции, но до следующего события или рендера
- Для точного контроля порядка асинхронного выполнения

---

### Совет:

Используйте `queueMicrotask`, если нужно выполнить асинхронную задачу быстро, но после текущего кода — это надёжнее и эффективнее, чем `setTimeout(..., 0)`.

---

Если нужно, могу подготовить примеры использования `queueMicrotask` в Vue и React в том же стиле. Хотите?

[1](https://doka.guide/js/queuemicrotask/)
[2](https://purpleschool.ru/knowledge-base/article/queuemicrotask)
[3](https://www.hackfrontend.com/docs/javascript/how-to-add-a-task-to-the-queue-of-microtasks-queue-microtask)
[4](https://learn.javascript.ru/microtask-queue)
[5](https://bestprogrammer.ru/programmirovanie-i-razrabotka/queuemicrotask-v-javascript-kak-ispolzovat-i-pochemu-eto-vazhno-dlya-asinxronnogo-programmirovaniya)
[6](https://learn.javascript.ru/event-loop)
[7](https://ru.stackoverflow.com/questions/1169107/queuemicrotask-%D0%B8%D0%BB%D0%B8-promise-%D0%B8-async-await)
[8](https://doka.guide/js/micro-and-macro-tasks/)
[9](https://habr.com/ru/companies/gnivc/articles/910918/)
[10](https://highload.tech/blogs/ovladej-nastoyashhej-siloj-v-node-js-razbiraem-mikro-i-makrozadachi-na-primerah/)
