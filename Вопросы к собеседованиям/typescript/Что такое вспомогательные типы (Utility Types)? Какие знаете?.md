Вспомогательные типы (Utility Types) в TypeScript — это встроенные типы, которые позволяют трансформировать, модифицировать и работать с другими типами для удобства и безопасности типизации. Они помогают создавать новые типы на основе уже существующих без повторного описания.[1][3][6]

---

### Основные вспомогательные типы в TypeScript

| Тип                | Описание                                                   | Пример использования                                              |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------- |
| **Partial<T>**     | Делает все свойства типа необязательными                   | `Partial<{name: string, age: number}>` — все свойства опциональны |
| **Required<T>**    | Делает все свойства типа обязательными                     | `Required<{name?: string}>` — делает `name` обязательным          |
| **Readonly<T>**    | Делает все свойства типа доступными только для чтения      | `Readonly<{name: string}>` — свойства нельзя изменить             |
| **Pick<T, K>**     | Выбирает указанное подмножество свойств из типа            | `Pick<{name: string, age: number}, 'name'>` — только `name`       |
| **Omit<T, K>**     | Исключает указанные свойства из типа                       | `Omit<{name: string, age: number}, 'age'>` — без `age`            |
| **Record<K, T>**   | Создаёт тип объекта с ключами из `K` и значениями типа `T` | `Record<'a'                                                       | 'b', number>`— объект с ключами`a`, `b` типа number |
| **Exclude<T, U>**  | Исключает из типа `T` типы, совместимые с `U`              | `Exclude<string                                                   | number, string>`— только`number`                    |
| **Extract<T, U>**  | Извлекает из `T` типы, совместимые с `U`                   | `Extract<string                                                   | number, string>`— только`string`                    |
| **NonNullable<T>** | Убирает `null` и `undefined` из типа                       | `NonNullable<string                                               | null>`— только`string`                              |
| **ReturnType<T>**  | Получает тип возвращаемого значения функции                | `ReturnType<() => string>` — `string`                             |
| **Parameters<T>**  | Получает типы параметров функции в виде кортежа            | `Parameters<(x: number, y: string) => void>` — `[number, string]` |

---

### Пример использования Partial

```ts
interface User {
  name: string;
  age: number;
}

const updateUser = (user: Partial<User>) => {
  // можно передавать частичные данные для обновления
};
```

---

### Итог

Вспомогательные типы — мощный инструмент TypeScript, который улучшает удобство работы с типами, помогает писать более гибкий и безопасный код без дублирования.[3][6][1]

[1](https://habr.com/ru/articles/711686/)
[2](https://ru.vuejs.org/api/utility-types.html)
[3](https://my-js.org/docs/cheatsheet/ts)
[4](https://habr.com/ru/companies/timeweb/articles/906842/)
[5](https://www.youtube.com/watch?v=mQ5WzR99WSg)
[6](https://dev-gang.ru/article/-objazatelnyh-tipov-utilit-typescript-s-ispolzovaniem-i-primerami-msch7liqoh/)
[7](https://my-js.org/docs/cheatsheet/mastering-ts)
[8](https://kz.hexlet.io/blog/posts/sistema-tipov-v-typescript)
[9](https://code-basics.com/ru/languages/typescript/lessons/mapped-types)
[10](https://scriptdev.ru/book/types/moving-types/)
