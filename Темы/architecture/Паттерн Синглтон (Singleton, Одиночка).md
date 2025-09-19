
---

# Паттерн Синглтон (Singleton, Одиночка)

---

**Синглтон** — порождающий паттерн, гарантирующий, что у класса будет только один экземпляр, доступный из любого места программы. Особенно полезен для уникальных ресурсов: конфигурация, логгер, кэш и пр.

---

## Зачем нужен Синглтон?

- Централизованное управление ресурсами.
- Универсальная точка доступа к функционалу.
- Гарантия единственного экземпляра объекта за время выполнения.

---

## Когда применять

1. Для ограниченных ресурсов: глобальный логгер, пул соединений, конфигурация.
2. Чтобы упростить доступ к объекту без передачи через уровни кода.
3. Как более управляемая альтернатива глобальным переменным.

---

## Как работает Синглтон?

- **Приватный конструктор:** запрещает создание экземпляров через `new` извне.
- **Статический метод доступа:** обычно `getInstance()`, создаёт и сохраняет объект при первом вызове, далее отдаёт сохранённый экземпляр.
- **Статическая переменная:** хранит ссылку на единственный объект.

---

## Пример (TypeScript)

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log('Инициализация единственного экземпляра...');
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log('Вызов метода у синглтона!');
  }
}

// Использование
const obj1 = Singleton.getInstance(); // Создание
const obj2 = Singleton.getInstance(); // Возврат существующего

console.log(obj1 === obj2); // true
obj1.someMethod(); // "Вызов метода у синглтона!"
```

---

## Преимущества

- Единственная точка доступа к объекту.
- Легче тестировать, чем глобальные переменные (хотя и не всегда просто).
- Отсутствие дублирования экземпляров.

---

## Недостатки

- Глобальное состояние усложняет тестирование и логику при избытке синглтонов.
- Трудности рефакторинга, если понадобится более одного экземпляра.
- Неявные зависимости из-за скрытого доступа через `getInstance()`.

---

## Внимание

Чрезмерное использование синглтонов приводит к сильной связанности кода и усложняет тестирование. Рассмотрите паттерны IoC (Inversion of Control) или DI (Dependency Injection) как альтернативу.

---

Источник: [Синглтон — hackfrontend](https://www.hackfrontend.com/docs/patterns/singleton)  
Подробнее: [refactoring.guru — Singleton](https://refactoring.guru/ru/design-patterns/singleton)  
Ресурсы: [patterns.dev](https://www.patterns.dev)

[1](https://refactoring.guru/ru/design-patterns/singleton)
[2](https://habr.com/ru/companies/otus/articles/779914/)
[3](https://skillbox.ru/media/code/chto-takoe-singleton-i-kak-ego-ispolzovat-v-razrabotke-prilozheniy/)
[4](https://gitverse.ru/blog/articles/development/207-singleton-odinochka-chto-eto-za-pattern-i-kak-ego-ispolzovat)
[5](https://kurshub.ru/journal/blog/singleton-eto/)
[6](https://proglib.io/p/realizaciya-patterna-odinochka-na-python-2024-10-10)
[7](https://radioprog.ru/post/1470)
[8](https://www.youtube.com/watch?v=4ZXGELFwfPA)
[9](https://refactoring.guru/ru/design-patterns/singleton/csharp/example)
[10](https://makedev.org/patterns/creational/singleton.html)
