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
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
           <div>
             <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-select
                id="input-3"
                v-model="doctor"
                :options="options"
                required
              ></b-form-select>
              <b-form-textarea
                id="textarea"
                v-model="description"
                placeholder="Reason for visit."
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
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
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.replace({ path: `/appointmentcomplete/${this.$route.params.username}` })
    },
    onReset (evt) {
      this.doctor = ''
      this.description = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  data () {
    return {
      options: [{ text: 'Select a Doctor', value: null }, 'Doctor 1 / speciality', 'Doctor 2 / speciality', 'Doctor 3 / speciality'],
      doctor: '',
      description: '',
      show: true
    }
  }
}
</script>
