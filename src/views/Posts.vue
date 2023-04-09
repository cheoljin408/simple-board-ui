<template>
  <div>
    <div class="mt-16 p-5 bg-gray-200 rounded-lg">
      <p class="text-xl font-bold mb-2">커뮤니티</p>
      <p>게시글을 통해 다양한 사람들과 생각을 공유해보세요👋</p>
    </div>
  </div>
  <div>
    <div class="mt-10 flex justify-between gap-x-2">
      <input type="text" placeholder="원하는 게시글을 검색해보세요"
             class="mr-2 block w-full rounded-md border-solid ring-1 ring-gray-300 p-2 placeholder:text-gray-500 focus:ring-1 focus:ring-indigo-500">
      <button type="button" class="rounded-md w-16 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-2 shadow-sm">
        검색
      </button>
    </div>
  </div>
  <div class="mt-10 flex justify-end">
    <button type="button" class="rounded-md w-fit bg-gray-800 hover:bg-gray-900 text-white py-2 px-2 shadow-sm"
            @click="clickNewPost">글 쓰기
    </button>
  </div>
  <div class="mt-4">
    <div v-if="postsData?.pagingUtil?.totalElements">
      <hr/>
      <div v-for="(post, index) in postsData.postList" :key="index" class="border-t-gray-300">
        <div class="my-5 cursor-pointer" @click="detailPost(post.postId)">
          <p class="text-xl font-bold mb-2">{{ post.title }}</p>
          <p class="text-gray-500">{{ post.content }}</p>
          <div class="flex justify-end text-gray-500">
            <p>{{ post.createdDate }}</p>
          </div>
        </div>
        <hr/>
      </div>
      <Pagination :pagingUtil="postsData.pagingUtil" @changePage="changePage" />
    </div>
    <div v-else class="my-14 p-6 border rounded-lg flex justify-center items-center text-center text-gray-600">
      <div>
        <p class="mb-2 text-xl font-bold">
          게시글이 존재하지 않습니다.
        </p>
        <p class="text-lg">
          첫 번째 게시글의 작성자가 되어보세요!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onBeforeMount} from "vue"
import {getPosts} from "../api/post.js"
import {useRouter} from 'vue-router'
import Pagination from "../components/common/Pagination.vue";

export default {
  name: "Posts",
  components: {Pagination},
  setup() {
    // data
    const router = useRouter()
    const postsData = ref({})

    // created
    getPosts().then(response => postsData.value = response.data)

    // lifecycle
    onBeforeMount(() => {
      console.log(postsData.value)
    })

    // method
    const clickNewPost = () => {
      router.push('/new/post')
    }

    const detailPost = (postId) => {
      console.log(postId)
      router.push(`/posts/${postId}`)
    }

    const changePage = async (page) => {
      console.log(`changePage ${page}`)
      const requestParam = { page }
      await getPosts(requestParam).then(response => postsData.value = response.data)
      console.log(postsData.value)
    }

    return {
      postsData,
      clickNewPost,
      detailPost,
      changePage,
    }
  }
}
</script>

<style scoped>

</style>