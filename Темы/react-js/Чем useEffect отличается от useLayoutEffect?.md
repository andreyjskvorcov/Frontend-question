Хук `useEffect` и `useLayoutEffect` в React похожи по синтаксису и функциональности, но основное отличие заключается во времени их выполнения и области применения.

---

### Основные различия

| Хук                 | Время выполнения                                                                            | Назначение и особенности                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useEffect**       | Асинхронно, после того, как браузер обновит DOM и отрисует изменения                        | Используется для большинства побочных эффектов (запросы, подписки, таймеры). Не блокирует отрисовку.                                                                    |
| **useLayoutEffect** | Синхронно, сразу после изменения DOM, но до того, как браузер визуально отобразит изменения | Используется для операций, требующих немедленного взаимодействия с DOM, например измерение размеров, изменение стилей для предотвращения мерцания. Блокирует отрисовку. |

---

### Когда использовать

- `useEffect` подходит для асинхронных задач, где визуальное мерцание не критично, например, загрузка данных или настройка подписок.
- `useLayoutEffect` нужен, когда надо синхронно изменить DOM или выполнить вычисления перед отрисовкой, чтобы избежать визуальных глюков.

---

### Пример использования

```jsx
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const divRef = useRef(null);

  // Выполняется после рендера и отрисовки в браузере
  useEffect(() => {
    console.log('useEffect - асинхронно после отрисовки');
  });

  // Выполняется синхронно сразу после изменения DOM, но до отрисовки браузером
  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.color = 'red'; // пример синхронного изменения стиля
    }
    console.log('useLayoutEffect - синхронно перед отрисовкой');
  });

  return (
    <div ref={divRef}>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
```

---

### Итог

- `useEffect` не блокирует отрисовку и подходит для большинства побочных эффектов.
- `useLayoutEffect` блокирует отрисовку, выполняется до показа изменений и лучше подходит для изменений, влияющих на верстку или размеры элементов.[1][3][4][5][7]

[1](https://habr.com/ru/articles/532224/)
[2](https://ya.ru/neurum/c/nauka-i-obrazovanie/q/v_chem_raznica_mezhdu_useeffect_i_uselayouteffect_ca8e1b6d)
[3](https://nuancesprog.ru/p/20857/)
[4](https://webtricks-master.ru/react-hooks/uchim-uselayouteffect-na-primerah-otlichie-huka-useeffect-ot-uselayouteffect-react-hooks/)
[5](https://www.hackfrontend.com/docs/react/react-hooks-3)
[6](https://habr.com/ru/companies/otus/articles/668700/)
[7](https://ru.react.dev/reference/react/useLayoutEffect)
[8](https://www.youtube.com/watch?v=RzF5SCu_17k)
[9](https://easyoffer.ru/questions/frontend-developer/v-chem-raznica-mezhdu-useeffect-i-uselayouteffect)
[10](https://www.youtube.com/watch?v=n_OtFAsh6aU)
