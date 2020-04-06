<template>
  <div id="root">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Choose a Date and Time
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
            <b-form-datepicker id="example-datepicker" v-model="value" required></b-form-datepicker>
            <b-form-timepicker id = "time" v-model="time" locale="en" required></b-form-timepicker>
            <b-button type="submit" :disabled="time && value === ''" variant="primary">Select</b-button>
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
      value: '',
      time: '',
      show: true
    }
  },
  methods: {
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.replace({ path: `/appointmentlocation/${this.$route.params.username}` })
    },
    onReset (evt) {
      evt.preventDefault()
      this.value = ''
      this.time = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
