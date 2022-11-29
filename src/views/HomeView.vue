<template>
  <div align="right">
    <el-button type="primary" @click="registerPage">글쓰기</el-button>
  </div>
  <el-divider/>
  <div v-if="postList.length">
    <template v-for="(post, index) in postList" :key="index">
      <div @click="detailPost(index)">
        <div>
          <h4>{{ post.title }}</h4>
        </div>
        <div class="text-black-50 text-truncate">
          {{ post.content }}
        </div>
        <div class="text-sm-end text-black-50 mt-2">
          {{ post.createdDate }}
        </div>
      </div>
      <el-divider/>
    </template>
  </div>
  <div v-else>
    <el-empty/>
    <el-divider/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";

const postList = ref([])

onMounted(() => {
  init()
})

const init = () => {
  getAllPost()
}

const getAllPost = async () => {
  await axios.get("http://localhost:8080/posts").then(response => {
    postList.value = response.data.postList
  })
  console.log('postList: ', postList.value)
}

const registerPage = () => {
  router.push('/posts/register')
}

const detailPost = (index: any) => {
  const targetPost = postList.value[index]
  console.log('target post: ', targetPost)
  router.push(`/posts/${targetPost.postId}`)
}
</script>