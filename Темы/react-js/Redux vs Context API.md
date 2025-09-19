
---

# Redux vs Context API

Redux и Context API — два разных подхода к управлению состоянием в React-приложениях, каждый со своими преимуществами и кейсами применения.

---

## Context API

### Преимущества Context API

- Встроен в React
- Прост в использовании
- Подходит для небольших приложений
- Меньше шаблонного кода
- Не требует дополнительных зависимостей

### Недостатки Context API

- Может вызывать лишние ререндеры
- Сложнее организовать большие приложения
- Нет встроенных инструментов отладки
- Ограниченная производительность при частых обновлениях

---

## Redux

### Преимущества Redux

- Предсказуемое управление состоянием
- Мощные инструменты разработчика
- Большая экосистема middleware
- Хорошая производительность при масштабировании
- Удобное тестирование

### Недостатки Redux

- Больше шаблонного кода
- Дополнительная зависимость
- Более крутая кривая обучения
- Может быть избыточным для маленьких приложений

---

## Пример использования Context API

```jsx
// Создание контекста
const ThemeContext = React.createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Использование
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

---

## Пример использования Redux

```js
// Action Types
const SET_THEME = 'SET_THEME';

// Action Creator
const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

// Reducer
const themeReducer = (state = { theme: 'light' }, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Компонент
function ThemedButton() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
    >
      Current theme: {theme}
    </button>
  );
}
```

---

## Когда что использовать

**Используйте Context API, когда:**

- Небольшое приложение
- Состояние обновляется редко
- Нужно передать данные глубоко в дерево компонентов
- Не нужна сложная логика управления состоянием

**Используйте Redux, когда:**

- Большое приложение
- Сложная логика управления состоянием
- Требуется хорошая производительность при частых обновлениях
- Нужны инструменты для отладки
- Требуется поддержка middleware

---

## Рекомендация

Начинайте с Context API для простых случаев и переходите к Redux, когда понадобятся его расширенные возможности.

---

Источник: [Redux vs Context API — hackfrontend](https://www.hackfrontend.com/docs/redux/redux-vs-context)

[1](https://www.hackfrontend.com/docs/redux/redux-vs-context)
