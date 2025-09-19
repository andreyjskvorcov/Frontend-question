# 122. ### Что такое состояние preservation правила in горячая перезагрузка?

Below are the state preservation rules in hot reloading,
     1.When editing the `<template>` of a component, instances of the edited component will re-render in place, preserving all current private state.
     2.When editing the `<script>` part of a component, instances of the edited component will be destroyed and re-created in place.
     3.When editing the `<style>` hot reload operates on its own via vue-style-loader without affecting application state.