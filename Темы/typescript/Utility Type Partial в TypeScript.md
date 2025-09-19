
---

### Что такое Partial в TypeScript?

`Partial` — это utility тип, который преобразует тип объекта так, что все его свойства становятся **необязательными** (`optional`). Это удобно, когда нужно создавать версии типов с частично заполненными полями, например, для обновления данных или конфигураций.

---

### Синтаксис

```typescript
Partial<T>;
```

- `T` — исходный тип объекта.
- Тип `Partial<T>` создаёт новый тип, в котором все свойства `T` становятся необязательными.

---

### Когда использовать Partial?

- При обновлении данных: не все поля могут быть изменены.
- Для форм, где пользователь может заполнить не все поля.
- В API-запросах с частичной передачей данных.

---

### Пример использования Partial

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
  name: 'Alice',
};
```

Здесь `Partial<User>` создаёт версию типа `User`, где все свойства — необязательные. Переменная `updateUser` может содержать только часть полей, например, только `name`.

---

### Пример использования Partial для обновления объекта

```typescript
function updateUserInfo(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = { id: 1, name: 'Bob', email: 'bob@example.com' };
const updatedUser = updateUserInfo(user, { name: 'Robert' });

console.log(updatedUser);
```

- Функция `updateUserInfo` принимает объект `updates` с опциональными полями (`Partial<User>`) и возвращает новый объект с применёнными изменениями.

---

### Итог

- `Partial` делает код гибким и безопасным при работе с частично заполненными или обновляемыми объектами.
- Особенно полезен для API, форм и конфигураций.

---

Если нужно, могу подготовить примеры составных типов с Partial и его использование в React или Vue с TypeScript. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://dev.to/smpnjn/how-the-typescript-partial-type-works-2klj)
[3](https://www.geeksforgeeks.org/typescript/typescript-partialtype-utility-type/)
[4](https://refine.dev/blog/typescript-partial-utility-type/)
[5](https://mimo.org/glossary/typescript/partial-type)
[6](https://dev.to/rushi-patel/utility-types-in-typescript-a-detailed-explanation-2m9p)
[7](https://www.contentful.com/blog/guide-typescript-utility-types/)
[8](https://piccalil.li/blog/real-world-uses-of-typescripts-utility-types/)
