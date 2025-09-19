
---

### Что такое `infer` в TypeScript?

`infer` — ключевое слово, используемое внутри **условных типов** (conditional types) для **вывода типов** автоматически на основе структуры другого типа. Оно помогает сделать код более гибким и избежать дублирования типов, автоматически извлекая нужный тип из передаваемого.

---

### Как работает `infer`?

`infer` позволяет определить временный тип-переменную внутри условного типа, который TypeScript затем выводит из соответствующего типа, если условие выполняется.

---

### Пример: вывод типа возвращаемого значения функции

```typescript
type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function getString(): string {
  return 'Hello, world!';
}

type Result = ReturnTypeOfFunction<typeof getString>; // string
```

- Здесь `ReturnTypeOfFunction<T>` — условный тип, проверяющий, является ли `T` функцией.
- Если да, то благодаря `infer R` извлекается тип возвращаемого значения.
- Тип `Result` становится типом возвращаемого значения функции (`string`).

---

### Пример: получение типа элементов массива

```typescript
type ElementType<T> = T extends (infer U)[] ? U : never;

const numbers: number[] = [1, 2, 3];
type NumberType = ElementType<typeof numbers>; // number
```

- Тип `ElementType<T>` проверяет, является ли `T` массивом.
- Если да, `infer U` извлекает тип элементов массива.
- В примере `NumberType` равен `number`.

---

### Условное использование в более сложных типах

Пример работы с Promise:

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type ResolvedType = UnwrapPromise<Promise<string>>; // string
type NonPromiseType = UnwrapPromise<number>; // number
```

- Если `T` — Promise, `infer U` извлекает тип результата Promise.
- Если `T` не Promise, возвращается исходный тип.

---

### Когда использовать `infer`?

- Для извлечения типов из функций, объектов, массивов, Promise и других сложных структур.
- Для создания универсальных, адаптивных типов без повторения.
- Чтобы повысить гибкость и безопасность кода.

---

### Рекомендация

Используйте `infer` в условных типах для повышения гибкости и для избежания дублирования при работе с комплексными типами и логикой.

---

Если нужны примеры расширенного использования `infer` или интеграции с React/Vue проектами — могу подготовить. Хотите?

[1](https://www.hackfrontend.com/docs/typescript/infer)
[2](https://habr.com/ru/articles/778190/)
[3](https://habr.com/ru/companies/bimeister/articles/659041/)
[4](https://www.reddit.com/r/typescript/comments/msr4vk/can_someone_explain_the_purpose_of_infer_keyword/)
[5](https://temofeev.ru/info/articles/vyvod-tipov-v-typescript-s-ispolzovaniem-konstruktsii-as-const-i-klyuchevogo-slova-infer/)
[6](https://ya.ru/neurum/c/nauka-i-obrazovanie/q/kak_rabotaet_operator_infer_v_typescript_dlya_1149a10a)
[7](https://www.devsurge.ru/posts/typescript-conditional-types)
[8](https://setka.ru/posts/0195be75-5605-46b4-8180-e3b994f1f503)
[9](https://nuancesprog.ru/p/16902/)
[10](https://purpleschool.ru/knowledge-base/article/conditional-types)
