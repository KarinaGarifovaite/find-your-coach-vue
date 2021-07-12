<template>
  <section>
    <h2>Register as a coach now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 20px;
}

h2 {
  padding: 20px;
  text-transform: uppercase;
  color: #003566;
}
</style>
