<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Prescription
        </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="patient === this.$route.params.username">
      <b-container class="bv-example-row">
        <p>Generate Report</p>
        <b-row align-h="center">
          <b-col cols="5">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <label for="example-datepicker">From</label>
                <b-form-datepicker id="from" v-model="from" class="mb-2"></b-form-datepicker>
                <label for="example-datepicker">To</label>
                <b-form-datepicker id="to" v-model="to" class="mb-2"></b-form-datepicker>
                <b-button type="submit" :disabled="from && to === ''" variant="primary">Select</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
          </b-col>
          <b-table v-if="bool === true" striped hover :items="patient_items"></b-table>
        </b-row>
      </b-container>
    </div>
    <div v-else-if="employee === this.$route.params.username">
      <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col >
          <p>Previous Patients</p>
            <b-table striped hover :items="employee_items"></b-table>
            <p>Choose Patient</p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-select
                id="input-3"
                v-model="chosen_patient"
                :options="options"
                required
              ></b-form-select>
               <b-form-group id="input-group-5" label="Drug Prescribing:" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="drug"
                required
                placeholder="Enter Drug Name"
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
      //  refresh page with data
      this.bool = true
    },
    onReset (evt) {
      evt.preventDefault()
      this.from = ''
      this.to = ''
      this.chosen_patient = ''
      this.drug = ''
      this.notes = ''
      this.bool = false
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

  },
  data () {
    return {
      patient_items: [
        { id: 1, Drug: 'Pain Killers', Doctor_referred: 'Fred', Date_referred: '4/6/2020', Fulfilled: 'Yes', Location: 'Hopesworth Hospital' },
        { id: 2, Drug: 'Pills', Doctor_referred: 'David', Date_referred: '4/3/2020', Fulfilled: 'No', Location: 'Hopesworth Hospital' },
        { id: 3, Drug: 'Cough Medicine', Doctor_referred: 'Joe', Date_referred: '4/2/2020', Fulfilled: 'Yes', Location: 'Hopesworth Hospital' },
        { id: 4, Drug: 'Allergy Pills', Doctor_referred: 'Will', Date_referred: '4/1/2020', Fulfilled: 'No', Location: 'GHopesworth Hospital' }
      ],
      employee: 'employee',
      patient: 'patient',
      from: '',
      to: '',
      show: true,
      bool: false,
      employee_items: [
        { id: 1, patient_ID: '1234', Patient_Name: 'Flintstone', Date: '4/2/20', time: '8:30 ', Symptoms: 'cough', Diagnosis: ' This person has issues', Notes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { id: 2, patient_ID: '1234', Patient_Name: 'Isaac', Date: '4/3/20', time: '2:00 ', Symptoms: 'temperature', Diagnosis: ' Cough', Notes: 'aaaaaaaa' },
        { id: 3, patient_ID: '1234', Patient_Name: 'Daniel', Date: '3/12/20', time: '1:45 ', Symptoms: 'Sprained ankle', Diagnosis: 'Something ', Notes: 'QWEASDAWQEASFADF' },
        { id: 4, patient_ID: '1234', Patient_Name: 'Craig', Date: '2/1/19', time: '3:23 ', Symptoms: 'headache', Diagnosis: 'Polio', Notes: 'ASFEWFWEFASFWEFSDFWEFWEFWEFWEFWEFWEFR' }
      ],
      chosen_patient: '',
      drig: '',
      options: [
        { value: null, text: 'Please select an option' },
        '1',
        '2'
      ]
    }
  }
}
</script>
