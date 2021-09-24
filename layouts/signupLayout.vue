<template>
  <v-app dark id='app'>
    <transition name='layout' mode='out-in'>
      <v-main class='pa-0 ma-0'>
        <v-row dense class='pa-0 ma-0'>
          <v-col cols='12' lg='8' style='height:100%' class='pa-0 ma-0'>
            <v-sheet elevation='0' color='#122028' class='pa-0 ma-0 rounded-0' min-height='100vh'>
              <v-card-title>
                <v-btn color='primary' elevation='0' nuxt :to="{path:'/'}">Back to home page</v-btn>
                <v-spacer></v-spacer>
                <div class='mb-n6' style='max-width: 150px'>
                  <v-select rounded dense label='Language' :items='["AR","FR","EN"]' value='EN' style='width:150px'></v-select>
                </div>
              </v-card-title>
              <v-card-title class='text-break text-h4 font-weight-bold py-15' style='font-size:25px;font-family: "Montserrat", serif !important'>
                Register in Hackathon DZ
              </v-card-title>
              <v-card-text id='cardText' class='px-2 px-lg-12'>
                <nuxt />
              </v-card-text>

            </v-sheet>
          </v-col>
          <v-col lg='4' class='hidden-md-and-down'>
            <v-container fill-height fluid>
              <v-row align="center"
                     justify="center">
                <v-col>
                  <img width='100%' src='/svg/team.svg'/>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-main>
    </transition>
  </v-app>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'signupLayout',
  mounted() {
    gsap.from('#cardText', { opacity: 0, duration: 1, x: -50 })
  },
  computed:{
    cardWidth(){
      if(this.$vuetify.breakpoint.smAndDown){
        return 300;
      }else{
        if(this.$vuetify.breakpoint.md){
          return 600;
        }else{
          return 1000;
        }
      }
    }
  }
}
</script>

<style scoped>
#app {
  background-color:#00dd86;
  height: 100% !important;
}
</style>
