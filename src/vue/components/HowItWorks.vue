<template>
  <div id="HowItWorks">
    <vue-aos animation-class="fadeIn animated">
      <div><p class="text-center text-7xl font-bold title-font text-purple-900 mt-5" data-aos="fade">How It Works</p></div>
    </vue-aos>
    <p class="text-center text-xl font-bold title-font text-purple-500 mt-5" data-aos="flip-left">New times requires new ways of working.</p>
    <p class="text-center text-xl font-bold title-font text-purple-500 mt-5" data-aos="flip-right">This is how we create fresh products for you</p>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-100 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/images/Avatar-1.png" data-aos="fade-down-right" data-aos-duration="2000">
            </div>
            <div class="rounded-2xl shadow-lg p-4">
              <h2 class="text-center text-xl font-bold title-font text-purple-900 mt-5">Planning</h2>
              <p class="text-base font-bold text-purple-600 leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-100 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/images/Avatar-4.png" data-aos="fade-down" data-aos-duration="2000">
            </div>
            <div class="rounded-2xl shadow-lg p-4">
              <h2 class=" text-center text-xl font-bold title-font text-900 mt-5 blue">Designing</h2>
              <p class="text-base font-bold leading-relaxed mt-2 blue">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-100 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/images/Avatar-3.png" data-aos="fade-down" data-aos-duration="2000">
            </div>
            <div class="rounded-2xl shadow-lg p-4">
              <h2 class=" text-center text-xl font-bold title-font text-900 mt-5 yellow">Coding</h2>
              <p class="text-base font-bold leading-relaxed mt-2 yellow">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-100 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/images/Avatar-2.png" data-aos="fade-down-left" data-aos-duration="2000">
            </div>
            <div class="rounded-2xl shadow-lg p-4">
              <h2 class="text-center text-xl font-bold title-font text-gray-900 mt-5 aqua">Executing</h2>
              <p class="text-base font-bold leading-relaxed mt-2 aqua">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueAos from 'vue-aos'

export default {
  name: "HowItWorks",
  components: {
    VueAos
  }
}
</script>

<style scoped>
.yellow{
  color:#F7A833;
}
.aqua{
  color:#AACBFF;
}
.blue{
  color:#4F43FF;
}
</style>