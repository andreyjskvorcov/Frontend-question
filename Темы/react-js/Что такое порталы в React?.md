Порталы в React — это механизм, который позволяет рендерить дочерние элементы в DOM-узел, находящийся вне DOM-иерархии родительского компонента. С помощью порталов можно визуально вывести элементы за пределы их обычного родительского контейнера, сохраняя при этом управление этим элементом через React.[1][3][6]

### Как работает портал

- Для создания портала используется функция `ReactDOM.createPortal(child, container)`, где `child` — это JSX или React-элемент, а `container` — DOM-элемент, в который нужно отрисовать этот `child`.[3][1]
- Визуально элемент оказывается вне иерархии родительского компонента, что полезно, если у родителя выставлены стили, ограничивающие видимость (например, `overflow: hidden`).
- Несмотря на перенос DOM-элемента в другую часть дерева, React продолжает управлять событиями и состоянием компонента так, как если бы он находился внутри родительского компонента.[6][1]

### Типичные случаи применения порталов

- Модальные окна
- Всплывающие подсказки (tooltips)
- Дропдауны и всплывающие меню
- Аллерты и уведомления[3][6]

### Пример использования портала

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

// Использование:
function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Показать модал</button>

      {showModal && (
        <Modal>
          <div className='modal'>
            <p>Это модальное окно</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
```

### Итоги

Порталы позволяют создавать UI-компоненты, которые визуально выходят за рамки обычной DOM-иерархии, при этом сохраняя управление React. Это особенно полезно для модалок, подсказок и других элементов наложения, где родительские стили могут мешать отображению.[1][6][3]

[1](https://reactdev.ru/archive/react16/portals/)
[2](https://reactdev.ru/reference/react-dom/createPortal/)
[3](https://www.hackfrontend.com/docs/react/react-portal)
[4](https://nuancesprog.ru/p/11039/)
[5](https://dev-gang.ru/article/sozdanie-portalov-v-react-s-pomosczu-huka-useportal-cyrn8xwy0v/)
[6](https://frontend-stuff.com/blog/react-portals/)
[7](https://ru.linkedin.com/pulse/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%D0%BE%D0%B2-%D0%B2-react-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87-%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%B8%D0%B9-marfel)
[8](https://flaming.codes/ru/posts/react-js-portal-rendering-out-of-tree)
[9](https://habr.com/ru/companies/citymobil/articles/592923/)
