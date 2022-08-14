<template>
  <el-container>
    <el-main class="p-0">
      <el-table
        :data="postList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="subject"
          label="제목"
          min-width="50">
        </el-table-column>
        <el-table-column
          prop="content"
          label="작성자"
          min-width="25">
        </el-table-column>
        <el-table-column
          prop="createdDate"
          label="날짜"
          min-width="25">
        </el-table-column>
      </el-table>
      <el-button type="primary" class="mt-3 float-end" @click="registerPage">글쓰기</el-button>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import router from "@/router";

const postList = ref([]);

onMounted(() => {
  init();
});

const init = () => {
  getAllPost();
};

const getAllPost = async () => {
  await axios.get("http://localhost:8080/post").then(response => {
    postList.value = response.data.postList;
  });
  console.log(postList.value);
};

const registerPage = () => {
  router.push('/post/register')
}

</script>