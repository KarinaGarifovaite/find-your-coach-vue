<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First name must not be empty!</p>
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last name must not be empty!</p>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty!</p>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate must not be empty!</p>
    </div>
    <div class="experties">
      <h3>Areas of Experties</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Front end development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Back end development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career</label>
      </div>
      <p v-if="!areas.isValid">At least one area must be checked!</p>
    </div>

    <p v-if="!formIsValid">Please fi the above errors and submit again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  margin: 10px;
}

.form-control input,
.form-control textarea {
  padding: 5px;
  color: #003566;
  border: 1px solid currentColor;
  font-family: inherit;
}

.experties {
  margin-top: 20px;
}
.experties h3 {
  text-transform: uppercase;
}

.experties div {
  margin: 10px 0;
}

.experties div label {
  margin-left: 5px;
}
</style>
