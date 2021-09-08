<template>
  <v-app dark>
    <v-app-bar class='hidden-md-and-down mt-10 px-5' elevation='0' color='transparent'>
      <img width='100' src='/logo/logo.png'/>
      <v-spacer></v-spacer>
      <v-btn rounded small text>Home</v-btn>
      <v-btn rounded small text>Event</v-btn>
      <v-btn rounded small text>About</v-btn>
      <v-btn rounded small text>Contact</v-btn>
      <v-btn rounded outlined small color='primary'>Register</v-btn>

    </v-app-bar>
    <v-main>
        <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
