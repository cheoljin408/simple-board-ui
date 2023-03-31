<template>
  <div class="mt-16">
    <div class="mt-2">
      <input v-model="requestData.title" type="text" placeholder="제목을 작성해주세요"
             class="block w-full rounded-md border-0 p-2 placeholder:text-gray-500 focus:ring-1 focus:ring-indigo-500 text-xl">
    </div>
  </div>
  <div class="mt-5">
    <div class="mt-2">
      <textarea v-model="requestData.content" rows="20" placeholder="게시글 내용을 작성해주세요"
                class="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-500 focus:outline-none"/>
    </div>
  </div>
  <div class="mt-6 flex items-center justify-end gap-x-4">
    <button class="rounded-md bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 shadow-sm">취소</button>
    <button @click="submit" class="rounded-md bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 shadow-sm">등록
    </button>
  </div>
</template>

<script>
import {ref} from 'vue'
import {registerPost} from "../api/post.js";

export default {
  name: "RegisterBoard",
  setup() {
    const requestData = ref({
      title: '',
      content: '',
    })

    const submit = async () => {
      console.log('requestData: ', requestData.value)
      await registerPost(requestData.value);
    }

    return {
      requestData,
      submit,
    }
  }
}
</script>

<style scoped>

</style>