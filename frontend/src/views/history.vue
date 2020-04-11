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
      <b-row>
        <b-table striped hover :items="items"></b-table>
      </b-row>
    </b-container>
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
      items: [
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' },
        { diagnosis_ID: 1, patient_ID: '1234', Weight_lb: '120lb', Blood_pressure: '112mm Hg', Temperature: '90F', Date: '4/2/20', time: '8:30 ', Doctor_Notes: ' This person has issues' }
      ]
    }
  }
}
</script>
