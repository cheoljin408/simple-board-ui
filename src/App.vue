<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <el-menu
      class="el-menu-demo mb-5"
      mode="horizontal"
      :ellipsis="false"
  >
    <el-menu-item>BOARD</el-menu-item>
  </el-menu>
  <div class="container-sm">
    <RouterView/>
  </div>
</template>

<style>
</style>