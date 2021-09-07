<template>
  <v-app dark class='bgmain'>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
.bgmain{
  background: url("/backgrounds/bg0.png") no-repeat center center fixed !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  height: 100% !important;
}
</style>
