<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
    <Lower></Lower>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import Lower from "./components/Lower";
import SVGpath from "./components/SVGpath";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Lower,
    SVGpath
  }
}
</script>

<style scoped>

</style>