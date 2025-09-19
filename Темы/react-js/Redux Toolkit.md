
---

# Redux Toolkit

**Redux Toolkit** — официальный набор инструментов для эффективной разработки с Redux, который упрощает наиболее распространённые сценарии использования Redux, включая настройку store, создание редьюсеров и иммутабельное обновление состояния.

---

## Основные возможности Redux Toolkit

- **configureStore** — упрощённая настройка store с предустановленными middleware.
- **createSlice** — автоматическое создание actions и reducers.
- **createAsyncThunk** — упрощённая работа с асинхронными операциями.
- **createEntityAdapter** — управление нормализованными данными.

---

## Пример использования Redux Toolkit

```js
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Создание slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Экспорт actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Создание store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
```

---

## Асинхронные операции с createAsyncThunk

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Создание асинхронного action
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  }
);

// Slice с обработкой асинхронного состояния
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
```

---

## Преимущества Redux Toolkit

- Значительно упрощает работу с Redux.
- Уменьшает количество шаблонного кода.
- Предоставляет лучшие практики и инструменты из коробки.

---

Источник: [Redux Toolkit — hackfrontend](https://www.hackfrontend.com/docs/redux/redux-toolkit)
