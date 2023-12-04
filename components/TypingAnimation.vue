<template>
  <div>
    <span>{{ typedText }}<span v-if="showCursor">|</span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "It can be a black and white picture with a Japan look. The picture could show a house with a lake.",
      typedText: "",
      currentIndex: 0,
      typingSpeed: 25,
      showCursor: true,
    };
  },
  mounted() {
    this.typeText();
    this.startCursorBlinking();
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.text.length) {
        setTimeout(() => {
          this.typedText += this.text[this.currentIndex];
          this.currentIndex++;
          this.typeText();
        }, this.typingSpeed);
      } else {
        setTimeout(() => {
          this.typedText = "";
          this.currentIndex = 0;
          this.typeText();
        }, 10000);
      }
    },
    startCursorBlinking() {
      setInterval(() => {
        this.showCursor = !this.showCursor;
      }, 500);
    },
  },
};
</script>
