<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import SVGpath from "./components/SVGpath";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    SVGpath
  }
}
</script>

<style scoped>

</style>