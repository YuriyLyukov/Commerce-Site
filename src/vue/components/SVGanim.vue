<template>
  <div id="SVGanim">
    <div class="BGanim bg-indigo-300">
      <div data-aos="fade-left" data-aos-duration="1500" class="textOver font-bold">
        Lorem ipsum.
        <br>Lorem ipsum dolor.
        <br>Lorem ipsum.
        <p class="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, tenetur.</p>
      </div>
      <img class="object-cover h-100vh w-full" src="/images/backgroundanim.png" alt="">
      <div class="svg-cube1">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path id="Vector" d="M480 112L256 0L32 112V400L256 512L480 400V112Z" fill="white"/>
            <path id="Vector_2" d="M256 224L32 112V400L256 512L480 400V112L256 224Z" fill="#E7A3C1"/>
            <path id="Vector_3" d="M256 224V512L480 400V112L256 224Z" fill="#FFC8EB"/>
          </g>
        </svg>
      </div>
      <div class="svg-cube2">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="cube2">
            <path id="Vector" d="M480 112L256 0L32 112V400L256 512L480 400V112Z" fill="#FFFDFF"/>
            <path id="Vector_2" d="M256 224L32 112V400L256 512L480 400V112L256 224Z" fill="#9189C8"/>
            <path id="Vector_3" d="M256 224V512L480 400V112L256 224Z" fill="#B4A8FF"/>
          </g>
        </svg>
      </div>
      <div class="svg-cube3">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="cube3">
            <path id="Vector" d="M480 112L256 0L32 112V400L256 512L480 400V112Z" fill="#6F5DFF"/>
            <path id="Vector_2" d="M256 224L32 112V400L256 512L480 400V112L256 224Z" fill="#4137DE"/>
            <path id="Vector_3" d="M256 224V512L480 400V112L256 224Z" fill="#4F43FF"/>
          </g>
        </svg>
      </div>
      <div class="svg-cube4">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="cube4">
            <path id="Vector" d="M480 112L256 0L32 112V400L256 512L480 400V112Z" fill="white"/>
            <path id="Vector_2" d="M256 224L32 112V400L256 512L480 400V112L256 224Z" fill="#8F85E0"/>
            <path id="Vector_3" d="M256 224V512L480 400V112L256 224Z" fill="#BCB2FF"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuesax from 'vuesax';
import {TimelineLite, gsap} from 'gsap';
import ScrollTriger from 'gsap/ScrollTrigger';


Vue.use(Vuesax,{

})
export default {
  name: "SVGanim",
  data:() => ({
    value: ''
  }),
  mounted(){
    gsap.registerPlugin(ScrollTriger);
    gsap.timeline({
      scrollTrigger: {
        trigger: ".BGanim",
        start: "top center",
        end: "center center",
        scrub: true
      }
    })
        .to(".svg-cube1",  { yPercent: 20 }, 0)
        .to(".svg-cube2", { xPercent:  45 }, 0)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".BGanim",
        start: "40% center",
        end: "70% center",
        scrub: true
      }
    })
        .to(".svg-cube3", { yPercent: -100 }, 0)
  }
}
</script>

<style scoped>
img{
  display: block;
}
.BGanim{
  position: relative;
  display: inline-block;
}
p{
  font-size: 1.5vw;
}
.textOver{
  position: absolute;
  top: 30%;
  left: 5%;
  transform: translate( -50%, -50% );
  z-index: 1;
  color: white;
  font-size: 5vw;
}
.textOver2{
  font-size: 2vw;
}
.svg-cube1 {
  position:absolute;
  width: 15vw;
  height: 15vw;
  top: 15%;
  left: 80%;
  transform: translate( -50%, -50% );
  text-align: center;
  z-index: 1;
}
.svg-cube2 {
  position:absolute;
  overflow: hidden;
  width: 15vw;
  height: 15vw;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
  text-align: center;
  z-index: 100;
}
.svg-cube3 {
  position:absolute;
  overflow: hidden;
  width: 15vw;
  height: 15vw;
  top: 85%;
  left: 80%;
  transform: translate( -50%, -50% );
  text-align: center;
  z-index: 100;
}
.svg-cube4 {
  position:absolute;
  overflow: hidden;
  width: 15vw;
  height: 15vw;
  top: 65%;
  left: 90%;
  transform: translate( -50%, -50% );
  text-align: center;
  z-index: 99;
}
</style>