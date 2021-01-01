<template>
  <div id="VideoSection">
    <div class="container px-5 py-24 mx-auto w-full h-full md:w-1/2 md:h-1/2 relative">
          <div class="video-mask">
            <video ref="myvideo"
                   src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                   ></video>
          </div>
          <button class="play" @click="play">
            PLAY
          </button>
        </div>
  </div>
</template>

<script>

export default {
  name: "VideoSection",
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    play() {
      if(this.isPlaying == false)
      {
        this.$refs.myvideo.play()
        this.isPlaying = true
      }
      else {
        this.$refs.myvideo.pause()
        this.isPlaying = false
      }
    }
  }
}
</script>

<style scoped>
.play{
  position: absolute;
  left: 100%;
  bottom: 45%;
  transform: translate( -50%, -50% );
  z-index: 30;
}
.video-mask{
  border-radius: 50px;
  overflow: hidden;
}
video {
  width: 100%;
  height: auto;
}
</style>