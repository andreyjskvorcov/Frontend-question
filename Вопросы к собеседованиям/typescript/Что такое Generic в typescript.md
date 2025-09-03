Generics (обобщённые типы) в TypeScript — это механизм, позволяющий создавать универсальные компоненты: функции, классы и интерфейсы, которые могут работать с разными типами данных, при этом сохраняют строгую типовую безопасность. Generics похожи на шаблоны в других языках программирования.

---

### Что такое Generics?

Generics дают возможность писать код, где типы не фиксированы заранее, а задаются в момент использования. Это повышает гибкость и повторное использование кода без потери информации о типах.

---

### Зачем нужны Generics?

- Позволяют создавать универсальные функции и классы, которые работают с любыми типами.
- Избавляют от дублирования кода для разных типов.
- Обеспечивают строгую проверку типов во время компиляции.
- Позволяют избежать использования типа `any`, сохраняя безопасность типов.

---

### Синтаксис

Объявление generic-параметра делается через угловые скобки `<T>` при определении функции, класса или интерфейса.

---

### Пример: Обобщённая функция

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello"); // output1 тип string
let output2 = identity<number>(100); // output2 тип number
```

Здесь `<T>` — параметр типа, похожий на переменную для типа. При вызове функции можно явно указать тип или позволить TypeScript вывести его автоматически.

---

### Пример: Обобщённый интерфейс

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

---

### Пример: Обобщённый класс

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

---

### Несколько generic-параметров

Можно использовать несколько параметров типа:

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const p = pair<number, string>(1, "hello");
```

---

### Автоматический вывод типа

TypeScript может автоматически вывести типы, основываясь на аргументах:

```ts
let output = identity("text"); // автоматический вывод типа string
```

---

### Обобщённые типы в массивах

Тип массива с generic — `Array<T>`:

```ts
let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["a", "b"];
```

---

### Итог

Generics — мощный инструмент TypeScript для написания гибкого, повторно используемого и безопасного с точки зрения типов кода, который может работать с разными типами данных, не теряя информации о них.

---

Если нужен конкретный пример или разбор более сложных сценариев — могу рассказать подробнее.[4][5][6][7][8]

[1](https://habr.com/ru/articles/805127/)
[2](https://habr.com/ru/companies/tbank/articles/588655/)
[3](https://htmlacademy.ru/blog/js/typescript-generic)
[4](https://purpleschool.ru/knowledge-base/article/generics)
[5](https://www.hackfrontend.com/docs/typescript/generic)
[6](https://gitverse.ru/blog/articles/development/783-dlya-chego-ispolzovat-dzheneriki-v-typescript)
[7](https://race-timo.gitbook.io/typescript/generics)
[8](https://code-basics.com/ru/languages/typescript/lessons/generic-types)
[9](https://scriptdev.ru/guide/032/)
[10](https://www.youtube.com/watch?v=k16Hgi753XQ)

---

Добавлю примеры использования generics с TypeScript для React и Vue, чтобы показать, как обобщённые типы помогают создавать гибкие и типобезопасные компоненты.

---

## React + TypeScript: Generic компонент

Создадим универсальный компонент, который принимает список элементов и отображает их, параметризуя тип элементов через generic:

```tsx
import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Использование с массивом строк
const stringList = (
  <List items={["apple", "banana"]} renderItem={(item) => item.toUpperCase()} />
);

// Использование с массивом объектов
type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const userList = (
  <List items={users} renderItem={(user) => <strong>{user.name}</strong>} />
);
```

Здесь `List` универсален и может отображать любой тип элементов, сохраняя типизацию.

---

## Vue 3 + TypeScript: Generic компонент

Vue 3 с Composition API и TypeScript позволяет использовать generics в компонентах, например, при определении пропсов.

Пример универсального списка:

```ts
<script lang="ts" setup>
import { defineProps } from "vue";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => any;
}

const props = defineProps<ListProps<any>>(); // можно заменить any на generic в расширенных сценариях
</script>

<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="index">
      {{ props.renderItem(item) }}
    </li>
  </ul>
</template>
```

Для более точной generic-типизации можно создать вспомогательные типы с помощью `withDefaults` и расширенных техник, но базовый пример демонстрирует основу.

---

## Зачем generics в React и Vue?

- Позволяют компоненты быть максимально универсальными.
- Сохраняют строгую типизацию, что уменьшает ошибки при передаче пропсов.
- Поддерживают повторное использование с разными типами данных.

---

### Итог

Generics в TypeScript — это очень мощный инструмент не только для бизнес-логики, но и для типизации компонентов в React и Vue, делая код гибким и безопасным.[1][2]

[1](https://purpleschool.ru/knowledge-base/article/generics)
[2](https://www.hackfrontend.com/docs/typescript/generic)
