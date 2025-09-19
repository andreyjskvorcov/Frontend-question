
---

### Что такое Record в TypeScript?

`Record` — это utility тип, который создаёт объектный тип с набором ключей определённого типа `K` и значениями типа `T`. Это удобный способ типизировать объекты с заранее известными ключами, где каждому ключу соответствует значение одного типа.

---

### Синтаксис

```typescript
Record<K, T>;
```

- `K` — тип ключей объекта (например, строка, число, или объединение строковых литералов).
- `T` — тип значений, соответствующих этим ключам.

---

### Пример использования Record

```typescript
type UserRoles = 'admin' | 'user' | 'guest';
type RolePermissions = Record<UserRoles, string[]>;

const rolePermissions: RolePermissions = {
  admin: ['create', 'edit', 'delete'],
  user: ['view', 'edit'],
  guest: ['view'],
};
```

- Здесь `UserRoles` — объединение типов ключей.
- `Record<UserRoles, string[]>` задаёт объект с ключами из `UserRoles`, где значения — массивы строк.

---

### Пример с enum

```typescript
enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

type StatusMessage = Record<Status, string>;

const statusMessages: StatusMessage = {
  [Status.Active]: 'Your account is active.',
  [Status.Inactive]: 'Your account is inactive.',
  [Status.Pending]: 'Your account is pending approval.',
};
```

- Использование enum в качестве типа ключей.
- `Record<Status, string>` — объект с ключами из enum, значениями строками.

---

### Преимущества Record

- Явно описывает структуру объекта с фиксированным набором ключей.
- Позволяет избежать ошибок с неправильными ключами.
- Улучшает поддержку и читаемость кода.
- Хорошо сочетается с union типами и enum.

---

### Когда использовать?

- При работе с объектами, где точно известен набор ключей.
- Для типизации словарей, мап и сопоставления ключ-значение.
- Для создания более строгих и проверяемых на этапе компиляции структур данных.

---

Если нужны расширенные примеры Record, советы по созданию типов или использование с React и Vue + TypeScript — готов помочь. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://refine.dev/blog/typescript-record-type/)
[3](https://graphite.dev/guides/typescript-record-utility-type)
[4](https://blog.logrocket.com/typescript-record-types/)
[5](https://www.thesoftwarelounge.com/typescript-record-type-guide/)
[6](https://mimo.org/glossary/typescript/record-type)
[7](https://www.geeksforgeeks.org/typescript/what-is-the-record-type-in-typescript/)
[8](https://geshan.com.np/blog/2022/12/typescript-record/)
[9](https://stackoverflow.com/questions/51936369/what-is-the-record-type)
