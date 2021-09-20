<template>
  <v-app dark>
    <v-main>
      <transition name="layout" mode="out-in">

      <nuxt/>
      </transition>
    </v-main>
    <v-footer color='primary' dark class='text-center justify-center'>
      All Rights Reserved to&nbsp;<a class='white--text' href='https://www.facebook.com/biskrareads07'> Biskra Takraa Association@2021</a>&nbsp;
    </v-footer>
    <v-footer color='primary' dark class='text-center justify-center'>
      Developed & Designed by Choukri Hafid SARL
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'indexLayout'
}
</script>

<style scoped>

</style>
