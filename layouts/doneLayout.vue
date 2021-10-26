<template>
  <v-app dark>
    <v-main class="done" >
      <v-container fill-height fluid style="position:fixed">
        <v-row align="center"
               justify="center">
          <v-col class="text-center">      <nuxt/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import {Fireworks} from 'fireworks-js'


export default {
  data () {
    return {

    }
  },
  mounted() {
    const container = document.querySelector('.done')
    const fireworks = new Fireworks(container, { /* options */})
    fireworks.start()


  }

}
</script>

<style>

</style>
