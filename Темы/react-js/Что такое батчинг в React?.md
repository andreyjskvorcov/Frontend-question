
---

# Что такое батчинг в React?

**Батчинг** в React — это процесс объединения нескольких обновлений состояния (`setState`) в одно, чтобы минимизировать количество перерисовок и повысить производительность приложения.

---

## Как работает батчинг?

Когда несколько операций обновления состояния происходят одновременно, React "собирает" эти изменения и выполняет их за один раз. Вместо того чтобы перерисовывать компонент после каждого изменения, React выполняет все обновления состояния в пакетном режиме, а затем один раз перерисовывает компонент.

---

## Преимущества батчинга

- **Повышение производительности**  
  Батчинг позволяет избежать лишних рендеров, что уменьшает нагрузку на браузер и ускоряет работу приложения.

- **Меньше обновлений DOM**  
  Благодаря батчингу React минимизирует количество тяжелых операций с реальным DOM, что ускоряет рендеринг и улучшает взаимодействие с пользователем.

- **Лучшее управление состоянием**  
  Батчинг объединяет несколько изменений в одну задачу, что делает код более оптимизированным и чистым.

---

## Пример батчинга

```JS <code>
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const updateState = () => {
    setCount(count + 1);
    setMessage("Значение обновлено");
  };

  // Эти два изменения состояния будут обработаны в одном батче
  return (
    <div>
      <p>{count}</p>
      <p>{message}</p>
      <button onClick={updateState}>Обновить</button>
    </div>
  );
}
</code>
```

В этом примере, несмотря на то что мы вызываем два обновления состояния (для `count` и `message`), React выполнит их в одном батче, что приведет к одной перерисовке компонента.

---

## Дополнительно: Автоматический батчинг в React 18+

В React 18 и новее батчинг стал работать не только в синхронных обработчиках, но и в асинхронных операциях (например, в `Promise`, `setTimeout`, запросах fetch), что дополнительно улучшает производительность.

---

## Как отменить батчинг?

Если нужно сразу после обновления состояния прочесть изменения в DOM, можно использовать `ReactDOM.flushSync()` для отмены батчинга и немедленного обновления:

```JS <code>
import { flushSync } from "react-dom";

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });
  // React вызовет ререндер сразу здесь
}
</code>
```

---

## Итог

Батчинг позволяет React эффективно обновлять UI, снижать количество рендеров и повышать производительность приложений.

---

Источник: [Батчинг в React, hackfrontend](https://www.hackfrontend.com/docs/react/react-batching)[1]

[1](https://www.hackfrontend.com/docs/react/react-batching)
[2](https://www.youtube.com/watch?v=lj0JjbVJPz0)
[3](https://www.youtube.com/watch?v=bE4mXoNlovM)
[4](https://habr.com/ru/companies/otus/articles/667706/)
[5](https://habr.com/ru/articles/577168/)
[6](https://tproger.ru/articles/react-18-novye-huki-i-kak-izmenilsja-rendering)
[7](https://www.youtube.com/watch?v=VfQ-qSjIalU)
[8](https://devmoek.ru/react-19-obzor)
[9](https://shadowhint.com/questions/question/6e07bc25-088c-4758-8196-bda4dae91adf)
[10](https://flaming.codes/ru/posts/description-of-react-batched-updates)
