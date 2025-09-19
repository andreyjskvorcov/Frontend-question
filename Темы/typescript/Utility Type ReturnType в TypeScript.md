
---

### Что такое ReturnType в TypeScript?

`ReturnType` — это utility тип, который **извлекает тип возвращаемого значения** функции. Он помогает избежать дублирования определений типа вручную, автоматически подстраиваясь при изменениях в функции.

---

### Синтаксис

```typescript
ReturnType<T>;
```

- `T` — тип функции или ссылка на функцию.
- `ReturnType<T>` вычисляет и возвращает тип, который фактически возвращает функция.

---

### Пример использования ReturnType

```typescript
function createUser(name: string, age: number) {
  return {
    name,
    age,
    createdAt: new Date(),
  };
}

type UserFromFunction = ReturnType<typeof createUser>;
```

- Тип `UserFromFunction` будет `{ name: string; age: number; createdAt: Date }`.
- Тип автоматически выводится из возвращаемого значения функции `createUser`.

---

### Пример типизации вспомогательных функций

```typescript
function processUserData(user: ReturnType<typeof createUser>) {
  console.log(user.name, user.createdAt);
}
```

- `processUserData` принимает объект с точно таким типом, как возвращает `createUser`.
- Это обеспечивает связанность типизации и предотвращает ошибки.

---

### Зачем нужен ReturnType?

- Упрощает типизацию, исключая ручное повторение типа возвращаемого значения.
- Гарантирует синхронизацию типов при изменениях функций.
- Полезен для фабричных функций и обёрток, когда важен тип результата.

---

### Совместимость с другими утилитами

Можно комбинировать с:

- `InstanceType`
- `Parameters`
- `Partial`, `Required` и другими

---

### Примечания

- Не всегда корректно работает с перегруженными функциями (overloads).
- Требует аккуратного использования с generic-функциями.

---

### Итог

`ReturnType` — мощный инструмент вывода типа результата функции, повышающий поддерживаемость, безопасность и гибкость кода.

---

Если нужно, могу подготовить примеры использования `ReturnType` с async-функциями, generic и в React/Vue проектах. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://www.geeksforgeeks.org/typescript/typescript-returntype-type-utility-type/)
[3](https://fjolt.com/article/typescript-returntype-utility-type)
[4](https://dev.to/ruben_alapont/returntype-in-typescript-enhancing-readability-and-maintainability-2ki5)
[5](https://itsourcecode.com/typescript-tutorial/typescript-returntype-how-to-use-the-returntype-utility-type/)
[6](https://www.convex.dev/typescript/core-concepts/functions-methods/typescript-return-type)
[7](https://dev.to/vishesh-tiwari/typescript-utility-utility-types-1l1m)
[8](https://hannadrehman.com/blog/understanding-return-types-in-typescript)
