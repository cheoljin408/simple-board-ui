<template>
  <el-container>
    <el-main class="p-0">
      <el-descriptions :title="post.content">
        <el-descriptions-item label="작성자">김철진</el-descriptions-item>
        <el-descriptions-item label="날짜">2022-08-15 00:00</el-descriptions-item>
      </el-descriptions>
      <el-divider class="m-0"></el-divider>
      <div class="mt-3">
        {{ post.content }}
      </div>
    </el-main>
  </el-container>
  <!--<el-descriptions title="User Info">
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
  </el-descriptions>-->
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const post = ref({})

onMounted(() => {
  init();
});

const init = () => {
  getAllPost();
};

const getAllPost = async () => {
  await axios.get(`http://localhost:8080/post/${useRoute().params.postId}`).then(response => {
    console.log(response.data)
    post.value = response.data
    console.log(post.value)
  });
};

</script>

<style scoped>

</style>