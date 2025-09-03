WebSocket — это протокол связи, который устанавливает постоянное двустороннее соединение между клиентом (например, браузером) и сервером. В отличие от классического HTTP, где клиент отправляет запрос и получает ответ, WebSocket позволяет обмениваться данными в реальном времени в обоих направлениях по одному открытому соединению без необходимости создавать новые запросы.

---

### Как работает WebSocket?

1. Клиент отправляет запрос на сервер с заголовком `Upgrade: websocket` — начинается процесс рукопожатия (handshake).
2. Если сервер поддерживает WebSocket, он отвечает кодом 101 (Switching Protocols), указывая на переключение протокола.
3. После этого устанавливается постоянное TCP-соединение, по которому клиент и сервер могут отправлять данные в любое время.
4. Соединение остаётся открытым, пока одна из сторон его не закроет.

---

### Пример WebSocket на чистом JS (клиент):

```js
const socket = new WebSocket("ws://example.com/socket");

// При установлении соединения
socket.onopen = () => {
  console.log("Соединение открыто");
  socket.send("Привет сервер!");
};

// При получении сообщения
socket.onmessage = (event) => {
  console.log("Получено сообщение:", event.data);
};

// При закрытии соединения
socket.onclose = () => {
  console.log("Соединение закрыто");
};

// При ошибке
socket.onerror = (error) => {
  console.error("Ошибка WebSocket:", error);
};
```

---

## Использование WebSocket в React

```tsx
import React, { useEffect, useState } from "react";

function WebSocketComponent() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://example.com/socket");

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>Сообщения из WebSocket</h2>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Использование WebSocket в Vue 3 (Composition API)

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const messages = ref<string[]>([]);
let socket: WebSocket | null = null;

onMounted(() => {
  socket = new WebSocket("ws://example.com/socket");

  socket.onmessage = (event) => {
    messages.value.push(event.data);
  };
});

onUnmounted(() => {
  socket?.close();
});
</script>

<template>
  <div>
    <h2>Сообщения из WebSocket</h2>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>
```

---

### Зачем использовать WebSocket?

- Для приложений с реальным временем: чаты, игры, торговые платформы, мониторинг.
- Для двунаправленного общения без постоянных HTTP-запросов.
- Для снижения задержек и нагрузки на сервер.

---

WebSocket позволяет создавать мощные интерактивные приложения с мгновенной реакцией на события и обновления данных.[1][2][4][7]

[1](https://habr.com/ru/sandbox/171066/)
[2](https://blog.skillfactory.ru/glossary/websocket/)
[3](https://ru.wikipedia.org/wiki/WebSocket)
[4](https://elbrusboot.camp/blog/vviedieniie-v-websocket-tieoriia-i-primiery-dlia-nachinaiushchikh/)
[5](https://habr.com/ru/articles/886802/)
[6](https://ru.hexlet.io/blog/posts/chto-takoe-websocket-i-kak-oni-voobsche-rabotayut)
[7](https://learn.javascript.ru/websocket)
[8](https://www.youtube.com/watch?v=9pjmpipo7xc)
