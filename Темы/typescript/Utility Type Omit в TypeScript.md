
---

### Что такое Omit в TypeScript?

`Omit` — utility тип, позволяющий создать новый тип из существующего, исключив из него указанные свойства. Это удобный способ убрать ненужные или чувствительные поля из типа, без необходимости создавать новый интерфейс вручную.

---

### Синтаксис

```typescript
Omit<T, K>;
```

- `T` — исходный тип или интерфейс.
- `K` — объединение (union) ключей, которые нужно исключить из `T`.

---

### Когда использовать Omit?

- Чтобы исключить ненужные или конфиденциальные поля из объекта.
- Для создания типов API-ответов без приватных данных.
- В React для передачи в компоненты только нужных пропсов.
- Для упрощения и безопасности типов при переиспользовании.

---

### Пример использования Omit

```typescript
interface User {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
}

type PublicUserData = Omit<User, 'isAdmin'>;

const userData: PublicUserData = {
  id: 1,
  name: 'Alice',
  age: 25,
};

userData.isAdmin = true;
// Ошибка: свойство 'isAdmin' отсутствует в типе 'PublicUserData'
```

---

### Пример с API

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  isAdmin: boolean;
}

type SafeUserData = Omit<User, 'passwordHash' | 'email'>;

function getSafeUserData(user: User): SafeUserData {
  const { passwordHash, email, ...rest } = user;
  return rest;
}

const user: User = {
  id: 42,
  name: 'Bob',
  email: 'bob@example.com',
  passwordHash: 'hashed_password',
  isAdmin: false,
};

const safeData = getSafeUserData(user);
// safeData не содержит passwordHash и email
```

---

### Зачем нужен Omit?

- Создаёт упрощённые версии типов без лишних свойств.
- Обеспечивает безопасность, исключая конфиденциальные данные.
- Позволяет избежать конфликтов и дублирования при переопределении типов.

---

### Сравнение с Pick

| Утилита      | Описание                                                         |
| ------------ | ---------------------------------------------------------------- |
| `Pick<T, K>` | Выбирает только указанные свойства `K` из типа `T`               |
| `Omit<T, K>` | Исключает указанные свойства `K` из типа `T`, оставляя остальные |

---

Если нужны продвинутые примеры с generics, React или Vue, или советы по использованию — могу помочь. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://refine.dev/blog/typescript-omit-utility-type/)
[3](https://graphite.dev/guides/typescript-omit-utility-type)
[4](https://www.geeksforgeeks.org/typescript/typescript-omittype-keys-utility-type/)
[5](https://mimo.org/glossary/typescript/omit-type)
[6](https://blog.openreplay.com/how-to-use-typescripts-omit-utility-type/)
[7](https://dev.to/blamb31/typescripts-omit-utility-type-514g)
[8](https://www.convex.dev/typescript/advanced/typescript-omit)
[9](https://stackoverflow.com/questions/48215950/exclude-property-from-type)
