
---

### Что такое Readonly в TypeScript?

`Readonly` — utility тип, который делает все свойства типа **только для чтения** (read-only). Это значит, что после создания объекта его свойства нельзя изменить, что помогает избегать непреднамеренных мутаций.

---

### Синтаксис

```typescript
Readonly<T>;
```

- `T` — исходный тип объекта.
- Все свойства типа `T` становятся `readonly`.

---

### Когда использовать Readonly?

- Когда объект не должен изменяться после создания.
- Для константных или конфигурационных объектов.
- При передаче данных в функции, чтобы предотвратить изменение аргументов.

---

### Пример использования Readonly

```typescript
interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: 'Alice',
};

user.name = 'Bob';
// Ошибка: Cannot assign to 'name' because it is a read-only property
```

Здесь `ReadonlyUser` — версия типа `User`, у которой все поля только для чтения.

---

### Пример для конфигураций

```typescript
interface Config {
  readonly port: number; // уже явно readonly
  dbName: string;
}

type FullReadonlyConfig = Readonly<Config>;

const config: FullReadonlyConfig = {
  port: 8080,
  dbName: 'mainDB',
};

config.dbName = 'testDB';
// Ошибка: Cannot assign to 'dbName' because it is a read-only property
```

---

### Использование в функциях

```typescript
function printUser(user: Readonly<User>) {
  // user.id = 42;  // Ошибка
  console.log(user.id, user.name);
}
```

Передача объекта как `Readonly` предотвращает любые изменения внутри функции.

---

### Итог

`Readonly` — удобный способ защитить объект от изменений. При попытке изменить свойство типа `readonly`, TypeScript выдаст ошибку на этапе компиляции, что помогает избежать багов.

---

Если нужно, могу подготовить примеры использования `Readonly` с React или Vue и практическое применение. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://www.geeksforgeeks.org/typescript/typescript-readonly-type-utility-type/)
[3](https://dev.to/rajatkaush1k/12-must-have-typescript-utility-types-with-uses-and-examples-213j)
[4](https://mimo.org/glossary/typescript/readonly-type)
[5](https://dev.to/this-is-learning/typescript-readonly-utility-type-pl6)
[6](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-readonly)
[7](https://www.w3schools.com/typescript/typescript_utility_types.php)
[8](https://www.contentful.com/blog/guide-typescript-utility-types/)
