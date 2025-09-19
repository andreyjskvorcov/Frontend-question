в стилях прописываем font-size

```css
html {
  scroll-behavior: smooth;
  font-size: 0.0694445vw;

  @media ($media-sm) {
    font-size: 0.266667vw;
  }
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  width: 100vw;
  font: $text-body-m;
  background-color: $color-black;
  font-size: 0.0694445vw;

  &.is-hidden {
    overflow: hidden;
  }

  @media ($media-sm) {
    font: $text-body-m-mobile;
    font-size: 0.266667vw;
  }
}
```

и используем в компонентах

```css
.block {
  padding: 12rem;
  font-size: 12rem;
  ...;
}
```
