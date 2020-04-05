
<template>
  <div id="root">
    <div>
      Everyone see this
      <b-card
        title="Account Settings"
        img-src="https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >

      <b-button @click="settingclisck" href="#" variant="primary">Select</b-button>
    </b-card>
    </div>
    <div v-if="employee === this.$route.params.username">
        <h1>
            {{ this.$route.params.username }}'s login test page
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
    <div v-else-if="patient === this.$route.params.username">
      <b-card
        title="Schedule Appointment"
        img-src="https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >

      <b-button @click="appointment" href="#" variant="primary">Select</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    locationclick () {
      this.$router.replace({ path: `/location/${this.$route.params.username}` })
    },
    settingclick () {
      this.$router.replace({ path: `/settings/${this.$route.params.username}` })
    },
    appointment () {
      this.$router.replace({ path: `/scheduleappointment/${this.$route.params.username}` })
    }
  },
  data () {
    return {
      employee: 'employee',
      patient: 'patient',
      bool: true
    }
  }
}
</script>

<style>

</style>
