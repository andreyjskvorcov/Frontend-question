
---

### Что такое Extract в TypeScript?

`Extract` — utility тип, который позволяет **извлечь из union-типа только те члены, которые совместимы с другим указанным типом**. По сути, создаётся новый union, состоящий только из «пересекающихся» типов.

---

### Синтаксис

```typescript
Extract<T, U>;
```

- `T` — исходный union-тип.
- `U` — тип (или union типов), которые нужно оставить в `T`.

---

### Когда использовать Extract?

- Чтобы выделить из union допустимые значения (например, ошибки из списка всех ответов API).
- Для фильтрации по ролям и правам доступа.
- Для оптимизации и упрощения union-типов.
- Чтобы сузить набор значений для использования в дженериках.

---

### Пример 1: Извлечение чисел и булевых значений

```typescript
type Mixed = string | number | boolean;

// Извлекаем только number и boolean
type OnlyNumbersOrBooleans = Extract<Mixed, number | boolean>;
// Результат: number | boolean
```

---

### Пример 2: Фильтрация ошибок из API

```typescript
type ApiResponse =
  | { status: 'success'; data: string }
  | { status: 'error'; message: string }
  | null
  | undefined;

// Извлекаем только ошибки
type ErrorResponse = Extract<ApiResponse, { status: 'error' }>;

function handleError(response: ApiResponse) {
  if (response && response.status === 'error') {
    console.log('Ошибка:', response.message);
  }
}

const res1: ApiResponse = { status: 'success', data: 'OK' };
const res2: ApiResponse = { status: 'error', message: 'Ошибка запроса' };

handleError(res1); // Ничего не выводит
handleError(res2); // Вывод: "Ошибка: Ошибка запроса"
```

---

### Отличие от Exclude

| Утилита         | Описание                                       |
| --------------- | ---------------------------------------------- |
| `Exclude<T, U>` | Убирает из `T` все типы, совместимые с `U`     |
| `Extract<T, U>` | Оставляет в `T` только типы, совместимые с `U` |

---

### Итог

- `Extract` позволяет сузить union-типы, оставив только нужные варианты.
- Полезен при работе с условиями, фильтрацией и API.
- Часто используется вместе с `Exclude` и другими utility типами для более точной настройки типов.

---

Если нужно, могу добавить примеры использования Extract с React/Vue + TypeScript или более продвинутые сценарии. Хотите?Вот дополнение к твоему вопросу и ответу про utility тип Extract в TypeScript — структурированное объяснение с примерами и рекомендациями:

---

### Что такое Extract в TypeScript?

`Extract` — utility тип, который позволяет **извлечь из union-типа только те члены, которые совместимы с другим указанным типом**. По сути, создаётся новый union, состоящий только из «пересекающихся» типов.

---

### Синтаксис

```typescript
Extract<T, U>;
```

- `T` — исходный union-тип.
- `U` — тип (или union типов), которые нужно оставить в `T`.

---

### Когда использовать Extract?

- Чтобы выделить из union допустимые значения (например, ошибки из списка всех ответов API).
- Для фильтрации по ролям и правам доступа.
- Для оптимизации и упрощения union-типов.
- Чтобы сузить набор значений для использования в дженериках.

---

### Пример 1: Извлечение чисел и булевых значений

```typescript
type Mixed = string | number | boolean;

// Извлекаем только number и boolean
type OnlyNumbersOrBooleans = Extract<Mixed, number | boolean>;
// Результат: number | boolean
```

---

### Пример 2: Фильтрация ошибок из API

```typescript
type ApiResponse =
  | { status: 'success'; data: string }
  | { status: 'error'; message: string }
  | null
  | undefined;

// Извлекаем только ошибки
type ErrorResponse = Extract<ApiResponse, { status: 'error' }>;

function handleError(response: ApiResponse) {
  if (response && response.status === 'error') {
    console.log('Ошибка:', response.message);
  }
}

const res1: ApiResponse = { status: 'success', data: 'OK' };
const res2: ApiResponse = { status: 'error', message: 'Ошибка запроса' };

handleError(res1); // Ничего не выводит
handleError(res2); // Вывод: "Ошибка: Ошибка запроса"
```

---

### Отличие от Exclude

| Утилита         | Описание                                       |
| --------------- | ---------------------------------------------- |
| `Exclude<T, U>` | Убирает из `T` все типы, совместимые с `U`     |
| `Extract<T, U>` | Оставляет в `T` только типы, совместимые с `U` |

---

### Итог

- `Extract` позволяет сузить union-типы, оставив только нужные варианты.
- Полезен при работе с условиями, фильтрацией и API.
- Часто используется вместе с `Exclude` и другими utility типами для более точной настройки типов.

---

Если нужно, могу добавить примеры использования Extract с React/Vue + TypeScript или более продвинутые сценарии. Хотите?

[1](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[2](https://dev.to/arafat4693/best-ways-to-use-extract-in-typescript-jc2)
[3](https://mimo.org/glossary/typescript/extract-type)
[4](https://www.geeksforgeeks.org/typescript/typescript-extracttype-union-utility-type/)
[5](https://www.appshref.com/article/mastering-typescripts-extract-utility-type)
[6](https://www.reddit.com/r/typescript/comments/zi0rzu/how_does_the_extract_utility_type_work_the/)
[7](https://zerotomastery.io/blog/typescript-utility-types/)
[8](https://stackoverflow.com/questions/74571787/typescript-utility-type-to-extract-properties-from-an-interface-having-a-specifi)
[9](https://www.contentful.com/blog/guide-typescript-utility-types/)
