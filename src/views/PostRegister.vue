<template>
  <el-container>
    <el-main class="p-0">
      <el-form label-position="top">
        <el-form-item label="제목">
          <el-input v-model="requestData.subject"></el-input>
        </el-form-item>
        <el-form-item label="내용">
          <el-input v-model="requestData.content" type="textarea" rows="12"></el-input>
        </el-form-item>
        <el-form-item class="float-end">
          <el-button type="primary" @click="registerPost">등록</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const requestData = ref({
  subject: '',
  content: ''
})

const registerPost = () => {
  axios.post("http://localhost:8080/post", requestData.value)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

</script>

<style scoped>

</style>