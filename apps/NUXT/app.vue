<template>
  <NuxtLayout>
    <div class="flex p-6 w-full pt-20">
      Content
      
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// Базовый service для fetch
abstract class BaseService {
  abstract getData(): Promise<any>
}

// Расширяем конкретным сервисом
class UserService extends BaseService {
  async getData() {
    return await $fetch('/api/users')
  }
}
</script>

<style scoped></style>
