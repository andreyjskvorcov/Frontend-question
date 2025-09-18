**componentDynamic** в Nuxt (и Vue в целом) — это возможность динамически рендерить разные компоненты в одном месте шаблона в зависимости от текущего состояния данных или пользовательских действий. Это реализуется через специальный элемент `<component :is="...">`, которому можно передать имя компонента или сам объект компонента[1][3][6].

---

### Что такое Dynamic Components

Dynamic Components позволяют переключаться между несколькими компонентами, изменяя их без перезагрузки или изменения маршрута. Это удобно при построении табов, виджетов, пейджингов или сложных интерфейсов с вариативным отображением[1].

---

### Основной синтаксис

```vue
<component :is="currentComponent" />
```

`currentComponent` может быть строкой с именем компонента, импортированным объектом Vue-компонента или даже тэгом HTML.

---

### Примеры использования

#### 1. Переключение между двумя компонентами

```vue
<script setup>
import MyList from '~/components/MyList.vue';
import MyGrid from '~/components/MyGrid.vue';

const currentComponent = ref('MyList');

function toggleView() {
  currentComponent.value =
    currentComponent.value === 'MyList' ? 'MyGrid' : 'MyList';
}
</script>

<template>
  <button @click="toggleView">Переключить вид</button>
  <component :is="currentComponent" />
</template>
```

Здесь по кнопке меняется отображаемый компонент между списком и сеткой[1][3].

#### 2. Использование динамического компонента с импортом

```vue
<script setup>
import SomeComponent from '#components/SomeComponent.vue';
const current = ref(SomeComponent);
</script>

<template>
  <component :is="current" />
</template>
```

Так гарантируется, что динамический компонент будет корректно импортирован и отрендерен[3][5].

#### 3. Встраивание базовых HTML тегов динамически

```vue
<script setup>
const tag = ref('h1');
</script>

<template>
  <component :is="tag">Это заголовок</component>
</template>
```

Можно динамически менять и базовые HTML элементы, например, `h1` или `div`[5].

---

### Особенности

- Компонент, заданный в `is`, может быть реактивным значением.
- Nuxt по умолчанию автоимпортирует компоненты, но для использования динамических компонентов их нужно импортировать вручную для гарантированной поддержки[3][5].
- При использовании динамического компонента можно показывать fallback (placeholder), пока загружается асинхронный компонент (Vue Async Components)[4].
- Можно использовать динамические компоненты для гибких UI с минимальным количеством условий и кода[1][6].

---

**Итог:**  
componentDynamic — мощный подход для динамического контроля отображения компонентов в Nuxt и Vue, позволяющий легко переключать части интерфейса, управлять сложными сценариями и создавать динамичные, реактивные пользовательские интерфейсы[1][3][5].**componentDynamic** в Nuxt (и Vue.js) — это возможность динамически рендерить различные компоненты в одном месте шаблона, выбирая их по текущему состоянию данных или пользовательским действиям. Для этого используется встроенный `<component :is="...">` с передачей имени или объекта компонента[1][3].

---

### Что такое динамические компоненты

Это способ переключать отображаемый компонент без изменения маршрута или перезагрузки, что удобно для табов, виджетов, редакторов, сложных интерфейсов с несколькими отображениями одного и того же блока[1].

---

### Базовый синтаксис

```vue
<component :is="currentComponent" />
```

`currentComponent` может быть строкой с именем компонента, импортом компонента или тегом HTML элемента.

---

### Примеры использования

#### 1. Переключение между двумя компонентами

```vue
<script setup>
import MyList from '~/components/MyList.vue';
import MyGrid from '~/components/MyGrid.vue';

const currentComponent = ref('MyList');

function toggleView() {
  currentComponent.value =
    currentComponent.value === 'MyList' ? 'MyGrid' : 'MyList';
}
</script>

<template>
  <button @click="toggleView">Переключить вид</button>
  <component :is="currentComponent" />
</template>
```

#### 2. Импорт и рендер динамического компонента

```vue
<script setup>
import SomeComponent from '#components/SomeComponent.vue';
const current = ref(SomeComponent);
</script>

<template>
  <component :is="current" />
</template>
```

#### 3. Динамический HTML тег

```vue
<script setup>
const tag = ref('h1');
</script>

<template>
  <component :is="tag">Заголовок</component>
</template>
```

---

### Особенности

- Для динамических компонентов обычно требуется явный импорт.
- Можно показывать загрузочные плейсхолдеры для асинхронных компонентов.
- Позволяет создавать гибкие, реактивные интерфейсы с минимальным кодом.

---

componentDynamic — ключевой подход Vue/Nuxt для динамического управления отображением компонентов и построения интерактивных UI[1][3][5].

Источники
[1] Работа с динамическими компонентами и данными в Vue https://purpleschool.ru/knowledge-base/article/dynamic
[2] Nuxt: Интуитивно понятный фреймворк Vue · Nuxt https://nuxt-ru.vercel.app
[3] components · Nuxt Directory Structure v4 https://nuxt.com/docs/guide/directory-structure/components
[4] Асинхронные компоненты https://ru.vuejs.org/guide/components/async.html
[5] Dynamic use of components in Nuxt requires manual imports https://www.leopold.is/blog/dynamic-component-use-in-nuxt-requires-imports/
[6] Guide to Dynamic Component Usage in Vue.js and Nuxt https://dev.to/webcraft-notes/guide-to-dynamic-component-usage-in-vuejs-and-nuxt-c5m
[7] Режимы рендеринга · Концепции Nuxt - Vercel https://nuxt-ru.vercel.app/docs/guide/concepts/rendering
[8] Как использовать Nuxt с динамическими маршрутами ... https://www.reddit.com/r/Nuxt/comments/ld5ukq/how_to_use_nuxt_with_dynamic_routes_without/
[9] Отображение рендеринг динамических компонентов на ... https://qna.habr.com/q/1324860
[10] Как создать динамический базовый маршрут? : r/Nuxt https://www.reddit.com/r/Nuxt/comments/m9vfqw/how_to_create_dynamic_base_route/
