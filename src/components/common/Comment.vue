<template>
  <div class="mt-10">
    <div>
      <span class="mr-2 text-lg font-bold">댓글</span>
      <span class="text-lg font-bold text-indigo-500">0</span>
    </div>
    <div class="mt-6 flex justify-between gap-x-2">
      <input type="text" placeholder="댓글을 작성해보세요"
             class="mr-2 w-full rounded-md border-solid ring-1 ring-gray-300 p-2 placeholder:text-gray-500 focus:ring-1 focus:ring-indigo-500">
      <button class="w-16 rounded-md bg-gray-500 hover:bg-gray-600 text-white py-2 px-2 shadow-sm">취소</button>
      <button class="w-16 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-2 shadow-sm">등록
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
}
</script>

<style scoped>

</style>