import Vue from "vue";
import App from "../Vue/App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

Vue.directive ('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value (evt, el)) {
                window.removeEventListener ('scroll', f)
            }
        }
        window.addEventListener ('scroll', f)
    }
})

new Vue({
    el: '#App',
    created() {
        AOS.init();
    },
    render: h => h(App)
})