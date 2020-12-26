<template>






  <footer class="text-gray-600 body-font">
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
        </div>
        <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
          </li>
        </ol>

      </div>
    </div>

    <section class="text-white ">
      <div class="container border-b-2 border-fuchsia-600 px-5 py-24 mx-auto flex flex-wrap">
        <h2 class="sm:text-3xl text-2xl text-white font-medium title-font mr-40 mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
        <div class="md:w-2/5 md:pl-6">
          <p class="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan.</p>
          <div class="flex md:mt-4 mt-6">
            <button
                class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
            >
              Get in touch now
            </button>
          </div>
        </div>
      </div>
    </section>



    <div class="container  px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">tailblocks</span>
        </a>
        <p class="mt-2 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus nulla quam rerum similique tempora totam vel veniam vitae voluptate! Accusamus aspernatur cum eligendi eveniet illo inventore, optio quam! Aperiam.</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font text-black font-medium tracking-widest text-2xl mb-3">CATEGORIES</h2>
          <nav class="list-none mb-20">
            <li>
              <a class="text-xl text-white">Home</a>
            </li>
            <li>
              <a class="text-xl text-white">About</a>
            </li>
            <li>
              <a class="text-xl text-white">News</a>
            </li>
            <li>
              <a class="text-xl text-white">Contact</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font text-black font-medium tracking-widest text-2xl mb-3">CATEGORIES</h2>
          <nav class="list-none mb-20">
            <li>
              <a class="text-xl text-white">First Link</a>
            </li>
            <li>
              <a class="text-xl text-white ">Second Link</a>
            </li>
            <li>
              <a class="text-xl text-white">Third Link</a>
            </li>
            <li>
              <a class="text-xl text-white ">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium  text-black tracking-widest text-2xl mb-3">CATEGORIES</h2>
          <nav class="list-none mb-20">
            <li>
              <a class="text-xl text-white ">First Link</a>
            </li>
            <li>
              <a class="text-xl text-white ">Second Link</a>
            </li>
            <li>
              <a class="text-xl text-white ">Third Link</a>
            </li>
            <li>
              <a class="text-xl text-white ">Fourth Link</a>
            </li>
          </nav>
        </div>

      </div>
    </div>
    <div class="footer_lower">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-white text-sm text-center sm:text-left">© 2020 tailblocks —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      </div>
    </div>
  </footer>







</template>

<script>
export default {
  name: "Lower"
}
</script>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
}

</style>