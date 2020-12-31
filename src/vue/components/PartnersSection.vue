<template>
  <div id="PartnerSection">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="sm:text-8xl text-4xl font-medium title-font mb-4 text-gray-900">Our Partners</h1>
        </div>
        <div class="flex mt-6 justify-center">
          <div class="w-1/3 h-1 rounded-full bg-indigo-500 inline-flex mb-20"></div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/5 sm:w-1/2 p-4">
            <div class="flex relative hover:scale-110 hover:shadow-xl rounded-full">
              <img class="p-11" src="/images/uber.png" alt="">
            </div>
          </div>
          <div class="lg:w-1/5 sm:w-1/2 p-4">
            <div class="flex relative hover:scale-110 hover:shadow-xl rounded-full">
              <img class="" src="/images/netflix.png" alt="">
            </div>
          </div>
          <div class="lg:w-1/5 sm:w-1/2 p-4">
            <div class="flex relative hover:scale-110 hover:shadow-xl rounded-full">
              <img class="p-8" src="/images/google.png" alt="">
            </div>
          </div>
          <div class="lg:w-1/5 sm:w-1/2 p-4">
            <div class="flex relative hover:scale-110 hover:shadow-xl rounded-full">
              <img class="p-3" src="/images/figma.png" alt="">
            </div>
          </div>
          <div class="lg:w-1/5 sm:w-1/2 p-4">
            <div class="flex relative hover:scale-110 hover:shadow-xl rounded-full">
              <img class="p-8" src="/images/stripe.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuesax from 'vuesax';

export default {
  name: "PartnersSection",
  mounted() {
    Vue.use(Vuesax, {
      colors: {
        primary:'#7559b5',
        success:'rgb(23, 201, 100)',
        danger:'rgb(242, 19, 93)',
        warning:'rgb(255, 130, 0)',
        dark:'rgb(51,41,143)',
      }
    })
  }
}
</script>

<style scoped>
.purplecolor{
  color: purple;
}
</style>