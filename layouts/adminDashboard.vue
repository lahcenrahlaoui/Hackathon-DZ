<template>
  <v-app light id='app'>
    <v-navigation-drawer v-model='drawer' right dark color='secondary' app>
      <v-list-item rounded link class='px-2' two-line>
        <v-list-item-avatar>
          <v-icon>fas fa-user</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ $store.state.user.firstname }} {{ $store.state.user.lastname }}</v-list-item-title>
          <v-list-item-subtitle>{{ roleDisplay }}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-divider></v-divider>
      <br/>
      <v-list rounded dense>
        <v-list-item exact v-if='item.role.includes($store.state.user.role) || $store.state.user.role==="*"' link v-for='item in listItemNavigation' :to='{path:"/admin/dashboard"+item.url}'>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class='pa-2'>
          <v-btn elevation='0' rounded class='secondary--text font-weight-bold' light block @click='Logout()'>
            تسجيل الخروج
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar light app elevation='0' color='white'>
      <v-app-bar-nav-icon class='hidden-lg-and-up' @click='drawer=!drawer'></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <img src='/logo/logo.png' height='50'/>

      <div class='hidden-md-and-down' style="width:2px"></div>
    </v-app-bar>
     <v-main class=''>
       <v-container  class='pa-lg-12 pa-5'>
         <nuxt/>
       </v-container>
     </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'adminDashboard',
  middleware: ['fetchData', 'AdminAuthenticated'],
  beforeMount() {

  },
  mounted() {
    this.$vuetify.rtl = true
  },
  data() {
    return {
      drawer: true,
      listItemNavigation:[
        {
          'title':'لوحة التحكم',
          'icon':'fas fa-home',
          'url':'/',
          'role':'',
        },
        {
          'title':'قائمة المشتركين',
          'icon':'fas fa-user',
          'url':'/participants',
          'role':'',
        },
        {
          'title':'قائمة الفرق',
          'icon':'fas fa-users',
          'url':'/teams',
          'role':'',
        },
        {
          'title':'قائمة المنظمين',
          'icon':'fas fa-user-shield',
          'url':'/users',
          'role':'',
        },
      ]
    }
  },
  computed: {
    roleDisplay() {
      switch (this.$store.state.user.role) {
        case '*' :
          return 'منظم'
          break
      }
    }
  }
}
</script>

<style scoped>
#app{
  background-color: #fafafafa !important;
}
</style>
