<template>
  <section>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div>
      <h2>Request received</h2>
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul v-else-if="hasRequests && !isLoading">
      <request-item
        v-for="req in receivedRequests"
        :key="req.id"
        :email="req.userEmail"
        :message="req.message"
      >
      </request-item>
    </ul>
    <h3 v-else>You haven't received any request yet</h3>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseSpinner from '../../components/ui/BaseSpinner/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
export default {
  components: { RequestItem, BaseSpinner, BaseDialog },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (err) {
        this.error = err.message || 'Something failed';
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
section {
  margin: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
}
</style>
