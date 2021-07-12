<template>
  <section>
    <h2>Find Your Coach</h2>
    <span>
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Front end</label>
    </span>
    <span>
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Back end</label>
    </span>
    <span>
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </section>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
section {
  margin: 50px 0;
}
h2 {
  text-transform: uppercase;
}

span {
  margin: 10px;
}

span label {
  margin-left: 5px;
}
</style>
