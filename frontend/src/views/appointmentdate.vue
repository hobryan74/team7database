<template>
  <div id="root">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Choose a Date
          </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
          <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
          <b-button @click="select" :disabled="value === ''" href="#" variant="primary">Select</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    },
    select (evt) {
      evt.preventDefault()
      this.$router.replace({ path: `/appointmentlocation/${this.$route.params.username}` })
    }
  }
}
</script>
