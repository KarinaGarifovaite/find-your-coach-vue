<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
};
</script>

<style scoped>
li {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a {
  color: black;
  text-transform: uppercase;
}
p {
  width: 60%;
  padding: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  margin: 20px auto;
}
</style>
