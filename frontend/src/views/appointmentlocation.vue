<template>
  <div id="root">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="backclick" href="#" variant="primary">Back</b-button>
        </b-col>
        <b-col>
          <h1>
            Schedule Appointment
         </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
           <div>
             <p>Choose a Location</p>
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <b-button @click="select" :disabled="selected === null" href="#" variant="primary">Select</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    backclick () {
      this.$router.replace({ path: `/appointmentdate/${this.$route.params.username}` })
    },
    select () {
      this.$router.replace({ path: `/appointmentselectdoctor/${this.$route.params.username}` })
    }
  },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        'Location 1',
        'Location 2',
        'Location 3',
        'Location 4'
      ]
    }
  }
}
</script>
