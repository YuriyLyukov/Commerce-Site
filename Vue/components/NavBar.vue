<template>
  <div id="NavBar">

    <header class="text-gray-700 body-font">


      <div class="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="p-4 flex flex-row items-center justify-between">
            <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a>
            <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0  md:flex md:justify-end md:flex-row">
            <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Blog</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Portfolio</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact</a>
            <div @click.away="open = false" class="relative">
              <button @click="open = !open" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>Dropdown</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <!--      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">-->
      <!--        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">-->
      <!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">-->
      <!--            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>-->
      <!--          </svg>-->
      <!--          <span class="ml-3 text-xl">tailblocks</span>-->
      <!--        </a>-->
      <!--        <nav class="md:ml-auto md:mr-auto h-flex flex-wrap items-center text-base justify-center ">-->
      <!--          <button class="inline-block px-6 py-2 text-xs mr-10 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"><a href="#" >Home</a></button>-->
      <!--          <button class="inline-block px-6 py-2 text-xs mr-10 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"><a href="#" >Home</a></button>-->
      <!--          <button class="inline-block px-6 py-2 text-xs mr-10 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"><a href="#" >Home</a></button>-->
      <!--          <button class="inline-block px-6 py-2 text-xs mr-10 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"><a href="#" >Contact us</a></button>-->
      <!--        </nav>-->

      <!--        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button-->
      <!--          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">-->
      <!--            <path d="M5 12h14M12 5l7 7-7 7"></path>-->
      <!--          </svg>-->
      <!--        </button>-->
      <!--      </div>-->
    </header>
    <div id="hero">


      <div class="texture"></div>

      <video
          loop
          muted
          autoplay
          preload="auto"
      >
        <source src="/video/BGHead.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>




    </div>

  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return{
      open: false

    }
  }
}

</script>

<style scoped>

</style>