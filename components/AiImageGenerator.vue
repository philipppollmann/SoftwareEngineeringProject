<template>
  <div class="m-5 bg-gray-500  border-gray-800 border-2 rounded-lg w-48 h-48 overflow-hidden">
    <img :src="imagePath" alt="Icon" class="w-40 h-40 object-contain cursor-pointer items-center"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: "/Users/philipppollmann/Github/SoftwareEngineeringProject/assets/img/Butterfly.jpeg",
    };
  },
  name: 'AiImageGenerator',
};
</script>
