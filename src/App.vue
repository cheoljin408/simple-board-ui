<script setup>
import Header from './components/common/Header.vue'
import Footer from "./components/common/Footer.vue"
</script>

<template>
  <Header/>
  <div class="mx-auto max-w-4xl">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped>
</style>
