<template>

  <div class="socialmedia">
    <div class="icon facebook">
      <div class="tooltip">Facebook</div>
      <span>
        <a href="https://www.facebook.com">
          <img src="https://www.svgrepo.com/download/3885/facebook.svg" alt="Facebook" class="w-8 h-8 mt-3 ml-3">
        </a>
      </span>
    </div>

    <div class="icon twitter flex flex-col items-center">
      <div class="tooltip">Twitter</div>
        <span>
          <a href="https://twitter.com/PhilippPollmann">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8dc5431091769.5640f77be5837.png" alt="X" class="w-15 mt-2 ml-0.5"/>
          </a>
        </span>
    </div>


    <div class="icon instagram">
      <div class="tooltip">Instagram</div>
      <span>
        <a href="https://www.instagram.com/tech.philipp/">
          <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="X" class="w-8 h-8 mt-3 ml-3.5" >
        </a>
      </span>
    </div>

    <div class="icon github">
      <div class="tooltip">Github</div>
      <span>
        <a href="https://github.com/philipppollmann">
          <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="Instagram" class="w-8 h-8 mt-3 ml-3.5">
        </a>
      </span>
    </div>

    <div class="icon linkedin">
      <div class="tooltip">Linked-In</div>
      <span>
        <a href="https://www.linkedin.com/in/philipp-pollmann-5a3754206/">
          <img src="https://www.svgrepo.com/show/112615/linkedin.svg" alt="LinkedIn" class="w-8 h-8 mt-3 ml-3.5">
        </a>
      </span>
    </div>

    <div class="icon xing">
      <div class="tooltip">Xing</div>
      <span>
        <a href="https://www.xing.com/profile/Philipp_Pollmann5/cv">
          <img src="https://cdn-icons-png.flaticon.com/512/39/39554.png" alt="Xing" class="w-8 h-8 mt-3 ml-3.5">
        </a>
      </span>
    </div>

    <div class="icon youtube">
      <div class="tooltip">YouTube</div>
      <span class="flex items-center justify-center">
        <a href="https://www.youtube.com">
          <img src="https://www.svgrepo.com/show/122166/youtube.svg" alt="Youtube" class="w-8 h-8 mt-3 ml-3.5">
        </a>
      </span>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'SocialMediaLinks'
}
</script>

<style>
.socialmedia{
  display: inline-flex;
  position: relative;
  margin-left: 28%;
  padding: 10px;
  width: 50%;
}

.socialmedia .icon{
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.socialmedia .icon .tooltip{
  position: absolute;
  top: 0px;
  background: #fff;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 18px;
  border-radius: 25px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.socialmedia .icon:hover .tooltip{
  top: -70px;
  opacity: 1;
  pointer-events: auto;
}

.socialmedia .icon .tooltip::before{
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.socialmedia .icon:hover span,
.socialmedia .icon:hover .tooltip{
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
}

.socialmedia .facebook:hover span,
.socialmedia .facebook:hover .tooltip,
.socialmedia .facebook:hover .tooltip::before{
  background: #3b5999;
}

.socialmedia .twitter:hover span,
.socialmedia .twitter:hover .tooltip,
.socialmedia .twitter:hover .tooltip::before{
  background: #1DA1F2;
}

.socialmedia .instagram:hover span,
.socialmedia .instagram:hover .tooltip,
.socialmedia .instagram:hover .tooltip::before{
  background: #E1306C;
}

.socialmedia .github:hover span,
.socialmedia .github:hover .tooltip,
.socialmedia .github:hover .tooltip::before{
  background: #333;
}

.socialmedia .linkedin:hover span,
.socialmedia .linkedin:hover .tooltip,
.socialmedia .linkedin:hover .tooltip::before{
  background: #0E76A8;
}

.socialmedia .xing:hover span,
.socialmedia .xing:hover .tooltip,
.socialmedia .xing:hover .tooltip::before{
  background: #005a5f;
}

.socialmedia .youtube:hover span,
.socialmedia .youtube:hover .tooltip,
.socialmedia .youtube:hover .tooltip::before{
  background: #FF0000;
}

.socialmedia .icon span{
  position: relative;
  height: 60px;
  width: 60px;
  display: block;
  z-index: 2;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

</style>