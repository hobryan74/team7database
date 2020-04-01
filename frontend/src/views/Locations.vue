<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Locations and Hours
         </h1>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>Location 1</b-col>
        <b-col>Hours 1</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    homeclick () {
      //  fix this
      this.$router.replace({ path: `/employee/${this.$route.params.username}` })
    }
  }
}
</script>
