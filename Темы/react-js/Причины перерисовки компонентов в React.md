
---

# Причины перерисовки компонентов в React

В React **перерисовка (re-render)** — процесс, при котором React заново вызывает компонент, чтобы построить новое виртуальное дерево и сравнить его с предыдущим.

Разработчику важно знать причины перерисовки, чтобы оптимизировать производительность и избежать лишних обновлений.

---

## Основные причины перерисовки

### 1. Изменение состояния (state)

При вызове функции обновления состояния, например `setCount`, компонент всегда перерисовывается:

```JS <code>
const [count, setCount] = useState(0);
setCount(count + 1); // вызывает перерисовку
</code>
```

---

### 2. Изменение пропсов (props)

Если компонент получает новые значения пропсов, он будет перерендерен:

```JS <code>
<Child value={someValue} /> // если someValue изменился → ререндер
</code>
```

---

### 3. Ререндер родительского компонента

Если родительский компонент перерендерился, все его дочерние компоненты тоже вызываются снова, если они не оптимизированы (например, React.memo или shouldComponentUpdate).

---

### 4. Изменение контекста (Context)

Если значение контекста, используемого через `useContext`, изменяется — все связанные с ним компоненты перерисовываются.

---

### 5. Принудительный ререндер (force update)

Например, через хуки `useReducer`, `useSyncExternalStore` или сторонние хранилища можно вручную инициировать обновление компонента.

---

## Как избежать лишних ререндеров?

| Метод                 | Что делает                                                |
| --------------------- | --------------------------------------------------------- |
| React.memo(Component) | Кэширует компонент, не обновляя его без изменений пропсов |
| useMemo(fn, deps)     | Кэширует результат вычислений между рендерами             |
| useCallback(fn, deps) | Кэширует функции, передаваемые вниз по дереву             |
| useRef()              | Хранит данные без вызова повторного рендера               |
| key                   | Контролирует идентичность компонентов в списках           |

---

## Пример лишнего рендера

```JS <code>
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

function Child() {
  console.log("Child ререндерится");
  return <div>Я ничего не меняю</div>;
}
</code>
```

Здесь `Child` ререндерится при изменении состояния у `Parent`, хотя не использует это состояние.

---

## Решение

Используйте мемоизацию компонента с помощью `React.memo`:

```JS <code>
const Child = React.memo(() => {
  console.log("Child ререндерится");
  return <div>Я ничего не меняю</div>;
});
</code>
```

---

## Ловушка: новое значение по ссылке

```JS <code>
const obj = { a: 1 };
<Component data={obj} />
```

Каждый ререндер создаёт новый объект, даже если значение не изменилось, что вызывает лишние перерисовки. Используйте `useMemo` или `useCallback` для сохранения ссылки.

---

## Итог

- Компоненты перерисовываются при изменении `state`, `props`, `context` или при ререндере родителя.
- Оптимизировать ререндеры помогают `React.memo`, `useMemo`, `useCallback` и `useRef`.
- Избегайте создания новых объектов и функций без необходимости.
- Оптимизируйте только те компоненты, которые реально создают нагрузку — преждевременная оптимизация вредна.

---

Источник: [Причины перерисовки компонентов в React — hackfrontend](https://www.hackfrontend.com/docs/react/reasons-for-redrawing-to-react)[1]

[1](https://www.hackfrontend.com/docs/react/reasons-for-redrawing-to-react)
[2](https://www.reddit.com/r/reactjs/comments/166g3w8/why_react_rerenders_when_do_we_need_to_worry/)
[3](https://www.reddit.com/r/reactjs/comments/1ej505e/why_does_it_rerender_even_when_state_is_same/)
[4](https://qna.habr.com/q/1272164)
[5](https://blog.zverit.com/frontend/2021/03/07/react-optimization-functional-components/)
[6](https://ru.react.dev/learn/render-and-commit)
[7](https://habr.com/ru/articles/937656/)
[8](https://ru.stackoverflow.com/questions/1581867/%D0%9F%D1%80%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0%D0%B5%D1%82-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82-react-%D0%BF%D1%80%D0%B8-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F)
[9](https://ru.legacy.reactjs.org/docs/faq-state.html)
[10](https://ru.stackoverflow.com/questions/1418696/%D0%9D%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82-react)
