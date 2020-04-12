<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Summary
        </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col >
          <p>Previous Patients</p>
            <b-table striped hover :items="items"></b-table>
            <p>Choose Patient</p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-select
                id="input-3"
                v-model="patient"
                :options="options"
                required
              ></b-form-select>
               <b-form-group id="input-group-5" label="Blood Pressure:" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="pressure"
                required
                placeholder="Enter Blood Pressure"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Weight:" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="weight"
                required
                placeholder="Enter weight"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-11" label="Temperature:" label-for="input-11">
              <b-form-input
                id="input-1"
                v-model="temperature"
                required
                placeholder="Enter temperature"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-12" label="Diagnosis:" label-for="input-11">
              <b-form-input
                id="input-12"
                v-model="diagnosis"
                required
                placeholder="Enter Diagnosis"
              ></b-form-input>
            </b-form-group>
              <b-form-textarea
                id="textarea"
                v-model="notes"
                placeholder="Notes:"
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
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
  methods: {
    homeclick () {
      this.$router.replace({ path: `/home/${this.$route.params.username}` })
    },
    onSubmit (evt) {
      evt.preventDefault()
      //  update database
    },
    onReset (evt) {
      this.notes = ''
      this.patient = ''
      this.weight = ''
      this.pressure = ''
      this.diagnosis = ''
      this.temperature = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  data () {
    return {
      show: true,
      items: [
        { id: 1, patient_ID: '1234', Patient_Name: 'Flintstone', Date: '4/2/20', time: '8:30 ', Symptoms: 'cough', Diagnosis: ' This person has issues', Notes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { id: 2, patient_ID: '1234', Patient_Name: 'Isaac', Date: '4/3/20', time: '2:00 ', Symptoms: 'temperature', Diagnosis: ' Cough', Notes: 'aaaaaaaa' },
        { id: 3, patient_ID: '1234', Patient_Name: 'Daniel', Date: '3/12/20', time: '1:45 ', Symptoms: 'Sprained ankle', Diagnosis: 'Something ', Notes: 'QWEASDAWQEASFADF' },
        { id: 4, patient_ID: '1234', Patient_Name: 'Craig', Date: '2/1/19', time: '3:23 ', Symptoms: 'headache', Diagnosis: 'Polio', Notes: 'ASFEWFWEFASFWEFSDFWEFWEFWEFWEFWEFWEFR' }
      ],
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        '1',
        '2'
      ],
      patient: '',
      notes: '',
      weight: '',
      temperature: '',
      pressure: '',
      diagnosis: ''
    }
  }
}
</script>
