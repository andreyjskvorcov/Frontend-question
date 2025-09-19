
---

# Паттерн «Наблюдатель» (Observer)

---

**Observer** — поведенческий паттерн, позволяющий объектам подписываться на события другого объекта и автоматически получать уведомления об изменениях его состояния. Объект, отправляющий уведомления, называется издателем (subject), а подписчики — наблюдателями (observers).

---

## Идея паттерна

Паттерн упрощает координацию между объектами: издатель уведомляет наблюдателей об изменениях без жёсткой привязки к их реализации, снижая связанность.

---

## Когда применять

1. Нужна обратная связь — один объект сообщает другим об изменениях без знания деталей.
2. Несколько зависимых объектов должны реагировать на изменения.
3. Динамическое взаимодействие — количество наблюдателей меняется во время работы.

---

## Как работает

- **Интерфейс издателя (Subject):** методы для подписки (`attach`), отписки (`detach`) наблюдателей и уведомления (`notify`).
- **Интерфейс наблюдателя (Observer):** метод `update()`, вызываемый издателем.
- **Конкретный издатель (Concrete Subject):** хранит состояние, реализует методы подписки/отписки и вызывает `notify()` при изменении.
- **Конкретный наблюдатель (Concrete Observer):** реагирует на уведомления, получая данные от издателя.

---

## Пример (TypeScript)

```ts
// Интерфейс наблюдателя
interface Observer {
  update(subject: Subject): void;
}

// Интерфейс издателя
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Конкретный издатель
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public setState(value: number) {
    this.state = value;
    console.log(`Subject: состояние изменилось на ${this.state}`);
    this.notify();
  }

  public getState(): number {
    return this.state;
  }
}

// Конкретные наблюдатели
class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.getState() < 5) {
      console.log('ConcreteObserverA реагирует, так как состояние < 5');
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.getState() >= 5) {
      console.log('ConcreteObserverB реагирует, так как состояние >= 5');
    }
  }
}

// Использование
function clientCode() {
  const subject = new ConcreteSubject();

  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();

  subject.attach(observerA);
  subject.attach(observerB);

  subject.setState(3); // уведомит observerA
  subject.setState(7); // уведомит observerB

  subject.detach(observerA);

  subject.setState(2); // уведомит только observerB
}

clientCode();
```

---

## Преимущества

- Слабая связность между издателем и наблюдателями: издатель не знает деталей реализации наблюдателей.
- Гибкость: динамическое добавление и удаление наблюдателей.
- Расширяемость: легко добавлять новые типы наблюдателей без изменений издателя.

---

## Недостатки

- Каскад уведомлений может усложнить отладку и вызвать избыточные реакции.
- Порядок уведомлений может иметь значение, если наблюдатели зависят друг от друга.

---

## Важно

Паттерн может усложнить систему при большом количестве подписчиков и перекрёстных зависимостей. Следите, чтобы события и подписчики были чётко организованы.

---

## Когда использовать

- Для централизованной обработки событий и оповещения нескольких объектов.
- Для обновления объектов при изменении одного источника без сильной связанности.
- Если нужно, чтобы новые модули могли подписаться без изменения существующего кода.

---

Подробнее: [refactoring.guru — Observer](https://refactoring.guru/ru/design-patterns/observer)  
Источник: [Наблюдатель — hackfrontend](https://www.hackfrontend.com/docs/patterns/observer)

[1](https://refactoring.guru/ru/design-patterns/observer)
[2](https://javarush.com/groups/posts/3421-shablon-nabljudateljh-observer)
[3](https://habr.com/ru/companies/nordclan/articles/697026/)
[4](https://radioprog.ru/post/1501)
[5](https://www.youtube.com/watch?v=5XQtgezuZ3E)
[6](https://alishoff.com/blog/328)
[7](https://www.reddit.com/r/Unity3D/comments/10sjshc/observer_pattern_how_to/)
[8](https://skillbox.ru/media/base/shablon-nablyudatel-rasskazhite-kak-tam-na-marse/)
