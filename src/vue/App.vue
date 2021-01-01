<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <SVGpath></SVGpath>
    <SVGanim></SVGanim>
    <ServicesWeProvide></ServicesWeProvide>
    <VideoSection></VideoSection>
    <PartnersSection></PartnersSection>
    <Reviews></Reviews>
    <QuotesSection></QuotesSection>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import SVGpath from "./components/SVGpath";
import SVGanim from "./components/SVGanim";
import Reviews from "./components/Reviews";
import PartnersSection from "./components/PartnersSection";
import QuotesSection from "./components/QuotesSection";
import ServicesWeProvide from "./components/ServicesWeProvide";
import VideoSection from "./components/VideoSection";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Footer,
    SVGpath,
    SVGanim,
    Reviews,
    PartnersSection,
    QuotesSection,
    ServicesWeProvide,
    VideoSection
  }
}
</script>

<style scoped>

</style>