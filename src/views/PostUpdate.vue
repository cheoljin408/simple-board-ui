<template>
  <el-form label-position="top">
    <el-form-item label="제목">
      <el-input v-model="post.title"></el-input>
    </el-form-item>
    <el-form-item label="내용">
      <el-input v-model="post.content" type="textarea" rows="12"></el-input>
    </el-form-item>
  </el-form>
  <div class="float-end">
    <el-button type="info" @click="cancel">취소</el-button>
    <el-button type="warning" @click="update">수정</el-button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import router from "@/router";

const route = useRoute()
const post = ref({})
const requestData = ref({})

onMounted(() => {
  init()
})

const init = () => {
  getPost()
}

const getPost = () => {
  axios.get(`http://localhost:8080/posts/${route.params.postId}`).then((response) => {
    post.value = response.data
    console.log('post: ', post.value)
  })
}

const cancel = () => {
  router.back()
}

const update = () => {
  requestData.value = {
    title: post.value.title,
    content: post.value.content
  }
  console.log(requestData.value)
  axios.put(`http://localhost:8080/posts/${post.value.postId}`, requestData.value).then((response) => {
    console.log(response.status)
    router.replace(`/posts/${post.value.postId}`)
  })
}
</script>

<style scoped>

</style>