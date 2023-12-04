<template>
  <div>
    <title>Dev - Cover Your Walls AI</title>
    <img src="../public/img/banner.png" alt="Banner">
    <h1>Find your matching Poster:</h1>
    <AiImageGenerator></AiImageGenerator>

    <h1>Generate your own AI Poster</h1>

    <div class="flex">
      <PosterCard image-url="img/anime.jpg"></PosterCard>
      <PosterCard image-url="img/bird.jpg"></PosterCard>
      <PosterCard image-url="img/Butterfly.jpeg"></PosterCard>
      <PosterCard image-url="img/Cars.jpeg"></PosterCard>
      <PosterCard image-url="img/flamingo.jpg"></PosterCard>
      <PosterCard image-url="img/flower.jpg"></PosterCard>
      <PosterCard image-url="img/flowerwhite.jpeg"></PosterCard>
    </div>
    <div class="flex">
      <PosterCard image-url="img/mountains.jpg"></PosterCard>
      <PosterCard image-url="img/anime.jpg"></PosterCard>
      <PosterCard image-url="img/bird.jpg"></PosterCard>
      <PosterCard image-url="img/Butterfly.jpeg"></PosterCard>
      <PosterCard image-url="img/Cars.jpeg"></PosterCard>
      <PosterCard image-url="img/flamingo.jpg"></PosterCard>
      <PosterCard image-url="img/flower.jpg"></PosterCard>
    </div>
  </div>

  <idea-helper></idea-helper>
  <chat-g-p-t-answer></chat-g-p-t-answer>
</template>

<script>

import ChatGPTAnswer from "~/components/ChatGPTAnswer.vue";

export default {
  components: {ChatGPTAnswer}

};
</script>
