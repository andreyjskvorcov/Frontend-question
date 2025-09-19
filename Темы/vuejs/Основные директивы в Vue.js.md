
---

# Основные директивы в Vue.js

Vue.js использует директивы — специальные атрибуты, которые управляют поведением элементов DOM. Директивы начинаются с префикса `v-` и позволяют динамически изменять разметку, управлять событиями, связывать данные и многое другое.

---

## v-if / v-else / v-else-if

Условное отображение элементов в зависимости от состояния.

```vue
<template>
  <p v-if="isLoggedIn">Добро пожаловать!</p>
  <p v-else>Пожалуйста, войдите в систему.</p>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
</script>
```

- `v-if` отрисовывает элемент, если условие истинно.
- `v-else` отрисовывает элемент, если условие `v-if` ложно.

---

## v-for

Позволяет динамически отрисовывать элементы на основе массива или объекта.

```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(['Яблоко', 'Банан', 'Апельсин']);
</script>
```

- Перебирает массив `items` и создаёт элемент для каждого значения.
- Атрибут `:key` помогает Vue оптимально обновлять список.

---

## v-bind

Динамическое связывание атрибутов элемента с данными.

```vue
<template>
  <img v-bind:src="imageUrl" alt="Картинка" />
</template>
```

- Можно сокращать синтаксис: вместо `v-bind:src` писать `:src`.

---

## v-model

Двунаправленное связывание данных с элементами форм.

```vue
<template>
  <input v-model="text" placeholder="Введите текст" />
  <p>Вы ввели: {{ text }}</p>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
</script>
```

- Автоматически обновляет связанную переменную при изменении ввода.
- Для объектов и массивов лучше использовать копии, чтобы избежать неожиданностей.

---

## v-on

Добавление обработчиков событий.

```vue
<template>
  <button v-on:click="sayHello">Нажми меня</button>
</template>

<script setup>
const sayHello = () => {
  alert('Привет, мир!');
};
</script>
```

- Сокращение: `@click="sayHello"` вместо `v-on:click="sayHello"`.

---

## v-show

Контролирует видимость элемента через CSS `display: none`, не удаляя элемент из DOM.

```vue
<template>
  <p v-show="isVisible">Этот текст можно скрыть.</p>
</template>
```

- Элемент скрывается или показывается без удаления из DOM.
- Используйте `v-show`, если нужно часто переключать видимость, иначе лучше `v-if`.

---

## Итог

Директивы Vue.js — мощный инструмент для управления разметкой и поведением элементов на странице. Они делают код более чистым и удобным, позволяют легко управлять отображением, событиями и связью данных.

---

Источник: [Основные директивы Vue.js — hackfrontend](https://www.hackfrontend.com/docs/vue/main-directives)

[1](https://ru.vuejs.org/api/built-in-directives)
[2](https://ru.vuejs.org/guide/reusability/custom-directives.html)
[3](https://webdevnet.ru/razbiraem-directivy-vue-js/)
[4](https://purpleschool.ru/knowledge-base/article/directives)
[5](https://purpleschool.ru/knowledge-base/article/directives-extended)
[6](https://foxminded.ua/ru/direktivi-vue/)
[7](https://solvit.space/roadmaps/17/topics/13/units/35)
[8](https://fructcode.com/ru/blog/vuejs-what-is-v-for-directive/)
[9](https://webhamster.ru/mytetrashare/index/mtb339/1519455766me6isn23ve)
[10](https://unetway.com/tutorial/polzovatelskie-direktivy)
