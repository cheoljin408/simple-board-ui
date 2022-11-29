<template>
  <h3>{{ post.title }}</h3>
  <div class="d-flex justify-content-between">
    <div class="align-self-center">
      <span>김철진</span>
      <span class="m-2">/</span>
      <span>{{ post.createdDate }}</span>
    </div>
    <div>
      <el-button type="warning" @click="goUpdate">수정</el-button>
      <el-button type="danger" @click="goDelete">삭제</el-button>
    </div>
  </div>
  <el-divider/>
  <div style="white-space: pre-wrap">
    {{ post.content }}
  </div>
  <el-divider/>
  <div class="float-end">
    <el-button type="info" @click="goList">목록</el-button>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import router from "@/router";

const post = ref({})

onMounted(() => {
  init()
})

const init = () => {
  getPost()
}

const getPost = async () => {
  await axios.get(`http://localhost:8080/posts/${useRoute().params.postId}`).then(response => {
    console.log(response.data)
    post.value = response.data
    console.log(post.value)
  })
}

const goUpdate = () => {
  router.push(`/posts/update/${post.value.postId}`)
}

const goDelete = () => {
  axios.delete(`http://localhost:8080/posts/${post.value.postId}`).then(response => {
    console.log(response.status)
    router.replace(`/`)
  })
}

const goList = () => {
  router.back()
}

</script>

<style scoped>

</style>