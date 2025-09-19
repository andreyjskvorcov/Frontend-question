
---

# Что такое Prop Drilling и как его избежать

**Prop Drilling** — ситуация, когда данные (пропсы) передаются через несколько уровней вложенных компонентов, даже если промежуточные компоненты их не используют напрямую.

---

## Пример Prop Drilling

```JS <code>
function App() {
  const user = { name: "Иван" };
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>Привет, {user.name}!</p>;
}
```

Здесь `Child` использует `user`, но он передаётся через `Parent`, который сам его не использует — это и есть Prop Drilling.

---

## Почему это может быть проблемой?

- Загрязнение компонентов — промежуточные компоненты получают ненужные пропсы.
- Сложность сопровождения — при изменении данных нужно править много компонентов.
- Уменьшение повторного использования — компоненты привязываются к пропсам, которые им не нужны.
- Вероятность багов — трудно отследить использование пропсов при изменении структуры.

---

## Как избежать Prop Drilling?

### 1. React Context API

Контекст позволяет передавать данные на любой уровень вложенности, минуя промежуточные компоненты.

```JS <code>
const UserContext = createContext(null);

function App() {
  const user = { name: "Иван" };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const user = useContext(UserContext);
  return <p>Привет, {user.name}!</p>;
}
```

---

### 2. Глобальное состояние (Zustand, Redux, Jotai, Recoil)

Подходит для сложных приложений, с большим количеством данных и множеством точек доступа.

```JS <code>
// Zustand пример
const useUserStore = create((set) => ({
  user: { name: "Иван" },
}));

function Child() {
  const user = useUserStore((state) => state.user);
  return <p>Привет, {user.name}!</p>;
}
```

---

### 3. Композиция (render props, slots, hooks)

Можно передавать пропсы не напрямую, а через функции или кастомные хуки, инкапсулирующие логику.

---

## Когда допустимо Prop Drilling

Если данные передаются на 1-2 уровня глубины — это нормально. Контекст или глобальное состояние следует использовать только при реальной необходимости.

---

## Вывод

- Prop Drilling — избыточная передача пропсов по цепочке компонентов, которая усложняет архитектуру.
- Проблема усиливается при глубокой вложенности.
- Избежать её можно с помощью Context API, глобального состояния или композиционных техник.

---

Источник: [Что такое Prop Drilling и как его избежать — hackfrontend](https://www.hackfrontend.com/docs/react/react-prop-drilling)
