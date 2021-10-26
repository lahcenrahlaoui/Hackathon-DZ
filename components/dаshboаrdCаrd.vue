<template>
  <v-card class='pl-0 pr-0 py-2' color='secondаry' elevation='0'>
    <v-row  class='pl-0 pr-0'>
      <v-col cols='6'>
        <v-card-title class='text-break' v-html='title'>
          {{  }}
        </v-card-title>

      </v-col>
      <v-col cols='6'>
        <v-container class='fill-height' fluid>
          <v-row align='center' justify='center'>
            <v-card-title>
              <h2 class='primary--text text-break'>{{ number }}</h2>
            </v-card-title>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
export default {
  name: 'dashboardCard',
  props: ['title', 'number']
}
</script>

<style scoped>

</style>
