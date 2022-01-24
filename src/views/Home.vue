<template>
  <div class="home Container">
    <h1 class="ml1" ref="ml1">
      <span class="text-wrapper" ref="textWrapper">
        <span class="line line1" ref="lineLine1"></span>
        <span class="letters" ref="letters">購物車網站</span>
        <span class="line line2" ref="lineLine2"></span>
      </span>
    </h1>
    <h4><a href="https://prezi.com/view/Wwh0ajJxJx7137RzVFba/" class="link-info" target="_blank" style="text-decoration:none">投影片</a></h4>
  </div>
</template>
<script>
  import { translate, translate1, translate2 } from "../animate";

  export default {
    data() {
      return {
        show: true,
        isLogin: false,
      };
    },
    updated(){
      this.letterTranslate();
    },
    mounted(){
      this.letterTranslate();
    },
    methods:{
      letterTranslate: function(){      
        let textWrapper = document.querySelector('.ml1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        translate('.ml1 .letter');
        translate1(this.$refs.lineLine1);
        translate1(this.$refs.lineLine2);
        translate2(this.$refs.lineLine1);
        translate2(this.$refs.lineLine2);
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .home{
    text-align: center;
  }
  .ml1 {
  font-weight: 900;
  font-size: 3.5em;
  }
  .ml1 .letter {
    display: inline-block;
    line-height: 1em;
  }
  .ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }
  .ml1 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #2c3e50;
    transform-origin: 0 0;
  }
  .ml1 .line1 { top: 0; }
  .ml1 .line2 { bottom: 0; }
  a {
    /* left: 50%; */
    bottom: 70px;
  }
</style>
