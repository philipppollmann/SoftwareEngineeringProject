<template>
  <div>
    <div class="flex justify-center items-center h-screen">

      <div class="bg-gray-500 border-gray-800 border-2 rounded-lg w-96 h-auto overflow-hidden text-center">

        <div class="relative inline-block text-left p-7">
          <p>Select your category:</p>
          <select v-model="category" class="text-2xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option value="japan">Japan</option>
            <option value="nature">Nature</option>
            <option value="car">Car</option>
          </select>
        </div>

        <p>Select your preferred color:</p>
        <div class="relative inline-block text-left p-7">
          <select v-model="color" class="text-2xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="colorful">Colorful</option>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="grey">Grey</option>
          </select>
        </div>
        <br/>

        <button @click="submitForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto p-7">
          Generate my personal image
        </button>
        <br/>

        <loading-animation v-if="loading"></loading-animation>

        <img v-if="!loading" :src="image" :alt="color" class="h-96 object-contain cursor-pointer items-center mx-auto"/>
        <br/>

        <button @click="downloadImage" class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto p-7 mb-3.5">
          Download the image
        </button>
      </div>
    </div>
  </div> <br/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { matchImage } from '@/server/ImagePreferenceMatcherAI';

export default defineComponent({
  data() {
    return {
      category: 'japan',
      color: 'white',
      image: '',
      loading: false,
    };
  },
  methods: {
    submitForm() {
      const userInput = {
        category: this.category,
        color: this.color,
      };

      console.log('Benutzereingabe:', userInput);

      this.loading = true;

      setTimeout(() => {
        this.image = matchImage(userInput.color, userInput.category);
        this.loading = false;
        console.log(this.image);
      }, 5000);
    },
    downloadImage() {
      if (this.image) {
        const link = document.createElement('a');
        link.href = this.image;

        link.download = 'downloaded_image';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      }
    }
  },
  name: 'AiImageGenerator',
});
</script>


<style>

</style>