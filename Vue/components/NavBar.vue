<template>
  <div id="NavBar">
    <header class="text-purple-500 bg-white-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-purple mb-4 ml-10 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">tailblocks</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5">First Link</a>
          <a class="mr-5">Second Link</a>
          <a class="mr-5">Third Link</a>
          <a class="mr-5">Fourth Link</a>
        </nav>
        <p class="mr-5">+3809127413</p>
        <button class="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-black-700 rounded-2xl text-white mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <video autoplay muted loop id="HeaderVideo">
      <source src="/video/BGHead.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>