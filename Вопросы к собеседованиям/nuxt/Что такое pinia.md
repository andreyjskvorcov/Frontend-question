**Pinia** — это современная библиотека управления состоянием для приложений на Vue 3, официально рекомендуемая в качестве замены Vuex. Она предлагает простой и интуитивный API, тесно интегрированный с Composition API Vue, обеспечивая мощное, типобезопасное и масштабируемое решение для глобального состояния приложений[1][2][5].

---

### Что такое Pinia

Pinia — это инструмент для централизованного хранения состояния приложения, где можно хранить общие данные, методы, вычисляемые свойства (getters), действия (actions). В отличие от локального состояния компонентов, Pinia позволяет легко поделиться данными между любыми частями приложения и управлять ими в одном месте[1][2].

---

### Основные преимущества Pinia

- Простота и лаконичность, меньше шаблонного кода (boilerplate).
- Полная интеграция с Vue 3 и Composition API.
- Отличная поддержка TypeScript «из коробки».
- Возможность разделения на несколько модулей-хранилищ.
- Поддержка серверного рендеринга (SSR) и DevTools.
- Расширяемость через плагины и middleware[1][5].

---

### Установка и подключение

```bash
npm install pinia
```

Входной файл (например, `main.js` или `main.ts`):

```js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
```

---

### Пример создания хранилища

```js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

Использование в компоненте:

```vue
<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
counter.increment();
</script>

<template>
  <p>Count: {{ counter.count }}</p>
  <p>Double: {{ counter.double }}</p>
</template>
```

---

### Особенности для SSR и Nuxt

Pinia легко интегрируется с Nuxt 3, поддерживает серверный рендеринг и автоматическую гидрацию состояния между сервером и клиентом[5][2].

---

**Итог:**  
Pinia — удобная, современная и масштабируемая библиотека управления состоянием для Vue 3, обеспечивающая простой API, типобезопасность и продвинутые возможности, идеально подходящая для современных Vue и Nuxt приложений[1][2][5].

Источники
[1] Pinia Vue Что это и зачем нужно? https://webkyrs.info/page/pinia-vue-chto-eto-i-zachem-nuzhno
[2] Pinia vs Vuex: Ананасовый экспресс в светлое будущее https://habr.com/ru/articles/666250/
[3] Для чего и когда использовать Pinia : r/vuejs https://www.reddit.com/r/vuejs/comments/1bojtnt/for_what_and_when_to_use_pinia/
[4] Pinia / Frontend Developer / Карьерный трек https://track.habr.com/frontend/skill/pinia
[5] Подробное руководство по Pinia - Code Lab https://codelab.pro/podrobnoe-rukovodstvo-po-pinia/
[6] Начало работы https://pinia-ru.netlify.app/getting-started
[7] Pinia Vue Что это и зачем нужно? https://www.youtube.com/watch?v=1Dorv4a0wp8
[8] Управление состоянием https://ru.vuejs.org/guide/scaling-up/state-management
[9] Pinia - важная часть Vue?? : r/vuejs https://www.reddit.com/r/vuejs/comments/1ahx9ef/is_pinia_a_important_part_of_vue/
[10] Pinia | Интуитивное хранилище для Vue.js https://pinia-ru.netlify.app
