# 6.  ### Для чего используют директиву v-for?

Встроенная директива v-for позволяет нам проходить по элементам массива, т.е. это привычный нам цикл в котором мы можем обратиться к содержимому каждого элемента. Как правило, это массив объектов.
    1. Пример с массивом:
    ```javascript
    <ul id="list">
      <li v-for="(item, index) in items">
        {{ index }} - {{ item.message }}
      </li>
    </ul>

    var vm = new Vue({
      el: '#list',
      data: {
        items: [
          { message: 'John' },
          { message: 'Locke' }
        ]
      }
    })
    ```
    Вы также можете использовать `of` в качестве разделителя вместо `in`, также как в итераторах javascript.

    2. Пример с объектом:
    ```javascript
    <div id="object">
      <div v-for="(value, key, index) in user">
        {{ index }}. {{ key }}: {{ value }}
      </div>
    </div>

    var vm = new Vue({
      el: '#object',
      data: {
        user: {
          firstName: 'John',
          lastName: 'Locke',
          age: 30
        }
      }
    })
    ```