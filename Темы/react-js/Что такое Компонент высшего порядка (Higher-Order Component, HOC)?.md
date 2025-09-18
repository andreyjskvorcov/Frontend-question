Компонент высшего порядка (Higher-Order Component, HOC) — это функция, которая принимает компонент и возвращает новый компонент с расширенным функционалом, не изменяя исходный компонент напрямую. HOC используется для повторного использования логики и композиции компонентов в React.[1][7][8]

### Как работает HOC

- HOC получает исходный компонент (WrappedComponent) в качестве аргумента.
- Возвращает новый компонент (EnhancedComponent), который оборачивает исходный компонент и может добавлять собственные пропсы, логику или изменять поведение.
- Оригинальный компонент остается без изменений и получает все пропсы, переданные обернутому компоненту плюс дополнительные, определённые в HOC.[7][1]

### Пример реализации withSubscription

```jsx
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
      this.setState({ data: selectData(DataSource, this.props) });
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({ data: selectData(DataSource, this.props) });
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />;
    }
  };
}
```

### Пример использования:

```jsx
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

### Особенности HOC

- HOC — это чистая функция без побочных эффектов, которая не меняет поведение исходного компонента, а расширяет его через композицию.
- Оборачиваемый компонент получает все исходные пропсы и дополнительные данные, переданные через HOC.
- HOC часто используется в сторонних библиотеках, например, `connect` в Redux для подключения компонентов к состоянию хранилища.[8][7]
- HOC помогает избежать дублирования кода, разделяя общую логику между множеством компонентов.[4][5]

### Итог

Компонент высшего порядка — мощный паттерн для расширения функциональности React-компонентов, позволяющий легко повторно использовать код и строить композиции без изменения исходного компонента. Он оборачивает базовый компонент, добавляя новые свойства и логику, при этом оставаясь чистой функцией.[1][4][7]

[1](https://ru.legacy.reactjs.org/docs/higher-order-components.html)
[2](https://reactdev.ru/types/054/)
[3](https://habr.com/ru/companies/ruvds/articles/428572/)
[4](https://stasonmars.ru/javascript/ponimaem-komponenty-vysshego-poryadka-v-react-na-realnom-primere/)
[5](https://webformyself.com/chto-takoe-komponenty-vysshego-poryadka-v-react/)
[6](https://ru.linkedin.com/pulse/%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-hoc-react-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-marfel)
[7](https://www.hackfrontend.com/docs/react/what-is-hoc)
[8](https://reactdev.ru/archive/react16/higher-order-components/)
[9](https://www.youtube.com/watch?v=MbehBXyQPQ8)
