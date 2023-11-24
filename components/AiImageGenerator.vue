<template>
  <img src="../assets/img/banner.png" alt="Banner">
  <div class="m-5 bg-gray-500  border-gray-800 border-2 rounded-lg w-48 h-48 overflow-hidden">
    <img :src="birdImg" alt="Icon" class="w-40 h-40 object-contain cursor-pointer items-center"/>
  </div>
</template>

<script>
import birdImage from '~/assets/img/bird.jpg'

export default {
  data() {
    return {
      imagePath: birdImage
    };
  },
  name: 'AiImageGenerator',
};
</script>
