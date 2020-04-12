<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            History
        </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
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
          <b-table v-if="bool === true" striped hover :items="items"></b-table>
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
      //  refresh page with data
      this.bool = true
    },
    onReset (evt) {
      evt.preventDefault()
      this.from = ''
      this.to = ''
      this.bool = false
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  data () {
    return {
      items: [
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' }
      ],
      from: '',
      to: '',
      show: true,
      bool: false
    }
  }
}
</script>
