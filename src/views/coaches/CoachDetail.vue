<template>
  <main>
    <section>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
    </section>
    <section>
      <base-badge
        v-for="area in selectedCoach.areas"
        :key="area"
        :type="area"
        :text="area"
      ></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </section>
    <section>
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
    </section>

    <router-view></router-view>
  </main>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      contactLink:
        this.$route.name === 'Contact'
          ? this.$route.path
          : `${this.$route.path}/contact`,
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
  },

  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
main {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: 300;
  text-transform: uppercase;
  margin: 20px 10px;
}

section {
  margin-bottom: 15px;
}

p {
  margin-top: 20px;
  text-transform: uppercase;
}
</style>
