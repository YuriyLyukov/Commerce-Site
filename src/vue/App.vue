<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
    <SVGanim></SVGanim>
    <Lower></Lower>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import Lower from "./components/Lower";
import SVGpath from "./components/SVGpath";
import SVGanim from "./components/SVGanim";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Lower,
    SVGpath,
    SVGanim
  }
}
</script>

<style scoped>

</style>