<template>
  <div id="SVGpath">
    <section class="animation">
      <div class="blob1"><img data-aos="fade-right" class="watch" src="/images/laptop.png" alt=""></div>
      <div class="blob2"><img data-aos="fade-left" class="watch" src="/images/watch.png" alt=""></div>
      <div class="blob3"><img data-aos="fade-right" class="telephone" src="/images/telephone.jpg" alt=""></div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 1200">

        <path class="theLine"
            d="M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
            fill="none" stroke="#B434F7" stroke-width="10px" />

        <text class="text01" x="650" y="30">Lorem ipsum dolor sit amet.</text>
        <text class="text02" x="30" y="550">Lorem ipsum dolor sit amet, consectetur.</text>
        <text class="text03" x="650" y="1100">Lorem ipsum dolor sit.</text>

        <circle class="ball ball01" r="20" cx="25" cy="25"></circle>
        <circle class="ball ball02" r="20" cx="600" cy="50"></circle>
        <circle class="ball ball03" r="20" cx="450" cy="540"></circle>
        <circle class="ball ball04" r="20" cx="650" cy="1000"></circle>

      </svg>
    </section>
  </div>
</template>

<script>
import {TweenLite, TimelineLite, gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
name: "SVGpath",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
    gsap.defaults({ease: "none"});


    gsap.set(".ball", {xPercent: -50, yPercent: -50})

    var tl = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }})
        .to(".ball02", {scale:[2]}, 0.01)
        .to(".ball03", {scale:[2]}, 0.35)
        .to(".ball04",{scale:[2]}, 0.75)
        .to(".text01", {scale:[1]}, 0.01)
        .to(".text02", {scale:[1]}, 0.35)
        .to(".text03",{scale:[1]}, 0.75)

    var action = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center"
      }})
        .to(".ball01", {duration: 0.01, autoAlpha: 1})
        .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
        .add(tl, 0);



  }
}
</script>

<style scoped>
.animation{
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  overflow: hidden;
}
svg {
  max-width: 1200px;
  overflow: visible;
  margin-top: 20%;
  margin-left: 15%;
  margin-bottom: 20%;
}

.ball {
  fill: white;
  visibility: hidden;
}
text {
  fill: white;
  font-size: 15px;
  font-family: "Signika Negative", sans-serif;
  visibility: hidden;
}
.laptop {
  margin-left: 5%;
  display: block;
}
.watch{
  display: block;
  height: 30vw;
  overflow: hidden;
}
.telephone{
  margin-left: 5vw;
  height: 30vw;
  overflow: hidden;
}
.blob1 {
  position: absolute;
  background: #8C0EDD;
  border-radius: 50%;
  margin: 40px;
  height: 30vw;
  width: 30vw;
  left: 5vw;
  z-index: 10000;
  box-shadow: 0 0 0 0 rgba(180, 52, 247, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
.blob2 {
  overflow: hidden;
  position: absolute;
  background: #8C0EDD;
  border-radius: 50%;
  margin-top: 45vw;
  height: 30vw;
  width: 30vw;
  left: 68vw;
  z-index: 10000;
  box-shadow: 0 0 0 0 rgba(180, 52, 247, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
.blob3 {
  position: absolute;
  background: #8C0EDD;
  border-radius: 50%;
  margin-top: 95vw;
  height: 30vw;
  width: 30vw;
  left: 5vw;
  z-index: 10000;
  box-shadow: 0 0 0 0 rgba(180, 52, 247, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(180, 52, 247, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 3vw rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>