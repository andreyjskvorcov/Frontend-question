
---

# Правила использования хуков в React

Хуки (Hooks) — это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах.  
Чтобы React корректно отслеживал и вызывал хуки, нужно строго соблюдать определённые правила.

---

## Основные правила использования хуков

### 1. Вызывайте хуки только на верхнем уровне

Нельзя вызывать хуки внутри условий, циклов или вложенных функций.

**Плохо:**

```JS <code>
if (someCondition) {
  const [count, setCount] = useState(0); // ошибка
}
</code>
```

**Хорошо:**

```JS <code>
const [count, setCount] = useState(0);

if (someCondition) {
  // можно использовать count здесь
}
</code>
```

> Причина: React полагается на стабильный порядок вызова хуков при каждом рендере. Вызов внутри условия может нарушить этот порядок.

---

### 2. Вызывайте хуки только в функциональных компонентах или внутри кастомных хуков

Нельзя вызывать хуки в обычных функциях, обработчиках или вне React-компонентов.

**Нельзя:**

```JS <code>
function doSomething() {
  const [val, setVal] = useState(0); // ошибка
}
</code>
```

**Можно:**

```JS <code>
function MyComponent() {
  const [val, setVal] = useState(0); // правильно
  return <p>{val}</p>;
}

function useCustomHook() {
  const [state, setState] = useState(false);
  return { state, setState };
}
</code>
```

---

### 3. Хуки должны вызываться в одинаковом порядке при каждом рендере

Нельзя менять порядок вызова хуков в зависимости от условий, иначе React неправильно сопоставит значения.

**Плохо:**

```JS <code>
if (flag) {
  useEffect(() => {
    // может сломаться при следующем рендере
  }, []);
}
</code>
```

---

## Как гарантировать правильное использование?

- Используйте плагин ESLint `eslint-plugin-react-hooks`, который автоматически отслеживает нарушение правил.
- Не помещайте хуки внутрь `if`, `for`, `switch`, `try/catch` или любых вложенных функций.

---

## Важное замечание

Если нарушить правила, React не сможет правильно отслеживать состояния и эффекты, что приведёт к ошибкам и непредсказуемому поведению.

---

Источник: [Правила использования хуков React — hackfrontend](https://www.hackfrontend.com/docs/react/rules-for-using-hooks-in-react)[1][2][5]

[1](https://ru.legacy.reactjs.org/docs/hooks-rules.html)
[2](https://reactdev.ru/reference/rules/rules-of-hooks/)
[3](https://ru.legacy.reactjs.org/docs/hooks-overview.html)
[4](https://www.youtube.com/watch?v=aCBohi8BndY)
[5](https://habr.com/ru/articles/553104/)
[6](https://inter-academy.ru/core/hooks/rules)
[7](https://gitverse.ru/blog/articles/development/54-huki-react-hooks-chto-eto-takoe-v-programmirovanii)
[8](https://vrogov-exceedteam.gitbook.io/react-hooks-redux/react/pravila-ispolzovaniya-khukov)
[9](https://www.youtube.com/watch?v=gLXPL7O1qdM)
[10](https://my-js.org/docs/cheatsheet/react-hooks)
