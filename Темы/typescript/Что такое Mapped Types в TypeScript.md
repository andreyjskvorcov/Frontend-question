
---

### Что такое Mapped Types в TypeScript?

Mapped Types (отображённые типы) — это способ создавать новые типы на основе существующих, перебирая ключи исходного типа и изменяя для них значения. Это похоже на `map()` для типов: TypeScript проходит по каждому ключу и присваивает новое описание.

---

### Основной синтаксис

```typescript
type NewType = {
  [Key in Union]: Type;
};
```

- `Key` — переменная, представляющая текущий ключ из объединения ключей (union).
- `Type` — тип значения для каждого ключа.
- Можно использовать `keyof`, модификаторы (`?`, `readonly`), а также другие utility-типы (`Pick`, `Partial` и др.).

---

### Примеры использования

#### Пример 1: Копия типа с другими значениями

```typescript
type User = {
  name: string;
  age: number;
};

// Сделать тип, в котором все свойства boolean
type UserPermissions = {
  [K in keyof User]: boolean;
};

// Result:
// { name: boolean; age: boolean }
```

---

#### Пример 2: Все поля опциональные (аналог Partial<T>)

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type User = { name: string; age: number };
type OptionalUser = Optional<User>;

// Result:
// { name?: string; age?: number }
```

---

#### Пример 3: Сделать все поля readonly (аналог Readonly<T>)

```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// Аналогично стандартному Readonly<T>
```

---

#### Пример 4: Убрать readonly

```typescript
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Убирает только readonly-модификатор
```

---

### Где используются Mapped Types?

- Для создания utility-типа, таких как `Partial`, `Pick`, `Readonly`, `Record`.
- Для генерации динамических типов с известными ключами.
- Для автоматического преобразования типа объекта.
- В крупных проектах с API, GraphQL, формами для интуитивного управления типами.

---

Если нужны примеры расширенного использования Mapped Types с generics и в React/Vue — могу подготовить. Хотите?Вот дополнение к твоему вопросу и ответу про Mapped Types в TypeScript — структурированное объяснение с примерами и рекомендациями:

---

### Что такое Mapped Types в TypeScript?

Mapped Types (отображённые типы) — это способ создавать новые типы на основе существующих, перебирая ключи исходного типа и изменяя для них значения. Это похоже на `map()` для типов: TypeScript проходит по каждому ключу и присваивает новое описание.

---

### Основной синтаксис

```typescript
type NewType = {
  [Key in Union]: Type;
};
```

- `Key` — переменная, представляющая текущий ключ из объединения ключей (union).
- `Type` — тип значения для каждого ключа.
- Можно использовать `keyof`, модификаторы (`?`, `readonly`), а также другие utility-типы (`Pick`, `Partial` и др.).

---

### Примеры использования

#### Пример 1: Копия типа с другими значениями

```typescript
type User = {
  name: string;
  age: number;
};

// Сделать тип, в котором все свойства boolean
type UserPermissions = {
  [K in keyof User]: boolean;
};

// Result:
// { name: boolean; age: boolean }
```

---

#### Пример 2: Все поля опциональные (аналог Partial<T>)

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type User = { name: string; age: number };
type OptionalUser = Optional<User>;

// Result:
// { name?: string; age?: number }
```

---

#### Пример 3: Сделать все поля readonly (аналог Readonly<T>)

```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// Аналогично стандартному Readonly<T>
```

---

#### Пример 4: Убрать readonly

```typescript
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Убирает только readonly-модификатор
```

---

### Где используются Mapped Types?

- Для создания utility-типа, таких как `Partial`, `Pick`, `Readonly`, `Record`.
- Для генерации динамических типов с известными ключами.
- Для автоматического преобразования типа объекта.
- В крупных проектах с API, GraphQL, формами для интуитивного управления типами.

---

Если нужны примеры расширенного использования Mapped Types с generics и в React/Vue — могу подготовить. Хотите?

[1](https://www.hackfrontend.com/docs/typescript/mapped-types)
[2](https://habr.com/ru/companies/timeweb/articles/682748/)
[3](https://code-basics.com/ru/languages/typescript/lessons/mapped-types)
[4](https://www.youtube.com/watch?v=y1bp3hdHLpE)
[5](https://scriptdev.ru/guide/042/)
[6](https://zerotomastery.io/blog/typescript-mapped-types/)
[7](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
[8](https://qna.habr.com/q/1292882)
[9](https://www.youtube.com/watch?v=pHTtgDuPWYg)
