<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Account Settings
         </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-3" label="Username:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="signup.username"
                required
                :placeholder="signup.username"
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
                :placeholder="signup.email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="First Name:" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="signup.firstname"
                required
                :placeholder="signup.firstname"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Last Name:" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="signup.lastname"
                required
                :placeholder="signup.lastname"
              ></b-form-input>
            </b-form-group>
            <!--want to remove this-->
            <b-form-group id="input-group-11" label="Password:" label-for="input-11">
              <b-form-input
                id="input-1"
                v-model="signup.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <!--want to remove this-->
            <b-form-group id="input-group-7" label="Date of Birth:" label-for="input-7">
              <b-form-datepicker id="input-group-7" v-model="signup.dob" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-8" label="Telephone Number:" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="signup.phone"
                required
                :placeholder="signup.phone"
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
                :placeholder="signup.address"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signup: {
        //  need to access data from database
        username: 'Test',
        firstname: 'Bryan',
        lastname: 'Ho',
        email: 'h@g.com',
        dob: '1998-01-07',
        phone: 'f',
        sex: 'Male',
        address: 'f',
        //  i dont like this and i think we shouldnt add the option
        password: 'test'
      },
      type: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other'],
      show: true,
      test: 'test'
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      //  alert(JSON.stringify(this.signup))
      //  update database
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
      this.signup.password = ''
      this.type = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    }
  }
}
</script>
