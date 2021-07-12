<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Your message</label>
      <textarea
        name="message"
        id="message"
        rows="10"
        v-model.trim="message"
      ></textarea>
    </div>
    <p v-if="!formIsValid">Please enter a valid email and not empty message</p>
    <div>
      <base-button class="type">Send Message</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 5px;
  color: rgb(124, 36, 36);
}
</style>
