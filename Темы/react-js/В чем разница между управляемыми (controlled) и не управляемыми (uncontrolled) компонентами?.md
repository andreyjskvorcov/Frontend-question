Управляемые (controlled) и неуправляемые (uncontrolled) компоненты в React отличаются тем, как они хранят и обновляют своё состояние, связанное с данными формы.

### Управляемые компоненты (Controlled)

- Состояние элемента формы хранится в React-компоненте, обычно в `state` или с помощью хука `useState`.
- Значение элемента устанавливается через проп `value`, а обновление происходит через функцию-обработчик, например, `onChange`, которая обновляет состояние React.
- Обычно используется, когда необходим полный контроль над формой, включающей валидацию, динамическое изменение и сложную логику.
- Пример:

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
```

Здесь React всегда знает актуальное значение `value` и может применять любые преобразования сразу при вводе.[1][2]

### Неуправляемые компоненты (Uncontrolled)

- Данные формы хранятся напрямую в DOM-элементе.
- Состояние не хранится в React, а для чтения значения используют ссылки (ref), обращаясь к DOM при необходимости.
- Упрощают код, когда не требуется частое обновление или контроль формы, удобны для интеграции с существующим кодом на чистом JS или сторонними библиотеками.
- Пример:

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.inputRef.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref={this.inputRef} />
        <button type='submit'>Отправить</button>
      </form>
    );
  }
}
```

React не контролирует значение `input`, оно хранится в DOM, и доступ к нему происходит по событию отправки.[2][5]

### Сравнение

| Характеристика             | Управляемый компонент                 | Неуправляемый компонент                                         |
| -------------------------- | ------------------------------------- | --------------------------------------------------------------- |
| Где хранится состояние     | В React (state)                       | В DOM                                                           |
| Контроль за значением      | Полный контроль, React всегда в курсе | Меньший контроль, знания о значении только при доступе по ref   |
| Валидация                  | Легко реализуется                     | Сложнее реализовать                                             |
| Количество кода            | Больше                                | Меньше, проще                                                   |
| Интеграция с внешним кодом | Меньше подходит                       | Хорошо подходит                                                 |
| Производительность         | Может вызывать больше рендеров        | Быстрее при больших формах за счёт отсутствия частых обновлений |

### Когда использовать

- Управляемые компоненты — когда важна валидация, динамическое управление, сложные формы.
- Неуправляемые — для простых форм, где достаточно получить значение при сабмите, или при интеграции с существующим нестандартным DOM-кодом.[5][9][1][2]

### Итог

Управляемые и неуправляемые компоненты — два подхода к управлению состоянием форм в React. Управляемые дают полный контроль и гибкость, а неуправляемые проще в реализации и полезны в простых сценариях или интеграциях.[9][2][5]

[1](https://habr.com/ru/articles/502034/)
[2](https://ru.legacy.reactjs.org/docs/uncontrolled-components.html)
[3](https://ya.ru/neurum/c/nauka-i-obrazovanie/q/v_chem_zaklyuchayutsya_otlichiya_mezhdu_upravlyaemymi_e54cad5c)
[4](https://www.youtube.com/watch?v=ZBtU9lxgztI)
[5](https://www.hackfrontend.com/docs/react/controlled-and-uncontrolled-components)
[6](https://www.youtube.com/watch?v=g3e6Eyvm3kI)
[7](https://rcamel.ru/archives/354)
[8](https://reactdev.ru/archive/react16/uncontrolled-components/)
[9](https://dev-gang.ru/article/kontroliruemye-i-nekontroliruemye-komponenty-v-react-lo65aat2do/)
[10](https://tokmakov.msk.ru/blog/item/637)
