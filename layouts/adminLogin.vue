<style scoped>
#main{
  background: url("/backgrounds/bgSignup.png") no-repeat center center fixed !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  height: 100% !important;
}
</style>
<template>
  <v-app class='' id="main" style='direction:rtl'>
    <transition name="layout" mode="out-in">
      <v-main>
        <v-container
          class="fill-height"
          fluid>
          <v-row
            align="center"
            justify="center">
            <nuxt/>
          </v-row>
        </v-container>
      </v-main>
    </transition>
  </v-app>
</template>


<script>
export default {
  name: 'adminLogin',
  mounted() {
    this.$vuetify.rtl = true
  }
}
</script>

<style scoped>

</style>
