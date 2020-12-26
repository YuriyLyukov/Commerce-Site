<template>
  <div id="SVGpath">
    <section class="animation">
      <img id="paperplaneid" class="paperplane" src="/images/logo.png" alt="paperplane">
    </section>
  </div>
</template>

<script>
import {TweenLite, TimelineLite, gsap} from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollMagic from 'scrollmagic';

export default {
name: "SVGpath",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    const tween = gsap.timeline();

    tween.to("#paperplaneid", {
      duration: 20,
      ease: "power1.inOut",
      /*  motionPath: {
          path: [
            {x: 100, y: -20},
            {x:200,y:150},
            {x:1200,y:100}
            ], // you probably want more points here...or just use an SVG <path>!
          curviness: 3,
          autoRotate: true
        }*/
      motionPath: "M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
    });

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '.animation',
      duration: 1805,
      triggerHook: 0.7
    })
        .setTween(tween)
        .addTo(controller);

  }
}
</script>

<style scoped>
.animation{
  height: 250vh;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  position: relative;
  overflow: hidden;
}
.paperplane{
  position: absolute;
  height: 100px;
  top:10%;
  left:25%;
}
</style>