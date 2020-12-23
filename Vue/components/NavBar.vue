<template>
  <div id="NavBar">
    <header class="text-purple-500 bg-white-900 body-font">
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="/video/BGHead.mp4" type="video/mp4">
      </video>
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-purple mb-4 ml-10 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">tailblocks</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold text-xl rounded-3xl">
          <button class="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-black-700 rounded-3xl text-purple mt-4 md:mt-0"><a class="">First Link</a>
          </button>
          <button class="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-black-700 rounded-3xl text-purple mt-4 md:mt-0"><a class="">Second Link</a>
          </button>
          <button class="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-black-700 rounded-3xl text-purple mt-4 md:mt-0"><a class="">Third Link</a>
          </button>
          <button class="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-black-700 rounded-3xl text-purple mt-4 md:mt-0"><a class="">Fourth Link</a>
          </button>
        </nav>
        <button class="inline-flex items-center bg-purple-800 border-0 py-2 px-3 focus:outline-none hover:bg-black-700 rounded-3xl text-white mt-4 md:mt-0">Contact us
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.intro{
  max-height: 100vh;
  overflow: hidden;

}

.video{
  position: absolute;
  padding-bottom: 56.25%;


}

.vide__media{
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

</style>