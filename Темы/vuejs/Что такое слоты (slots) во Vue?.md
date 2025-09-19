
---

# Что такое слоты (slots) во Vue?

**Слоты (slots)** — механизм передачи контента от родительского компонента в дочерний компонент, в заранее определённые места (placeholder) внутри шаблона.

Это позволяет создавать гибкие и переиспользуемые компоненты, позволяя родителю вставлять произвольный контент в компоненты.

---

## Виды слотов

- **Default slot** — базовый слот без имени.
- **Named slots** — именованные слоты, у каждого слота своё имя.
- **Scoped slots** — слоты, которые через объект slot props передают данные из дочернего компонента родителю.

---

## Default slot

```vue
<!-- ChildComponent.vue -->
<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<!-- Parent.vue -->
<ChildComponent>
  <p>Привет из родителя!</p>
</ChildComponent>
```

Родитель передаёт контент в базовый слот дочернего компонента.

---

## Named slots

```vue
<!-- Layout.vue -->
<template>
  <header><slot name="header" /></header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</template>

<!-- Использование -->
<Layout>
  <template #header>
    <h1>Заголовок страницы</h1>
  </template>

  <p>Основной контент страницы</p>

  <template #footer>
    <p>© 2025</p>
  </template>
</Layout>
```

У дочернего компонента несколько слотов с именами; родитель заполняет их нужным контентом.

---

## Scoped slots

```vue
<!-- List.vue -->
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<!-- Parent.vue -->
<List :items="users">
  <template #default="{ item }">
    <strong>{{ item.name }}</strong> — {{ item.age }} лет
  </template>
</List>
```

Дочерний компонент передаёт данные (`item`) в слот через объект slot props, который родитель использует для отображения.

---

## Важное

Объект slot props доступен только для чтения в шаблоне родителя — его нельзя изменять.

---

## Дополнительная информация

Больше о работе со слотами в официальной документации Vue: [Документация Vue: Слоты](https://vuejs.org/guide/components/slots.html)

---

Источник: [Что такое слоты во Vue — hackfrontend](https://www.hackfrontend.com/docs/vue/vue-slots)
