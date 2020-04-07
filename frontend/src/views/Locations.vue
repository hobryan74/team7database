<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button @click="homeclick" href="#" variant="primary">Home</b-button>
        </b-col>
        <b-col>
          <h1>
            Location and Hours
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
        { Location: 'Location 1', Hours: 'Hours 1' },
        { Location: 'Location 2', Hours: 'Hours 2' },
        { Location: 'Location 3', Hours: 'Hours 3' },
        { Location: 'Location 4', Hours: 'Hours 4' }
      ]
    }
  }
}
</script>
