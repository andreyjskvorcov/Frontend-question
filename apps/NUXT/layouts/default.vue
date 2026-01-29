<template>
  <div class="common-layout">
    <el-header
      class="mx-auto flex items-center justify-between p-6 bg-white shadow-sm w-full fixed"
    >
      Header
    </el-header>

    <slot></slot>

    <el-footer class="footer flex p-6 w-full">Footer</el-footer>
  </div>
</template>

<script lang="ts" setup></script>
