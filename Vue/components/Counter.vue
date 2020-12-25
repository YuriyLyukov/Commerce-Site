<template>
  <div id="Counter" class="">
    <div class="iCountUp">
      <ICountUp :delay="delay" :endVal="endVal" :options="options" ref="firstcomponent" v-scroll="onReady"/>
    </div>
    <div class="iCountUp-2">
      <ICountUp :delay="delay" :endVal="endVal2" :options="options" ref="secondcomponent" v-scroll="onReady2"/>
    </div>
    <div class="text1">REALIZED PROJECTS</div>
    <div class="text2">QUALIFIED PARTNERS</div>
    <img class="responsive" src="/images/Counter.png" />
  </div>
</template>


<script type="text/babel">
import Vue from 'vue';
import ICountUp from 'vue-countup-v2';

export default {
  name: 'Counter',
  components: {
    ICountUp
  },
  data() {
    return {
      delay: 10000,
      endVal: 200,
      endVal2: 139,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    };
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      if (window.scrollY> 722) {
        this.$refs.firstcomponent.update(that.endVal + 93);
      }
    },
    onReady2: function(instance, CountUp) {
      const that = this;
      if (window.scrollY> 722) {
        this.$refs.secondcomponent.update(that.endVal2 + 200);
      }
    },
  }
};
</script>

<style scoped>
.responsive {
  width: 100%;
  height: auto;
}
.iCountUp{
  position:absolute;
  font-size: 15vw;
  margin-top: 10%;
  z-index: 100;
  color: #5B21B6;
  left: 23%;
  transform: translateX(-50%);
}
.iCountUp-2{
  position:absolute;
  font-size: 20vw;
  margin-top: 8%;
  z-index: 100;
  color: #5B21B6;
  left: 82%;
  transform: translateX(-50%);
}
.text1{
  position:absolute;
  font-size: 4vw;
  margin-top: 40%;
  z-index: 1;
  color: white;
  left: 20%;
  transform: translateX(-50%);
}
.text2{
  position:absolute;
  font-size: 3vw;
  margin-top: 44%;
  z-index: 1;
  color: white;
  right: 0%;
  transform: translateX(-50%);
}
</style>