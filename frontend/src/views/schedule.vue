<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Schedule
          </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="5">
          <p>Upcoming Appointments</p>
          <b-table striped hover :items="items"></b-table>
          <p>Cancel Appointment</p>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-button @click="select" :disabled="selected === null" href="#" variant="primary">Select</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { Appointment: 1, Date: '04/07/20', Time: '8:30 AM', Patient: 'Macdonald', Location: 'Location 1' },
        { Appointment: 2, Date: '04/07/20', Time: '9:00 AM', Patient: 'Macdonald', Location: 'Location 1' }
      ],
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        'Appointment 1',
        'Appointment 2'
      ]
    }
  },
  methods: {
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    },
    select () {
      //  remove appointment
    }
  }
}
</script>
