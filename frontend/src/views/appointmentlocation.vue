<template>
  <div id="root">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="backclick" href="#" variant="primary">Back</b-button>
        </b-col>
        <b-col>
          <h1>
            Choose a Location
         </h1>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
          <b-list-group>
            <b-list-group-item>Location 1</b-list-group-item>
            <b-list-group-item>Location 2</b-list-group-item>
            <b-list-group-item>Location 3</b-list-group-item>
            <b-list-group-item>Location 4</b-list-group-item>
            <b-list-group-item>Location 5</b-list-group-item>
          </b-list-group>
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
    }
  }
}
</script>
