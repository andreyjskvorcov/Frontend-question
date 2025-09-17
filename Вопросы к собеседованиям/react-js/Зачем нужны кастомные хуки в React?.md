Кастомные хуки в React — это пользовательские функции, которые используют встроенные хуки (например, useState, useEffect) для инкапсуляции и повторного использования логики между компонентами.

---

### Зачем нужны кастомные хуки

- **Инкапсуляция логики**  
  Вынесение связанной логики (напр. работа с API, валидация, таймеры) в отдельные функции облегчает поддержку и тестирование.

- **Избежание дублирования**  
  Вместо копирования одинакового кода в разных компонентах, логика пишется один раз и переиспользуется.

- **Улучшение читаемости**  
  Компоненты становятся более "чистыми" и лаконичными, так как основная бизнес-логика перенесена в хуки.

---

### Пример простого кастомного хука useInput для управления инпутом

```jsx
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value);

  return [value, handleChange];
}

export default useInput;
```

Использование в компоненте:

```jsx
function Form() {
  const [name, setName] = useInput('');

  return <input value={name} onChange={setName} placeholder='Введите имя' />;
}
```

---

### Пример кастомного хука для работы с API (useFetch)

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

---

### Итог

Кастомные хуки позволяют писать более модульный, понятный и переиспользуемый код, упрощая повышение качества и поддержку React-приложений.[1][2][4][5]

[1](https://habr.com/ru/companies/otus/articles/729596/)
[2](https://ru.legacy.reactjs.org/docs/hooks-custom.html)
[3](https://habr.com/ru/companies/otus/articles/576960/)
[4](https://www.hackfrontend.com/docs/react/custom-hooks)
[5](https://foxminded.ua/ru/stvorennia-kastomnykh-khukiv-u-react/)
[6](https://ru.react-redux.js.org/api/hooks/)
[7](https://reactdev.ru/learn/reusing-logic-with-custom-hooks/)
[8](https://www.reddit.com/r/reactjs/comments/kbr435/react_custom_hooks_when_why_how_many/)
[9](https://ru.legacy.reactjs.org/docs/hooks-overview.html)
[10](https://proglib.io/p/15-kastomnyh-hukov-dlya-oblegcheniya-komponentov-react-2021-08-11)
