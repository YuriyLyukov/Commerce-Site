<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
    <reviews></reviews>
    <Lower></Lower>


  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import Lower from "./components/Lower";
import SVGpath from "./components/SVGpath";
import reviews from "./components/reviews";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Lower,
    SVGpath,
    reviews,
  }
}
</script>

<style scoped>

</style>