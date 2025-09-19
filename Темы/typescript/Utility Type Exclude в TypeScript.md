
---

### Что такое Exclude в TypeScript?

`Exclude` — utility тип, который позволяет **исключать определённые подтипы из union-типа**. Он создаёт новое объединение типов, убирая те, которые совместимы с указанным исключаемым типом.

---

### Синтаксис

```typescript
Exclude<T, U>;
```

- `T` — исходный union-тип (объединение типов).
- `U` — подтипы (или union подтипов), которые нужно исключить из `T`.

---

### Когда использовать Exclude?

- Для удаления `null` и `undefined` из типовых объединений, чтобы не делать лишних проверок.
- Для фильтрации опциональных полей в union-типах.
- При работе с API, когда нужно убрать нежелательные варианты из ответов.
- Для оптимизации и упрощения union-типов.

---

### Пример 1: Исключение подтипов из объединения

```typescript
type Mixed = string | number | boolean;

// Исключаем number и boolean
type OnlyStrings = Exclude<Mixed, number | boolean>;
// Только string
```

---

### Пример 2: Исключение null и undefined

```typescript
type APIResponse = 'success' | 'error' | null | undefined;

// Убираем null и undefined
type ValidResponse = Exclude<APIResponse, null | undefined>;

function handleResponse(status: ValidResponse) {
  console.log(`Received response: ${status}`);
}

handleResponse('success'); // OK
handleResponse('error'); // OK
handleResponse(null); // Ошибка компиляции
```

---

### Отличие от Extract

| Утилита         | Описание                                       |
| --------------- | ---------------------------------------------- |
| `Exclude<T, U>` | Исключает из `T` все типы, совместимые с `U`   |
| `Extract<T, U>` | Оставляет в `T` только типы, совместимые с `U` |

Пример:

```typescript
type Mixed = string | number | boolean;

type OnlyNumbersOrBooleans = Extract<Mixed, number | boolean>; // number | boolean
type OnlyStrings = Exclude<Mixed, number | boolean>; // string
```

---

### Итог

- `Exclude` упрощает управление union-типами, удаляя ненужные варианты.
- Полезен совместно с `Extract`, `NonNullable` и другими utility типами для тонкой настройки типов.

---

Если нужны расширенные примеры или интеграция с React/Vue и TypeScript — могу подготовить. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://mimo.org/glossary/typescript/exclude-type)
[3](https://www.totaltypescript.com/uses-for-exclude-type-helper)
[4](https://www.geeksforgeeks.org/typescript/typescript-excludeuniontype-excludedmembers-utility-type/)
[5](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-exclude)
[6](https://graphite.dev/guides/typescript-omit-utility-type)
[7](https://stackoverflow.com/questions/69994553/how-can-i-create-a-strict-exclude-utility-type)
[8](https://dev.to/rushi-patel/utility-types-in-typescript-a-detailed-explanation-2m9p)
