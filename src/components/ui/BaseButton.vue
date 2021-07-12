<template>
  <button class="button" v-if="!link">
    <slot></slot>
  </button>
  <router-link class="button" v-else :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style>
.button {
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: none;
  text-transform: uppercase;
  margin: 10px;
  padding: 10px;
  color: #003566;
  border: 1px solid #003566;
  transition: all 0.5s;
}

.button:hover {
  opacity: 0.7;
}

.button.type {
  border: none;
  background: rgba(0, 43, 107, 0.781);
  color: #fff;
  border-radius: 5px;
}
</style>
