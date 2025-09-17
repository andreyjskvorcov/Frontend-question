В React 19 появились новые хуки, которые расширяют возможности работы с данными, формами и состояниями, а также оптимизируют пользовательский опыт.

---

### Новые хуки в React 19

| Хук                | Описание                                                                                                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **use**            | Официальный хук для "ожидания данных" (suspending) на клиенте. Можно передать промис, и React будет ждать его выполнения. Поддерживает вызовы внутри условий и циклов.           |
| **useFormStatus**  | Позволяет отслеживать статус отправки формы: идет ли отправка, какие данные передаются, метод формы (`POST`, `GET` и др.).                                                       |
| **useActionState** | Управление состоянием формы и обработка её действий, упрощает работу с серверными запросами.                                                                                     |
| **useOptimistic**  | Позволяет реализовать оптимистичные обновления UI — временные изменения состояния, которые сразу показываются пользователю до завершения операции (например, запроса на сервер). |

---

### Важные изменения и улучшения

- Передача рефов в функциональных компонентах стала проще — теперь можно передавать рефы как обычные пропсы без необходимости использовать `forwardRef`.
- Новый API значительно упрощает работу с формами и асинхронными запросами, делая код чище и удобнее.

---

### Пример с useOptimistic

```jsx
import { useOptimistic } from 'react';

function LikeButton({ postId }) {
  const [optimisticLikes, addLike] = useOptimistic(0, (likes) => likes + 1);

  const handleLike = () => {
    addLike();
    fetch(`/api/like/${postId}`, { method: 'POST' });
  };

  return <button onClick={handleLike}>Like ({optimisticLikes})</button>;
}
```

---

### Итог

React 19 привнёс новые хуки — `use`, `useFormStatus`, `useActionState`, `useOptimistic` — которые расширяют возможности работы с асинхронными данными, формами и UX, упрощая их использование и повышая производительность приложений.В React 19 появились новые хуки, расширяющие возможности работы с данными и формами, а также оптимизирующие пользовательский опыт.[1][2][4][5][7]

### Новые хуки в React 19

- **use** — официальный хук для асинхронного ожидания промисов на клиенте с возможностью вызова внутри циклов и условий.
- **useFormStatus** — предоставляет статус отправки формы: идет ли отправка, доступные данные, метод формы.
- **useActionState** — упрощает управление состоянием форм и обработку их действий.
- **useOptimistic** — реализует оптимистичные обновления UI, позволяя временно изменять состояние до завершения операции.

### Важные изменения

- Упрощена работа с рефами— теперь во многих случаях не нужно использовать `forwardRef`.
- Новый API значительно упрощает работу с серверными действиями и формами.

### Пример useOptimistic

```jsx
import { useOptimistic } from 'react';

function LikeButton({ postId }) {
  const [optimisticLikes, addLike] = useOptimistic(0, (likes) => likes + 1);

  const handleLike = () => {
    addLike();
    fetch(`/api/like/${postId}`, { method: 'POST' });
  };

  return <button onClick={handleLike}>Like ({optimisticLikes})</button>;
}
```

React 19 делает работу с асинхронными данными и формами проще, эффективнее и удобнее, улучшая взаимодействие с пользователем.[2][4][5][7][1]

[1](https://habr.com/ru/companies/timeweb/articles/793660/)
[2](https://habr.com/ru/companies/surfstudio/articles/897200/)
[3](https://www.youtube.com/watch?v=MZ0HG3fOWqE)
[4](https://vk.com/@takeoff_staff-novye-huki-v-react-19-chto-nas-zhdet)
[5](https://proglib.io/p/novye-vozmozhnosti-react-19-konec-ery-povtornyh-renderingov-2024-09-30)
[6](https://www.youtube.com/watch?v=EruDKXUdB-s)
[7](https://university.ylab.io/articles/tpost/bhb4x32ah1-vozmozhnosti-react-19-chto-novogo-v-obno)
[8](https://vk.com/video-40137828_456262772)
[9](https://vk.com/wall-40137828_21571)
[10](https://icoder.uz/veb-razrabotka/mz0hg3fowqe-react-19-new-hooks-improvements/)
