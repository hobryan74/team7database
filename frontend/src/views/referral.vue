<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Referral
        </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="patient === this.$route.params.username">
      <b-container class="bv-example-row">
        <b-row>
          <b-table striped hover :items="patient_items"></b-table>
        </b-row>
      </b-container>
    </div>
    <div v-else-if="employee === this.$route.params.username">
     <p>Previous Patients</p>
        <b-table striped hover :items="employee_items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    }
  },
  data () {
    return {
      patient_items: [
        { id: 1, patient_ID: '1234', Referring_Doctor: 'Flintstone', Referring_to_Doctor: 'Fred', Date: '4/2/20', time: '8:30 ', description: ' This person has issues' },
        { id: 1, patient_ID: '1234', Referring_Doctor: 'Isaac', Referring_to_Doctor: 'Bob', Date: '4/3/20', time: '2:00 ', description: ' Cough' },
        { id: 1, patient_ID: '1234', Referring_Doctor: 'Daniel', Referring_to_Doctor: 'Dave', Date: '3/12/20', time: '1:45 ', description: 'Something ' },
        { id: 1, patient_ID: '1234', Referring_Doctor: 'Craig', Referring_to_Doctor: 'Joe', Date: '2/1/19', time: '3:23 ', description: 'Polio' }
      ],
      employee_items: [
        { id: 1, patient_ID: '1234', Patient_Name: 'Flintstone', Date: '4/2/20', time: '8:30 ', Symptoms: 'cough', Diagnosis: ' This person has issues', Notes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { id: 2, patient_ID: '1234', Patient_Name: 'Isaac', Date: '4/3/20', time: '2:00 ', Symptoms: 'temperature', Diagnosis: ' Cough', Notes: 'aaaaaaaa' },
        { id: 3, patient_ID: '1234', Patient_Name: 'Daniel', Date: '3/12/20', time: '1:45 ', Symptoms: 'Sprained ankle', Diagnosis: 'Something ', Notes: 'QWEASDAWQEASFADF' },
        { id: 4, patient_ID: '1234', Patient_Name: 'Craig', Date: '2/1/19', time: '3:23 ', Symptoms: 'headache', Diagnosis: 'Polio', Notes: 'ASFEWFWEFASFWEFSDFWEFWEFWEFWEFWEFWEFR' }
      ],
      employee: 'employee',
      patient: 'patient'
    }
  }
}
</script>
