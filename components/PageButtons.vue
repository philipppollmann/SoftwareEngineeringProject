<template>
  <ul>
    <li>
      <a href="https://coveryourwalls.de/" class="Button" style="--clr: #ff8800">
        <span>HOME</span>
        <i></i>
      </a>
    </li>
    <li>
      <a href="https://coveryourwalls.de/collections/poster" class="Button" style="--clr: #ffd900">
        <span>Poster</span>
        <i></i>
      </a>
    </li>
    <li>
      <a href="https://coveryourwalls.de/pages/uber-uns" class="Button" style="--clr: #ff8800">
        <span>Über uns</span>
        <i></i>
      </a>
    </li>
    <li>
      <a href="https://coveryourwalls.de/pages/contact" class="Button" style="--clr: #ff8800">
        <span>Kontakt</span>
        <i></i>
      </a>
    </li>
    <li>
      <a href="https://coveryourwalls.de/pages/faq" class="Button" style="--clr: #ff8800">
        <span>FAQ</span>
        <i></i>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'PageButtons'
}
</script>

<style lang="css">
ul{
  float: right;
  margin-right: 20px;
}

ul li{
  display: inline-block;
  line-height: 70px;
  margin: 0 50px;
}

ul li a{
  color: white;
  font-size: 17px;
  text-transform: uppercase;
}

.Button{
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
}

.Button:hover{
  color: var(--clr);
  background: var(--clr);
  letter-spacing: 0.25em;
  box-shadow: 0 0 35px var(--clr);
}

.Button::before{
  content: '';
  position: absolute;
  inset: 2px;
  background-color: #1F1E1E;
}
.Button span{
  position: relative;
  z-index: 1;
}

.Button i{
  position: absolute;
  inset: 0;
  display: block;
}

.Button i::before{
  content: '';
  position: absolute;
  top: 0;
  left: 80%;
  width: 10px;
  height: 4px;
  background: #1F1E1E;
  transform: translateX(-50%) skewX(325deg);
  transition: 0.5s;
}

.Button:hover i::before{
  width: 20px;
  left: 20%;
}

.Button i::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 80%;
  width: 10px;
  height: 4px;
  background: #1F1E1E;
  transform: translateX(-50%) skewX(325deg);
  transition: 0.5s;
}

.Button:hover i::after{
  width: 20px;
  right: 20%;
}

</style>