Проп `children` в React — это специальный проп, который содержит все вложенные элементы или компоненты, помещённые между открывающим и закрывающим тегом данного компонента. Он используется для построения гибких и переиспользуемых компонентов-контейнеров, таких как боковые панели, диалоги, карточки и другие, которые могут содержать произвольный вложенный контент.[2][3][7]

### Для чего используется children

- Позволяет компоненту принимать в качестве содержимого любые дочерние элементы JSX без явного указания их в списке пропсов.
- Помогает создавать универсальные обёртки и слоты для контента, отделяя структуру компонента от деталей вложенного содержимого.
- Увеличивает переиспользуемость, позволяя вкладывать в один компонент разный набор вложенных элементов.[2]

### Как работает children

- Всё, что размещено внутри JSX-тега компонента, автоматически передаётся ему в виде пропа `children`.
- Внутри компонента `children` можно рендерить напрямую используя `{props.children}` или производить над ним манипуляции (например, обойти, отфильтровать, клонировать элементы).[5][2]
- `children` может быть одиночным элементом, строкой, числом, массивом элементов или даже функцией (render prop).[5][2]

### Примеры

#### Простой пример с пропом children

```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>Добро пожаловать</h1>
      <p className='Dialog-message'>
        Спасибо, что посетили наш космический корабль!
      </p>
    </FancyBorder>
  );
}
```

В этом примере все вложенные в `<FancyBorder>` элементы передаются через `props.children` и отображаются внутри `div` с классом.[3][7]

#### Манипуляция с дочерними элементами

```jsx
function ColorList(props) {
  return (
    <ul>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { style: { color: 'red' } })
      )}
    </ul>
  );
}

<ColorList>
  <li>Красный</li>
  <li>Зелёный</li>
  <li>Синий</li>
</ColorList>;
```

Здесь каждому элементу списка добавляется стиль красного цвета с помощью `React.Children.map` и `React.cloneElement`.[5]

#### children как функция (render prop)

```jsx
function DataLoader({ children }) {
  const data = { name: 'Реакт' };
  return children(data);
}

<DataLoader>{(data) => <div>Загружено: {data.name}</div>}</DataLoader>;
```

`children` в данном случае — функция, которой передаются данные, и которая возвращает JSX[2].

### Особенности

- `children` — «только для чтения», нельзя напрямую модифицировать;
- Можно использовать утилиты из объекта `React.Children` для безопасной и удобной работы с потомками;
- Использование `children` способствует композиции компонентов и отказу от наследования в UI.[3][5]

### Итог

Проп `children` — базовый механизм для композиции и кастомизации UI в React, позволяющий передавать произвольное вложенное содержимое в компоненты и обеспечивающий гибкость и удобство разработки переиспользуемых интерфейсов.[2][3][5]

[1](https://reactdev.ru/reference/react/Children/)
[2](https://www.hackfrontend.com/docs/react/react-children)
[3](https://ru.legacy.reactjs.org/docs/composition-vs-inheritance.html)
[4](https://ru.hexlet.io/courses/js-react/lessons/children/theory_unit)
[5](https://stasonmars.ru/javascript/pogruzhaemsya-v-raboty-s-children-na-react/)
[6](https://habr.com/ru/articles/832648/)
[7](https://ru.w3docs.com/quiz/question/AQN2Zt==)
[8](https://reactdev.ru/learn/passing-props-to-a-component/)
[9](https://sky.pro/media/kak-peredat-propsy-v-this-props-children-v-react/)
[10](https://www.reddit.com/r/reactjs/comments/1fe4jd7/what_is_the_nicest_way_to_use_the_children_prop/)
