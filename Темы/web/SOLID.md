### S — Single Responsibility Principle (Принцип единственной ответственности)

Класс или модуль должен отвечать только за одну задачу. Это означает, что изменение в одной области функционала требует изменений только в одном месте кода.

```js
// Плохо: класс делает и работу с пользователем, и логирование
class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    // код для сохранения пользователя
  }

  logActivity() {
    console.log(`Пользователь ${this.name} активен.`);
  }
}

// Хорошо: раздельные классы для разных задач

class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    // только сохранение
  }
}

class Logger {
  logActivity(message) {
    console.log(message);
  }
}
```

---

### O — Open/Closed Principle (Принцип открытости/закрытости)

Классы должны быть открыты для расширения, но закрыты для модификации. Это значит, что новые функции добавляются через расширение, а не редактирование существующего кода.

```js
// Плохо: изменение существующего класса при добавлении нового типа уведомления

class Notification {
  send(type, message) {
    if (type === "email") {
      // отправить email
    } else if (type === "sms") {
      // отправить sms
    }
  }
}

// Хорошо: расширяем через наследование

class Notification {
  send(message) {
    throw new Error("Method 'send()' должен быть реализован.");
  }
}

class EmailNotification extends Notification {
  send(message) {
    // отправить email
  }
}

class SMSNotification extends Notification {
  send(message) {
    // отправить sms
  }
}
```

---

### L — Liskov Substitution Principle (Принцип подстановки Лисков)

Объекты дочерних классов должны заменять объекты базового класса без нарушения корректной работы программы.

```js
class Bird {
  fly() {
    console.log("Птица летит");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Воробей летит");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Страусы не умеют летать!");
  }
}

// Нарушение LSP: страус ломает поведение базового класса, если его использовать вместо Bird
```

Правильнее выделить общий интерфейс и те классы, которые реально могут летать.

---

### I — Interface Segregation Principle (Принцип разделения интерфейса)

Клиенты не должны зависеть от методов, которые они не используют. Лучше иметь несколько специализированных интерфейсов, чем один универсальный.

```js
// Плохо: интерфейс с лишними методами
class MultiFunctionPrinter {
  print() {}
  scan() {}
  fax() {}
}

// Принтер, который умеет только печатать, вынужден реализовывать все методы

class SimplePrinter extends MultiFunctionPrinter {
  print() {
    console.log("Печать");
  }
  scan() {
    throw new Error("Не поддерживается");
  }
  fax() {
    throw new Error("Не поддерживается");
  }
}

// Хорошо: разделить на отдельные интерфейсы (JS не имеет интерфейсов, но можно использовать отдельные классы/функции)

class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

// Класс реализует только нужные методы
class PhotoCopier extends Printer {
  print() {
    console.log("Печать");
  }
}
```

---

### D — Dependency Inversion Principle (Принцип инверсии зависимостей)

Модули высокого уровня не должны зависеть от модулей низкого уровня, а от абстракций. Абстракции не должны зависеть от деталей, а детали от абстракций.

```js
// Плохо: класс напрямую зависит от конкретной реализации

class MySQLDatabase {
  connect() {
    console.log("Подключение к MySQL");
  }
}

class UserRepository {
  constructor() {
    this.db = new MySQLDatabase();
  }

  getUser(userId) {
    this.db.connect();
    // получение пользователя
  }
}

// Хорошо: зависимость передаётся через абстракцию (например, интерфейс)

class Database {
  connect() {}
}

class MySQLDatabase extends Database {
  connect() {
    console.log("Подключение к MySQL");
  }
}

class UserRepository {
  constructor(database) {
    this.db = database;
  }

  getUser(userId) {
    this.db.connect();
    // получение пользователя
  }
}

const db = new MySQLDatabase();
const repo = new UserRepository(db);

repo.getUser(1);
```

---

Таким образом, применение SOLID позволяет создавать более гибкий, удобный для расширения и поддержки код. Эти принципы широко используются в разработке крупных программных систем.

Если нужно, могу помочь с дополнительными вопросами по SOLID или примерами.

### Почему важно знать SOLID на интервью:

- Эти принципы помогают писать чистый и сопровождаемый код.
- Знание SOLID — признак глубокого понимания ООП и архитектуры ПО.
- Они широко применяются в индустрии для разработки гибких и масштабируемых приложений.

Если нужно, могу подготовить более подробный разбор каждого принципа с примерами на JavaScript или другом языке.

Источник: русскоязычные статьи и статьи по SOLID.[1][2][4][6][8]

[1](<https://ru.wikipedia.org/wiki/SOLID_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)>)
[2](https://web-creator.ru/articles/solid)
[3](https://habr.com/ru/articles/688530/)
[4](https://www.hackfrontend.com/docs/principles/solid)
[5](https://javarush.com/groups/posts/68569-principih-solid-prostihmi-slovami)
[6](https://skillbox.ru/media/code/principy-solid-chto-eto-i-pochemu-ih-ispolzuyut-vse-senory/)
[7](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-ru)
[8](https://foxminded.ua/ru/solid-principy/)
[9](https://habr.com/ru/articles/509430/)
[10](https://solidbook.vercel.app)
