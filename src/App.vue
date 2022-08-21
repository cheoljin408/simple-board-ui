<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <el-container>
    <el-header>
      <RouterLink to="/">Home</RouterLink>
    </el-header>
    <RouterView />
  </el-container>
</template>

<style>
</style>