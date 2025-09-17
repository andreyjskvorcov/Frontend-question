В React классовом компоненте существуют различные методы жизненного цикла, которые позволяют управлять поведением компонента на разных этапах его существования: при создании, обновлении и удалении из DOM.[3][5][6]

### Основные методы жизненного цикла

#### Монтаж (mounting)

- **constructor(props)** — вызывается при создании экземпляра компонента, используется для инициализации состояния и привязки методов.[5][3]
- **static getDerivedStateFromProps(props, state)** — вызывается перед рендером, когда компонент монтируется или обновляется. Используется редко для синхронизации состояния с внешними пропсами.[3][5]
- **render()** — обязательный метод. Возвращает JSX-разметку или другие допустимые типы: массивы, фрагменты, строки, числа, порталы или null.[6][3]
- **componentDidMount()** — вызывается сразу после того, как компонент вставлен в DOM. Применяется для асинхронных запросов, инициализации таймеров, подписок и работы с DOM.[1][7][5]

#### Обновление (updating)

- **static getDerivedStateFromProps(props, state)** — вызывается при обновлении пропсов, как дополнительная точка обработки.[3]
- **shouldComponentUpdate(nextProps, nextState)** — позволяет оптимизировать производительность: возвращает true или false, определяя необходимость рендера.[5]
- **render()** — вызывается при каждом обновлении.[6][3]
- **getSnapshotBeforeUpdate(prevProps, prevState)** — позволяет получить данные из DOM до его обновления, например, позицию прокрутки.[6][3]
- **componentDidUpdate(prevProps, prevState, snapshot)** — срабатывает после обновления, подходит для сетевых запросов на основе изменений или для работы с обновлённым DOM.[5][3]

#### Размонтирование (unmounting)

- **componentWillUnmount()** — вызывается перед удалением компонента из DOM. Используется для очистки подписок, отмены таймеров и других задач "уборки".[7][5]

#### Обработка ошибок

- **static getDerivedStateFromError(error)** — вызывается после возникновения ошибки у дочернего компонента, позволяет перехватить ошибку и обновить состояние.[6]
- **componentDidCatch(error, info)** — вызывается после возникновения ошибки, применим для логирования или сбора аналитики об ошибках.[6]

### Пример класса с основными методами

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // редко используется, для синхронизации состояния
    return null;
  }

  componentDidMount() {
    // асинхронные запросы, подписки
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true для обновления, false для предотвращения лишних рендеров
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // вернуть значения, которые нужны в componentDidUpdate
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // операции после обновления DOM
  }

  componentWillUnmount() {
    // очистка ресурсов
  }

  static getDerivedStateFromError(error) {
    // обновление состояния при ошибке
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // логирование ошибок
  }

  render() {
    return <div>Жизненный цикл компонента</div>;
  }
}
```

### Особенности

- Не все методы жизненного цикла используются часто: в новых версиях React некоторые методы объявлены устаревшими (например, componentWillMount или componentWillReceiveProps).[2]
- С появлением хуков (`useEffect`, `useState` и др.) большинство аналогичной логики реализуется во функциональных компонентах, но знание методов жизненного цикла важно для поддержки старого кода.[3][6]

Каждый метод решает конкретные задачи и позволяет управлять состоянием, событиями, асинхронными действиями и обработкой ошибок на разных этапах жизни компонента.[5][3][6]

[1](https://ru.legacy.reactjs.org/docs/state-and-lifecycle.html)
[2](https://habr.com/ru/companies/ruvds/articles/441578/)
[3](https://www.hackfrontend.com/docs/react/component-lifecycle-methods-in-react)
[4](https://ru.legacy.reactjs.org/docs/react-component.html)
[5](https://foxminded.ua/ru/zhiznennii-tsikl-komponenta-react/)
[6](https://ru.react.js.org/docs/react-component.html)
[7](https://reactdev.ru/archive/react16/state-and-lifecycle/)
[8](https://otus.ru/nest/post/2116/)
[9](https://blog.rubrain.com/react-lifecycle-methods-hooks.html)
