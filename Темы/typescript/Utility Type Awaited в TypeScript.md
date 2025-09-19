
---

### Что такое Awaited в TypeScript?

`Awaited` — utility тип, введённый в TypeScript 4.5, предназначен для извлечения типа, на который резолвится (разворачивается) Promise. Если есть тип `Promise<T>`, то `Awaited<Promise<T>>` вернёт `T`. Если тип не Promise — возвращается сам тип.

---

### Синтаксис

```typescript
Awaited<T>;
```

- `T` может быть либо Promise, либо обычным типом.
- Если `T` — Promise<U>, то `Awaited<T>` → `U`.
- Если `T` — не Promise, возвращается сам `T`.

---

### Пример 1: Извлечение типа из Promise

```typescript
async function getData(): Promise<number> {
  return 42;
}

type DataType = Awaited<ReturnType<typeof getData>>;
// DataType → number
```

- Тип `ReturnType<typeof getData>` равен `Promise<number>`.
- `Awaited` распаковывает Promise и возвращает `number`.

---

### Пример 2: Работа с вложенными Promise

```typescript
type NestedPromise = Promise<Promise<string>>;

type Result = Awaited<NestedPromise>;
// Result → string
```

- `Awaited` рекурсивно разворачивает вложенные промисы.

---

### Зачем использовать Awaited?

- Упрощает типизацию асинхронных функций.
- Помогает извлекать конечный тип результата из Promise.
- Рекурсивно разворачивает вложенные Promises.
- Полезен при написании обобщённых утилит для работы с асинхронным кодом.

---

### Ограничения

- Если тип `T` не Promise, `Awaited` просто возвращает `T`.
- Для сложных generic или условных типов может потребоваться дополнительное описание для корректного вывода.

---

### Итог

`Awaited` — мощный utility тип для работы с асинхронным кодом в TypeScript, позволяющий точно вывести тип результатов промисов и упростить взаимодействие с async/await.

---

Если нужны примеры использования `Awaited` с async функциями в React или Vue — могу подготовить. Хотите?

[1](https://stackoverflow.com/questions/75224773/what-is-the-awaited-type-in-typescript)
[2](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[3](https://www.geeksforgeeks.org/typescript/typescript-awaitedtype-utility-type/)
[4](https://cloudaffle.com/series/typescript-utility-types/awaited-utility-type-in-typescript/)
[5](https://blog.logrocket.com/async-await-typescript/)
[6](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
[7](https://www.youtube.com/watch?v=5QU_5FB6Z08)
[8](https://dev.to/vishesh-tiwari/typescript-utility-utility-types-1l1m)
