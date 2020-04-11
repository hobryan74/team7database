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
        <b-row>
          <b-table striped hover :items="items"></b-table>
        </b-row>
      </b-container>
    </div>
    <div v-else-if="employee === this.$route.params.username">
      Fix employee
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
      items: [
        { id: 1, Drug: 'Pain Killers', Doctor_referred: 'Fred', Date_referred: '4/6/2020', Fulfilled: 'Yes', Location: 'Hopesworth Hospital' },
        { id: 2, Drug: 'Pills', Doctor_referred: 'David', Date_referred: '4/3/2020', Fulfilled: 'No', Location: 'Hopesworth Hospital' },
        { id: 3, Drug: 'Cough Medicine', Doctor_referred: 'Joe', Date_referred: '4/2/2020', Fulfilled: 'Yes', Location: 'Hopesworth Hospital' },
        { id: 4, Drug: 'Allergy Pills', Doctor_referred: 'Will', Date_referred: '4/1/2020', Fulfilled: 'No', Location: 'GHopesworth Hospital' }
      ],
      employee: 'employee',
      patient: 'patient'
    }
  }
}
</script>
