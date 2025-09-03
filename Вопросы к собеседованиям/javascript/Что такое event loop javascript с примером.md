Event Loop (событийный цикл) в JavaScript — это механизм, который управляет выполнением кода, обработкой событий и асинхронных операций в однопоточном движке JavaScript. Благодаря Event Loop JavaScript может выполнять асинхронный код, не блокируя основной поток.

---

### Как работает Event Loop?

- В JavaScript есть стек вызовов (Call Stack), куда помещаются функции для выполнения.
- Все синхронные задачи выполняются последовательно из стека.
- Асинхронные операции (например, таймеры, запросы fetch) отправляются в Web API (браузер или Node.js).
- Когда асинхронная операция готова, её callback помещается в очередь задач (Callback Queue).
- Event Loop проверяет, пуст ли стек вызовов. Если да — забирает первый callback из очереди и помещает его в стек для выполнения.
- Этот процесс повторяется бесконечно, управляя выполнением задач.

---

### Приоритет микротасков и макротасков

- Микротаски (microtasks) — промисы, queueMicrotask и другие: выполняются сразу после завершения текущего кода, до перехода к следующей макротаске.
- Макротаски (macrotasks) — setTimeout, setInterval, обработчики событий, сетевые запросы.
- Event Loop сначала выполняет все доступные микротаски, затем берёт одну макротаску, и повторяет цикл.

---

### Пример

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Вывод будет:

```
Start
End
Promise
Timeout
```

Потому что микротаски (промисы) выполняются раньше макротасков (таймера).

---

### Итог

Event Loop — это ключевой механизм, делающий возможным асинхронное программирование в JavaScript, позволяющий эффективно обрабатывать события и задачи без блокировки основного потока выполнения.[1][2][4][5]

[1](https://www.hackfrontend.com/docs/javascript/event-loop)
[2](https://tproger.ru/articles/event-loop-dlya-chajnikov--prostymi-slovami-o-slozhnom-mehanizme-brauzera)
[3](https://habr.com/ru/articles/762618/)
[4](https://learn.javascript.ru/event-loop)
[5](https://ru.hexlet.io/qna/javascript/questions/event-loop-js-chto-eto)
[6](https://ru.hexlet.io/qna/javascript/questions/kak-rabotaet-event-loop-v-javascript)
[7](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Execution_model)
[8](https://worksolutions.ru/blog/event-loop-i-optimizacziya-prilozhenij-pri-pomoshhi-asinhronnogo-koda/)
[9](https://habr.com/ru/companies/otus/articles/801249/)
[10](https://www.youtube.com/watch?v=377qAu37OTE)
