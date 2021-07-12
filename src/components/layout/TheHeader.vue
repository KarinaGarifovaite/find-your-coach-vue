<template>
  <header>
    <nav>
      <router-link to="/" class="logo">Find a coach</router-link>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/auth');
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background: #003566;
}
nav {
  height: 100%;
  display: flex;
  align-items: center;
}
nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

nav a.logo {
  text-transform: uppercase;
  font-weight: 500;
  padding: 20px;
}

nav li {
  display: flex;
  justify-content: center;
  align-items: center;
}
li button {
  font-size: 15px;
  border: none;
  color: #ccc;
  background: transparent;
  padding: 20px;
}
nav a {
  font-size: 15px;
  padding: 20px;
  color: #ccc;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  nav ul {
    margin-left: auto;
  }
}

@media screen and (min-width: 1024px) {
  nav {
    margin: 0 auto;
    width: 80%;
  }
  nav a,
  li button {
    font-size: 20px;
  }
}
</style>
