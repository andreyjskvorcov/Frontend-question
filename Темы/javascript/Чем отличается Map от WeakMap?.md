### Основные отличия Map и WeakMap

- **Ссылки на ключи:**

  - Map — хранит **сильные ссылки** на ключи (объекты и примитивы), ключи не удалятся из памяти, пока есть ссылка.
  - WeakMap — хранит **слабые ссылки** только на **объекты** в качестве ключей, если объект больше не используется в другом месте, он автоматически удаляется сборщиком мусора из WeakMap.

- **Типы ключей:**

  - Map — ключи могут быть любого типа (примитивы, объекты).
  - WeakMap — только объекты.

- **Итерация:**

  - Map поддерживает методы `.keys()`, `.values()`, `.entries()` для перебора.
  - WeakMap не поддерживает итерацию и не имеет доступа к размеру, так как ключи могут автоматически удаляться.

- **Размер:**

  - Map имеет свойство `.size`.
  - У WeakMap нет свойства `.size`.

- **Методы:**
  - Map: `.set()`, `.get()`, `.has()`, `.delete()`, `.clear()`, плюс итераторы.
  - WeakMap: `.set()`, `.get()`, `.has()`, `.delete()`.

---

### Примеры кода

#### JS

```js
const map = new Map();
const objKey = { id: 1 };

map.set(objKey, "Значение");
console.log(map.get(objKey)); // "Значение"

const weakMap = new WeakMap();
weakMap.set(objKey, "Значение WeakMap");

console.log(weakMap.get(objKey)); // "Значение WeakMap"

objKey = null; // Теперь объект удалится из WeakMap, из Map — нет
```

---

#### Vue 3

```vue
<script setup>
import { reactive } from "vue";

const map = reactive(new Map());
const weakMap = new WeakMap();

const user = reactive({ name: "Anna" });

map.set(user, "Data Map");
weakMap.set(user, "Data WeakMap");

console.log(map.get(user)); // Data Map
console.log(weakMap.get(user)); // Data WeakMap

// При удалении ссылки user из слабой карты значение будет автоматически удалено
</script>
```

---

#### React

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [user] = useState({ name: "John" });
  const map = new Map();
  const weakMap = new WeakMap();

  map.set(user, "Data Map");
  weakMap.set(user, "Data WeakMap");

  return (
    <div>
      <p>Map: {map.get(user)}</p>
      <p>WeakMap: {weakMap.get(user)}</p>
    </div>
  );
}
```

---

#### Nuxt 3 (Composition API)

```vue
<script setup>
import { reactive } from "vue";

const user = reactive({ name: "Mila" });

const map = new Map();
const weakMap = new WeakMap();

map.set(user, "Info in Map");
weakMap.set(user, "Info in WeakMap");

// Можно использовать вывода или логику с этими значениями
</script>

<template>
  <div>
    <p>{{ map.get(user) }}</p>
    <p>{{ weakMap.get(user) }}</p>
  </div>
</template>
```

---

### Итого

- Используйте **Map**, когда нужно хранить пары ключ-значение с любыми ключами и важно перебор ключей.
- Используйте **WeakMap**, когда ключами являются объекты, и важно, чтобы они автоматически освобождались сборщиком мусора при отсутствии других ссылок.

Это удобно, например, для хранения приватных данных, кэширования или вспомогательной информации, связанной с DOM-элементами или объектами, чтобы не создавать утечки памяти.

Дополняю примерами реального использования WeakMap в Vue, Nuxt и React, чтобы показать практическую пользу этой структуры в приложениях.

---

### WeakMap в реальных приложениях

#### Vue 3 — пример использования WeakMap для хранения приватных данных компонента

```vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const privateData = new WeakMap();

const instance = ref(null);

onMounted(() => {
  privateData.set(instance.value, { timerId: null });

  privateData.get(instance.value).timerId = setInterval(() => {
    console.log("Таймер работает");
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(privateData.get(instance.value).timerId);
  privateData.delete(instance.value);
});
</script>

<template>
  <div ref="instance">Таймер с приватными данными</div>
</template>
```

Здесь для DOM-элемента хранится приватный таймер через WeakMap, значение автоматически очищается при удалении элемента и сбрасывает утечки памяти.

---

#### Nuxt 3 — WeakMap для кэша данных, связанных с сессиями или пользователями

```js
// server/utils/sessionCache.js
const sessionCache = new WeakMap();

export function setSessionData(session, data) {
  sessionCache.set(session, data);
}

export function getSessionData(session) {
  return sessionCache.get(session);
}
```

Это позволяет кэшировать данные, связанные с объектами сессий, не мешая сборщику мусора освобождать память при завершении сессии.

---

#### React — WeakMap для хранение приватного состояния вне React state

```jsx
import { useEffect, useRef } from "react";

const privateData = new WeakMap();

function TimerComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    privateData.set(divRef.current, { timerId: null });
    const timerId = setInterval(() => console.log("Тик"), 1000);
    privateData.get(divRef.current).timerId = timerId;

    return () => {
      clearInterval(privateData.get(divRef.current).timerId);
      privateData.delete(divRef.current);
    };
  }, []);

  return <div ref={divRef}>Таймер в React</div>;
}
```

Использование WeakMap помогает аккуратно привязывать вспомогательные данные к DOM-узлам, не мешая работе React и исключая утечки памяти.

---

### Итог

WeakMap отлично подходит для:

- Приватного хранения данных, связанных с объектами (DOM, сессии, компоненты)
- Автоматического управления памятью без явного удаления
- Использования в кэшах и ассоциациях, где важно отсутствие утечек памяти

В Vue/Nuxt и React это удобно для тесной интеграции с жизненным циклом компонентов и DOM-элементами.


[1](https://learn.javascript.ru/set-map)
[2](https://qna.habr.com/q/752911)
[3](https://learn.javascript.ru/weakmap-weakset)
[4](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Keyed_collections)
[5](https://purpleschool.ru/knowledge-base/article/collection-weakmap)
[6](https://www.hackfrontend.com/docs/javascript/set-map-weak-set-weak-map)
[7](https://ya.ru/neurum/c/nauka-i-obrazovanie/q/js___v_chem_raznica_mezhdu_obektami_map_i_weakmap_faf80294)
[8](https://www.youtube.com/watch?v=mbcP3Oc0PjU)
