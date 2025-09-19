
---

### Что такое Pick в TypeScript?

`Pick` — это utility тип, который позволяет создать новый тип, выбирая конкретные свойства из существующего типа или интерфейса. Он формирует тип с набором только указанных ключей, игнорируя остальные.

---

### Синтаксис

```typescript
Pick<T, K>;
```

- `T` — исходный тип или интерфейс.
- `K` — объединение (union) ключей, которые нужно выбрать из `T`.

---

### Когда использовать Pick?

- Чтобы создать тип с ограниченным числом свойств из большого типа.
- Для типизации данных API, когда нужен только определённый набор полей.
- В React-пропсах, если компонент использует только часть передаваемых свойств.

---

### Пример использования Pick

```typescript
interface User {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
}

type BasicUserInfo = Pick<User, 'id' | 'name'>;

const userInfo: BasicUserInfo = {
  id: 1,
  name: 'Alice',
};

userInfo.age = 25; // Ошибка: свойства `age` нет в типе BasicUserInfo
```

- `BasicUserInfo` содержит только `id` и `name`.
- Попытка использовать свойства, не включённые в Pick, вызывает ошибку.

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

type PublicUserProfile = Pick<User, 'id' | 'name'>;

function getPublicProfile(user: User): PublicUserProfile {
  return {
    id: user.id,
    name: user.name,
  };
}
```

- Возвращает только безопасную часть данных — `id` и `name`.

---

### Зачем нужен Pick?

- Сокращает типы, выбирая только нужные поля.
- Позволяет избежать дублирования кода.
- Помогает контролировать структуру передаваемых данных.
- В сочетании с типом `Omit` даёт гибкие инструменты для работы с типами.

---

### Pick vs Omit

| Утилита    | Описание                                               |
| ---------- | ------------------------------------------------------ |
| Pick<T, K> | Оставляет только свойства `K` из типа `T`              |
| Omit<T, K> | Исключает свойства `K` из типа `T`, оставляя остальные |

---

Если нужны примеры продвинутого использования Pick с generics или для React/Vue — могу подготовить. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://refine.dev/blog/typescript-pick-utility-type/)
[3](https://graphite.dev/guides/typescript-pick-utility-type)
[4](https://ultimatecourses.com/blog/using-typescript-pick-mapped-type)
[5](https://mimo.org/glossary/typescript/pick-type)
[6](https://www.dhiwise.com/post/writing-clearer-code-with-typescript-pick-comprehensive-guide)
[7](https://zerotomastery.io/blog/typescript-utility-types/)
[8](https://www.geeksforgeeks.org/typescript/typescript-picktype-keys-utility-type/)
[9](https://dev.to/ibrahimbagalwa/understanding-typescript-utility-types-pick-and-omit-38ni)
