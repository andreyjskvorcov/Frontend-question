Хуки `useMemo` и `useCallback` в React служат для оптимизации производительности, но предназначены для разных целей.

---

### Чем отличается useMemo от useCallback

| Хук             | Что мемоизирует (запоминает) | Назначение                                                                                                                       | Пример использования                                                                                                          |
| --------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **useMemo**     | Вычисленное значение         | Запоминает результат выполнения функции, чтобы избежать дорогих повторных вычислений                                             | Мемоизация результата сложного вычисления: `const memoizedValue = useMemo(() => expensiveCalc(a, b), [a,b]);`                 |
| **useCallback** | Функцию                      | Запоминает саму функцию, чтобы при рендере не создавать новую её копию, что важно для пропсов и оптимизации дочерних компонентов | Мемоизация коллбэка, передаваемого в дочерний компонент: `const memoizedCallback = useCallback(() => doSomething(), [deps]);` |

---

### Важные моменты

- `useMemo` вызывается с функцией, возвращающей значение, и возвращает кешированное значение объекта.
- `useCallback(fn, deps)` — это сокращённая запись для `useMemo(() => fn, deps)`, т.е. мемоизирует функцию, не вызывая её.
- Использование `useCallback` полезно при передаче функций в мемоизированные дочерние компоненты (`React.memo`), чтобы избежать лишних перерисовок.
- Чрезмерное использование мемоизации может усложнять код и не всегда приводит к улучшению производительности.

---

### Пример useMemo

```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### Пример useCallback

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a);
}, [a]);
```

---

### Итог

- `useMemo` оптимизирует вычисляемые значения
- `useCallback` оптимизирует функции

Оба хука помогают избежать ненужных вычислений и перерисовок, делая приложение отзывчивее.[1][2][4][9]

[1](https://habr.com/ru/articles/807139/)
[2](https://habr.com/ru/articles/579242/)
[3](https://www.reddit.com/r/reactjs/comments/1h3lwuu/help_me_understand_usememo_and_usecallback_as/)
[4](https://frontend-stuff.com/blog/understanding-when-use-usememo/)
[5](https://www.reddit.com/r/reactjs/comments/1amtuv3/usememo_or_usecallback_which_should_i_use/)
[6](https://proglib.io/p/demistifikaciya-hukov-react-usecallback-usememo-i-vse-vse-vse-2021-02-28)
[7](https://ya.ru/neurum/c/nauka-i-obrazovanie/q/v_chem_raznica_mezhdu_usememo_i_usecallback_654565ef)
[8](https://ru.stackoverflow.com/questions/1192671/react-hooks-usecallback-%D0%B8-usememo)
[9](https://ru.hexlet.io/courses/js-react/lessons/use-callback/theory_unit)
