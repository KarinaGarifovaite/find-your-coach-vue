<template>
  <div id="app">
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  computed: {
    didlogout() {
      return this.$store.getters.didlogout;
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didlogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
