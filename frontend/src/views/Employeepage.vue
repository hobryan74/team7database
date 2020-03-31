<template>
  <div>
      <h1>
          {{ id }}'s login test page
      </h1>
      <b-card
    title="Location and Hours"
    img-src="https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >

    <b-button @click="locationclick" href="#" variant="primary">Select</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    locationclick () {
      this.$router.replace({ path: '/location' })
    }
  },
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.username
  }
}
</script>

<style>

</style>
