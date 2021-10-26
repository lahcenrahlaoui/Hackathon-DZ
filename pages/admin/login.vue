<template>
<div>
  <v-card class='pa-4' :width='cardWidth'>
    <v-card-title class='text-break justify-center font-weight-medium py-10' style='font-size:25px'>
      تسجيل الدخول في لوحة التحكم
    </v-card-title>
    <v-card-text class='text-center justify-center'>
      <div style='height:10px'></div>
      <img height='200' class='ma-auto' src='/logo/logo.png'/>
      <div style='height:50px'></div>
      <v-form ref='form' v-model='loginForm'>

        <v-text-field required :rules='UsernameErrors' type='text' dir='ltr' v-model='username' outlined
                      label='إسم المستخدم' prepend-inner-icon='mdi-account-circle'></v-text-field>
        <v-text-field required :rules='PasswordErrors'
                      outlined type='password' dir='ltr' v-model='password' label='كلمة السر'
                      prepend-inner-icon='mdi-lock'></v-text-field>
      </v-form>
      <v-btn @click='Login()' large color="primary" width='250' elevation='0' :disabled='!loginForm' >تسجيل
        الدخول
        &nbsp;
        <v-icon class='mt-0' style='transform:scaleX(-1)'>fas fa-sign-in-alt</v-icon>
      </v-btn>
      <br/> <br/>
      <v-alert text type="warning" outlined>
        لا تحاول مشاركة حسابك مع الغير ، فعل ذلك يأدي بك إلى عواقب وخيمة
      </v-alert>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'login',
  layout:'adminLogin',
  head() {
    return {
      title: 'تسجيل الدخول'
    }
  },
  data(){
    return {
      loginForm: null,
      username: '',
      password: '',
      loading: false,
      UsernameErrors: [
        v => !!v || 'إسم المستخدم إجباري',
        v => (/^[a-zA-Z0-9]+$/.test(v) && v.length >= 4 && v.length <= 15) || 'إسم المستخدم الذي تم إدخاله لا يطابق معايير الموقع ، يرجى التحقق'
      ],
      PasswordErrors: [
        v => !!v || 'كلمة السر إجبارية',
        v => /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,30}$/.test(v) || 'لمة السر الذي تم إدخاله لا يطابق معايير الموقع ، يرجى التحقق'
      ],
      errorSnack: false,
      textSnack: ''
    }
  },
  methods: {
    async Login() {
      this.$refs.form.validate()
      if (this.loginForm) {
        this.loading = true
        try {
          var loginFormData = new FormData()
          loginFormData.append('username', this.username)
          loginFormData.append('password', this.password)
          this.$store.dispatch('user/LOGIN_USER', loginFormData).then((value) => {
            switch (value) {
              case 1200:
                this.$router.push('/admin/dashboard/')
                break;
              case 1401:
                this.errorSnack=true;
                this.textSnack='عزيزي المستخدم ، حسابك غير مرخص له للدخول لهته الصفحة ، يرجى تفهم ذلك';
                break;
              case 1404:
                this.errorSnack=true;
                this.textSnack='هناك خطأ في كلمة السر او إسم المستخدم ، يرجى التحقق من معلوماتك';
                break;
              case 1500:
                this.errorSnack=true;
                this.textSnack='حدث خطأ على مستوى السيرفر ، يرجى المحاولة لاحقا أو التواصل مع المطور لحل هته المشكلة';
                break;
            }
          })
          this.loading = false
        } catch (err) {
          console.log(err);
          this.errorSnack=true;
          this.textSnack='حدث خطأ في عملية تسجيل الدخول ، يرجى المحاولة لاحقا أو التواصل مع المطور لحل هته المشكلة';
          this.loading = false
        }
      }
    }
  },
  computed:{
    cardWidth(){
      if(this.$vuetify.breakpoint.smAndDown){
        return 300;
      }else{
        if(this.$vuetify.breakpoint.mdAndUp){
          return 450;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
