<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks
  }
}
</script>

<style scoped>

</style>