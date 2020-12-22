<template>
  <div id="Counter">
    <div class="img-container">
      <div class="counter-display">
        <div class="iCountUp">
          <ICountUp :delay="delay" :endVal="endVal" :options="options" ref="firstcomponent" v-scroll="onReady"/>
        </div>
      </div>
      <img class="image1" src="/images/Counter.png" />
      <div class="counter-display-2">
        <div class="iCountUp-2">
          <ICountUp :delay="delay" :endVal="endVal2" :options="options" ref="secondcomponent" v-scroll="onReady2"/>
        </div>
      </div>
    </div>
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
    }
  }
};
</script>

<style scoped>
.counter-display {
  float: left;
  position: absolute;
  left: 13%;
  top: 30%;
  z-index: 1000;
  color: black;
  font-weight: bold;
}
.counter-display-2 {
  float: left;
  position: absolute;
  left: 70%;
  top: 35%;
  z-index: -100;
  color: black;
  font-weight: bold;
}
.img-container {
  position: relative;
}

.iCountUp {
  font-size: 12em;
  margin: 0;
  color: #5B21B6;
}
.iCountUp-2 {
  font-size: 15em;
  margin: 0;
  color: #5B21B6;
}
</style>