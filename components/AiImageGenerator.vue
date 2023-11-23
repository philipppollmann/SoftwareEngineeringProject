<template>
  <div class="m-5 bg-gray-500  border-gray-800 border-2 rounded-lg w-48 h-48 overflow-hidden">
    <a :href="projectURL">
      <img :src="imageUrl" alt="Icon" class="w-40 h-40 object-contain cursor-pointer items-center"/>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    caption: String,
    projectURL: String,
  },
};
</script>
