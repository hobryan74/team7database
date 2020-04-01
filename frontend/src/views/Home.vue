<template>
  <div id="root">
    <b-container>
          <h1>
          Log In
          </h1>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Username:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="login.username"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="login.password"
                required
                placeholder="Enter password"
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
      login: {
        username: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      //  alert(JSON.stringify(this.signup))
      //  https://router.vuejs.org/guide/essentials/navigation.html
      //  Logic to choose if account exists and if employee or patient
      //  fix passing info to new page
      this.$router.replace({ path: `/employee/${this.login.username}` })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.login.username = ''
      this.login.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
