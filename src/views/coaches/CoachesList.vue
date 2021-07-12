<template>
  <main>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <coach-filter @change-filter="setFilters"></coach-filter>
    <section>
      <div>
        <base-button
          class="type"
          link
          to="/auth?redirect=register"
          v-if="!isLoggedIn"
          >Log in to register as a coach</base-button
        >
        <base-button
          class="type"
          v-if="!isCoach && !isLoading && isLoggedIn"
          link
          to="/register"
          >Register as a Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </section>
  </main>
</template>

<script>
import BaseDialog from '../../components/ui/BaseDialog';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseSpinner from '../../components/ui/BaseSpinner/BaseSpinner.vue';
export default {
  components: { CoachItem, BaseButton, CoachFilter, BaseSpinner, BaseDialog },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },

    isCoach() {
      return !this.isLoading && this.$store.getters['coaches/isCoach'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(value) {
      this.activeFilters = value;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (err) {
        this.error = err.messgae || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
h3 {
  width: 60%;
  padding: 20px;
  margin: 50px auto;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
