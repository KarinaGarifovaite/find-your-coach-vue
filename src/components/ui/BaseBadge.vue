<template>
  <span :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'text'],
};
</script>

<style scoped>
span {
  text-transform: capitalize;
}
.frontend {
  color: #003566;
}

.backend {
  color: rgb(116, 35, 35);
}

.carrer {
  color: rgb(20, 51, 20);
}
</style>
