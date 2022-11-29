<template>
  <el-form label-position="top">
    <el-form-item label="제목">
      <el-input v-model="requestData.title"></el-input>
    </el-form-item>
    <el-form-item label="내용">
      <el-input v-model="requestData.content" type="textarea" rows="12"></el-input>
    </el-form-item>
    <el-form-item class="float-end">
      <el-button type="primary" @click="registerPost">등록</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import axios from 'axios'
import {ref} from 'vue'
import router from "@/router";

const requestData = ref({
  title: '',
  content: ''
})

const registerPost = () => {
  axios.post("http://localhost:8080/posts", requestData.value)
      .then(response => {
        console.log(response.data)
        router.replace(`/`)
      })
      .catch(error => {
        console.log(error)
      })
}

</script>

<style scoped>

</style>