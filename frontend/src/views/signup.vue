<template>
  <div id="root">
      <b-container>
          <h1>
          Sign Up
          </h1>

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-3" label="Username:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="signup.username"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              label="Email address:"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-4"
                v-model="signup.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="First Name:" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="signup.firstname"
                required
                placeholder="Enter first name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Last Name:" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="signup.lastname"
                required
                placeholder="Enter last name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-7" label="Date of Birth:" label-for="input-7">
              <b-form-datepicker id="input-group-7" v-model="signup.dob" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-8" label="Telephone Number:" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="signup.phone"
                required
                placeholder="Enter phone number"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-9" label="Sex:" label-for="input-9">
              <b-form-select
                id="input-3"
                v-model="signup.sex"
                :options="type"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-10" label="Address:" label-for="input-10">
              <b-form-input
                id="input-10"
                v-model="signup.address"
                required
                placeholder="Enter address"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      signup: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        phone: '',
        sex: '',
        address: ''

      },
      type: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      //  alert(JSON.stringify(this.signup))
      //  Logic to make account
      this.$router.replace({ path: `/employee/${this.signup.firstname}/${this.signup.lastname}` })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.signup.username = ''
      this.signup.firstname = ''
      this.signup.lastname = ''
      this.signup.email = ''
      this.signup.dob = ''
      this.signup.phone = ''
      this.signup.sex = ''
      this.signup.address = ''
      this.type = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
