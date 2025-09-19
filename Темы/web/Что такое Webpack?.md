
---

# Что такое Webpack?

**Webpack** — инструмент для сборки модулей (module bundler), который преобразует ваш код и зависимости (JavaScript, CSS, изображения и др.) в оптимизированные файлы, готовые к развертыванию в браузере. Он упрощает и автоматизирует процесс сборки, поддерживает современные стандарты JS (ES6/ESNext) и помогает разделять код.

---

## Зачем использовать Webpack?

- **Code Splitting** — разделение кода на части для ускорения загрузки.
- **Tree Shaking** — удаление неиспользуемого кода для уменьшения размера бандла.
- **Hot Module Replacement (HMR)** — обновление кода без перезагрузки страницы.
- **Управление ассетами** — эффективная работа с изображениями, шрифтами и др.

---

## Как работает Webpack?

1. **Entry (Точка входа)**  
   Начинает с основного файла (например, `index.js`).

2. **Dependency Graph (Граф зависимостей)**  
   Анализирует все `import` и `require` в проекте.

3. **Loaders (Загрузчики)**  
   Позволяют работать с типами файлов, кроме JS/JSON:

   - `babel-loader` — транспилирует ES6+ в ES5.
   - `css-loader` — импортирует CSS в JS.
   - `style-loader` — встраивает стили в DOM.

4. **Plugins (Плагины)**  
   Расширяют функциональность:

   - `HtmlWebpackPlugin` — генерирует HTML с подключёнными бандлами.
   - `MiniCssExtractPlugin` — выносит CSS в отдельные файлы.
   - `TerserPlugin` — минифицирует JS.

5. **Output (Выходные файлы)**  
   Создаёт оптимизированный бандл, например, `bundle.js` в папке `/dist`.

---

## Режимы: Development и Production

- **Development**  
  Код читаемый, включены sourcemaps, нет минификации. Для разработки и отладки.

- **Production**  
  Минификация и оптимизация (tree shaking, code splitting), отключение комментариев и source maps. Для продакшена.

---

## Пример минимального Webpack-конфига

```js
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Папка вывода
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }, // Загрузчик JS
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Загрузчики CSS
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })], // Плагины
  mode: 'development', // или 'production'
};
```

---

## Сравнение с другими сборщиками

| Инструмент | Особенности                                                           |
| ---------- | --------------------------------------------------------------------- |
| Parcel     | "Zero config", простой в использовании                                |
| Rollup     | Эффективный для сборки библиотек, хорош для tree shaking              |
| Vite       | Использует ES-модули, очень быстрый dev-сервер, минимальные настройки |
| Webpack    | Гибкий с обширной экосистемой, но сложнее в настройке                 |

---

Источник: [Что такое Webpack — hackfrontend](https://www.hackfrontend.com/docs/general-questions/webpack)
