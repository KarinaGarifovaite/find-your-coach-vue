<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :type="area"
        :key="area"
        :text="area"
      ></base-badge>
    </div>
    <div>
      <base-button link :to="coachContactLink">Contact</base-button>
      <base-button class="type" link :to="coachDetailsLink"
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
  props: ['firstName', 'lastName', 'rate', 'areas', 'id'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  padding: 30px 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  margin: 20px;
  display: flex;
  flex-direction: column;
}

h3 {
  text-transform: uppercase;
  font-weight: 300;
}

h4 {
  font-size: 15px;
}

div {
  margin: 10px;
}

@media screen and (min-width: 768px) {
  li {
    margin: 20px auto;
    width: 60%;
  }
}
</style>
