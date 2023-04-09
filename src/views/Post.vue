<template>
  <div class="mt-16">
    <div class="mb-4">
      <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>
      <span class="text-gray-500">{{ post.createdDate }}</span>
    </div>
    <hr/>
    <div class="mt-4 mb-10">
      {{ post.content }}
    </div>
  </div>
  <hr/>
  <Comment />
</template>

<script>
import { useRoute } from "vue-router"
import { onBeforeMount, ref } from "vue"
import { getPost } from "../api/post.js"
import Comment from "../components/common/Comment.vue";

export default {
  name: "Post",
  components: {Comment},
  setup() {
    const route = useRoute()
    const post = ref({})

    onBeforeMount(async () => {
      const requestData = {
        postId: route.params.postId
      }
      const response = await getPost(requestData);
      post.value = response.data
      console.log(post.value)
    })

    return {
      post,
    }
  }
}
</script>

<style scoped>

</style>