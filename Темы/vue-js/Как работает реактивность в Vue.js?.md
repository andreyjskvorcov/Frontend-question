
---

# Как работает реактивность в Vue.js?

## Что такое реактивность?

**Реактивность** — это механизм, при котором при изменении данных Vue автоматически обновляет связанные с ними элементы интерфейса. Это реализуется через систему отслеживания зависимостей.

- Vue отслеживает изменения реактивных переменных.
- При изменении значения автоматически перерисовываются зависимости (компоненты, шаблоны).
- Для работы с реактивными данными используются функции `ref()` и `reactive()`.

---

## ref()

- Используется для создания реактивных значений, подходящих для примитивов (числа, строки, булевы) и объектов.
- Создает реактивное значение, доступное через свойство `.value`.

### Пример с `ref()`

```vue
<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
```

- `count = ref(0)` создает реактивное значение, равное 0.
- `count.value++` увеличивает значение, Vue автоматически обновит интерфейс.

---

## reactive()

- Используется для создания реактивных объектов и массивов.
- Позволяет работать с объектами напрямую (без `.value`).
- Все вложенные свойства объекта становятся реактивными.

### Пример с `reactive()`

```vue
<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });

const increment = () => {
  state.count++;
};
</script>
```

- `state = reactive({ count: 0 })` создаёт реактивный объект с свойством `count`.
- `state.count++` изменяет значение, Vue обновит интерфейс.

---

## Разница между `ref()` и `reactive()`

| Критерий              | ref()                                  | reactive()                     |
| --------------------- | -------------------------------------- | ------------------------------ |
| Поддержка примитивов  | Да                                     | Нет                            |
| Поддержка объектов    | Да                                     | Да                             |
| Доступ к значениям    | Через `.value`                         | Прямой                         |
| Глубокая реактивность | Да                                     | Да                             |
| Изменение структуры   | Легко (можно присвоить новое значение) | Нельзя (структура фиксирована) |

---

## Комбинирование `ref()` и `reactive()`

Можно использовать `ref()` внутри объекта, созданного через `reactive()`, если нужна реактивность примитивного свойства.

```vue
<script setup>
import { reactive, ref } from 'vue';

const state = reactive({
  count: ref(0),
});

const increment = () => {
  state.count.value++;
};
</script>
```

- В таком случае доступ к `ref()` внутри `reactive()` идет через `.value`.
- Такое решение удобно, если часть данных — примитивы, с возможностью присваивать новое значение.

---

## Итог

- `ref()` — для реактивности примитивных значений и объектов с доступом через `.value`.
- `reactive()` — для создания реактивных объектов и массивов с прямым доступом.
- Можно комбинировать оба способа в зависимости от структуры данных и задач.

---

Источник: [Как работает реактивность в Vue.js? — hackfrontend](https://www.hackfrontend.com/docs/vue/ref-vs-reactive)[1][5]

[1](https://www.hackfrontend.com/docs/vue/ref-vs-reactive)
[2](https://ru.vuejs.org/guide/extras/reactivity-in-depth)
[3](https://ru.vuejs.org/guide/essentials/reactivity-fundamentals)
[4](https://habr.com/ru/companies/nordclan/articles/706536/)
[5](https://www.hackfrontend.com/docs/vue/ref-vs-reactive)
[6](https://purpleschool.ru/knowledge-base/article/value)
[7](https://foostack.ru/vue-js-reactive/)
[8](https://sobes.tech/bank/frontend/6b5a6287-d244-4fdb-bd1b-8ab9a96a7f59)
[9](https://salamba.ru/kak-rabotaet-reaktivnost-vo-vue-3/)
[10](https://www.youtube.com/watch?v=-G5g7-AvYkc)
