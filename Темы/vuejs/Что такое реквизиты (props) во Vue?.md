
---

# Что такое реквизиты (props) во Vue?

**Реквизиты (props)** — способ передачи данных от родительского компонента к дочернему в Vue.js.  
Они определяют интерфейс компонента, делая его переиспользуемым и конфигурируемым без жёсткой привязки к внутреннему состоянию.

---

## Зачем нужны реквизиты?

- **Компонентная декомпозиция**  
  Вынесите логику и шаблон в отдельный компонент, передав ему только нужные данные.

- **Переиспользуемость**  
  Один и тот же компонент можно использовать в разных местах с разными props.

- **Ясность интерфейса**  
  Объявляя props, вы документируете ожидания компонента и получаете типизацию и валидацию.

---

## Объявление реквизитов

### Options API

```js
export default {
  name: 'UserCard',
  props: {
    // обязательный, тип String
    name: {
      type: String,
      required: true,
    },
    // опциональный, тип Number, значение по умолчанию
    age: {
      type: Number,
      default: 18,
    },
    // простая валидация
    isActive: {
      type: Boolean,
      validator: (value) => typeof value === 'boolean',
    },
  },
};
```

---

### Composition API

```js
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    name: { type: String, required: true },
    age: { type: Number, default: 18 },
    isActive: Boolean,
  },
  setup(props) {
    // props доступны здесь
    return { props };
  },
});
```

---

## Важно

Не изменяйте props внутри компонента — это входящие данные. Для внутреннего состояния используйте `data` или `ref` (Composition API).

---

## Пример использования

```vue
<template>
  <div class="user-card">
    <h2>{{ name }}</h2>
    <p>Возраст: {{ age }}</p>
    <p v-if="isActive">Статус: Активен</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'isActive'],
};
</script>
```

_В Composition API можно деструктурировать props прямо в setup:_  
`setup({ name, age, isActive }) { /* … */ }`

---

## Шаги работы с реквизитами

1. Объявите props с типами и правилами (required, default, validator).
2. Передайте значения от родительского компонента `<UserCard name="Иван" :age="30" :isActive="true" />`.
3. Используйте внутри компонента как реактивные переменные: `{{ name }}`, `{{ age }}`.

---

## Рекомендации

- Объявляйте props явно (объектом), чтобы включить типизацию и валидацию.
- Используйте значения по умолчанию для опциональных props.
- Трансформируйте входящие данные в вычисляемых свойствах (`computed`), а не напрямую в props.

---

Больше в официальной документации Vue: [Документация Vue Props](https://vuejs.org/guide/components/props.html)

---

Источник: [Что такое реквизиты (props) во Vue? — hackfrontend](https://www.hackfrontend.com/docs/vue/vue-props)
