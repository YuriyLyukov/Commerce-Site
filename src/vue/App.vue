<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
    <SVGanim></SVGanim>
    <PartnersSection></PartnersSection>
    <Reviews></Reviews>
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
import Reviews from "./components/Reviews";
import PartnersSection from "./components/PartnersSection";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Lower,
    SVGpath,
    SVGanim,
    Reviews,
    PartnersSection
  }
}
</script>

<style scoped>

</style>