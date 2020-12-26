<template>
  <div>
    <NavBar></NavBar>
    <Counter></Counter>
    <HowItWorks></HowItWorks>
    <Lower></Lower>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Counter from "./components/Counter";
import HowItWorks from "./components/HowItWorks";
import Lower from "./components/Lower";

export default {
  name: "App",
  components:{
    NavBar,
    Counter,
    HowItWorks,
    Lower,
  }
}
</script>

<style scoped>

</style>