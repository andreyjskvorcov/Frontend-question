
---

### Оператор `keyof` в TypeScript

- `keyof` — оператор типа, который извлекает ключи объекта в виде объединения строковых или числовых литералов.
- Позволяет работать с набором ключей объекта как с типом.
- Помогает ограничить переменные и параметры функциями только существующими ключами объекта.

**Пример:**

```typescript
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "email"

let key: PersonKeys;

key = 'name'; // допустимо
key = 'age'; // допустимо
key = 'address'; // ошибка, такого ключа нет
```

---

### Оператор `typeof` в TypeScript

- `typeof` в TypeScript используется для извлечения типа из значения или переменной.
- Позволяет создавать типы на основе существующих данных без повторения описания.

**Пример:**

```typescript
let person = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

type PersonType = typeof person;
// PersonType будет: { name: string; age: number; email: string }
```

---

### Совместное использование `keyof` и `typeof`

Часто эти операторы используются вместе для более гибкой типизации.

**Пример:**

```typescript
const person = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

type PersonKeys = keyof typeof person; // "name" | "age" | "email"

let key: PersonKeys;
key = 'name'; // допустимо
key = 'email'; // допустимо
key = 'address'; // ошибка, такого ключа нет
```

- Здесь `typeof person` выводит тип объекта `person`.
- `keyof` извлекает ключи этого типа.

---

### Рекомендации

- Используйте `keyof` для безопасной работы с ключами объектов.
- Используйте `typeof` для динамического извлечения типов из значений, что избегает дублирования и помогает в поддержке кода.

---

Если нужны примеры практического применения в React/Vue проектах или сочетающиеся с другими типами — могу подготовить. Хотите?

[1](https://purpleschool.ru/knowledge-base/article/keyof-type-manipulation)
[2](https://www.youtube.com/watch?v=cVSo2lxfw54)
[3](https://scriptdev.ru/guide/042/)
[4](https://www.youtube.com/watch?v=Jrri9_-lkmc)
[5](https://habr.com/ru/companies/macloud/articles/562786/)
[6](https://purpleschool.ru/knowledge-base/article/typeof-type-operator)
[7](https://ru.hexlet.io/courses/typescript-advanced/lessons/mapped-types/theory_unit)
[8](https://code-basics.com/ru/languages/typescript/lessons/mapped-types)
[9](https://qna.habr.com/q/1308258)
[10](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
