<template>
  <div id="root">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="backclick" href="#" variant="primary">Back</b-button>
        </b-col>
        <b-col>
          <h1>
            Choose a Doctor
         </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    backclick () {
      this.$router.replace({ path: `/appointmentlocation/${this.$route.params.username}` })
    },
    select () {
      this.$router.replace({ path: `/appointmentselectdoctor/${this.$route.params.username}` })
    }
  },
  data () {
    return {
    }
  }
}
</script>
