<template>
  <div>
    <h2 class='ml-6 grey--text text--lighten-1' v-if='step===1'>STEP 1 - CHOOSING PARTICIPING TYPE</h2>
    <h2 class='ml-6 grey--text text--lighten-1' v-else-if='step===2'>STEP 2 - FILLING NAME FIELDS</h2>
    <h2 class='ml-6 grey--text text--lighten-1' v-else-if='step===2'>STEP 3 - FILLING Birth FIELDS</h2>
    <p v-if='step===2' class='ml-6 mt-4 red--text'>
      All fields are required !
    </p>

    <v-stepper v-model='step' style='background-color:transparent !important' elevation='0' class='mt-5 '>
      <v-stepper-items class='pa-0'>
        <v-stepper-content step='1'>
          <v-radio-group v-model='type' class='px-3'>
            <v-radio label='Individually' value='ind'></v-radio>
            <v-radio label='Team' value='team'></v-radio>
          </v-radio-group>
          <v-btn class='mt-15' color='primary' :disabled='type===null' x-large @click='step=2'>
            CONTINUE
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step='2'>
          <v-form v-model='formInd'>
            <v-row v-if='type==="ind"'>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='LatinNameErrors' v-model='participant[0].firstnameLT' label='Firstname ( Latin )' hint='Firstname should be in latin / french'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='ArNameErrors' v-model='participant[0].firstnameAR' label='Firstname ( Arabic )' hint='Firstname should be in arabic'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='LatinNameErrors' v-model='participant[0].lastnameLT' label='Lastname ( Latin )' hint='Lastname should be in latin / french'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='ArNameErrors' v-model='participant[0].lastnameAR' label='Lastname ( Arabic )' hint='Lastname should be in arabic'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='EmailErrors' v-model='participant[0].email' label='E-mail'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='PhoneErrors' v-model='participant[0].phoneNumber' label='Phone Number'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-select :rules='CommonErrors' v-model='participant[0].sex' label='Sex ' :items='["Male","Female"]'></v-select>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-menu
                  ref='menu'
                  v-model='menu'
                  :close-on-content-click='false'
                  transition='scale-transition'
                  offset-y
                  min-width='auto'
                >
                  <template v-slot:activator='{ on, attrs }'>
                    <v-text-field readonly :rules='CommonErrors'
                                  v-model='participant[0].birthday'
                                  label='Birthday'
                                  v-bind='attrs'
                                  v-on='on'
                    ></v-text-field>
                  </template>
                  <v-date-picker :rules='CommonErrors'
                    v-model='participant[0].birthday'
                    no-title
                    @input='menu1 = false'
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='CommonErrors' v-model='participant[0].birthplace' label='Place of birth'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-select :rules='CommonErrors' v-model='participant[0].socialState' :items='["Single","Married","Divorced","Widowed"]' label='Marital Status'></v-select>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-select :rules='CommonErrors' v-model='participant[0].wilaya' :items='listWilaya' label='Wilaya'></v-select>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='NationalIDErrors' v-model='participant[0].nationalID' label='National ID'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='CommonErrors' v-model='participant[0].job' label='Job'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-text-field :rules='CommonErrors' v-model='participant[0].studySpeciality' label='Academic specialization'></v-text-field>
              </v-col>
              <v-col cols='12' lg='6'>
                <v-select :rules='CommonErrors' :items='["Yes","No"]' v-model='participant[0].participeInClub'
                          label='Member of an association or club?'></v-select>
              </v-col>
              <v-col :rules='CommonErrors' cols='12' lg='6' v-if='participant[0].participeInClub==="Yes"'>
                <v-text-field v-model='participant[0].clubName' label='Club name'></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-btn class='mt-15' color='primary' x-large @click='step--'>
            <v-icon>mdi-chevron-left</v-icon>
            BACK
          </v-btn>
          <v-btn :disabled='!formInd' class='mt-15' color='primary' x-large @click='SaveParticipant()'>
            SIGNUP &nbsp;<v-icon>mdi-check</v-icon>
          </v-btn>

        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>

    <v-snackbar v-model='errorSnack' color='error' :timeout='5000'>
      {{ textSnack }}
    </v-snackbar>
  </div>

</template>

<script>
import list from 'assets/wilaya.js'

export default {
  name: 'signup',
  layout: 'signupLayout',
  head() {
    return {
      title: 'Participate'
    }
  },

  data() {
    return {
      step: 1,
      listWilaya: list.map(l => l.name),
      username: '',
      password: '',
      loading: false,
      type: '',
      participant: [
        {
          firstnameLT: '',
          firstnameAR: '',
          lastnameLT: '',
          lastnameAR: '',
          email: '',
          phoneNumber: '',
          sex: '',
          birthday: '',
          birthplace: '',
          socialState: '',
          wilaya: '',
          job: '',
          studySpeciality: '',
          participeInClub: '',
          nationalID:'',
          clubName:'',
        }
      ],
      CommonErrors: [
        v => !!v || 'This field is required',
      ],
      LatinNameErrors:[
        v => !!v || 'This field is required',
        v => /[a-zA-Z ]+$/.test(v) || 'Only Latin characters accepted ( A - Z )',
      ],
      ArNameErrors:[
        v => !!v || 'This field is required',
        v => /[\u0621-\u064A ]+$/.test(v) || 'Only Arabic characters accepted ( أ - ي )',
      ],
      EmailErrors: [
        v => !!v || 'This field is required',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Email not acceptable , please verify your email'
      ],
      PhoneErrors:[
        v => !!v || 'This field is required',
        v => /0[5-7][0-9]{8}$/.test(v) || 'Phone Number is not acceptable , please write a correct phone number ( ex : 0(5-6-7)xxxxxxxx )',
      ],
      NationalIDErrors:[
        v => !!v || 'This field is required',
        v => /[0-9]{9}$/.test(v) || 'Phone Number is not acceptable , please write a correct phone number ( ex : 0(5-6-7)xxxxxxxx )',

      ],

      errorSnack: false,
      textSnack: '',
      menu:null,
      formInd: null
    }
  },
  methods: {
    async SaveParticipant() {
      this.$refs.formInd.validate()
      if (this.formInd) {
        this.loading = true
        try {

          this.$store.dispatch('user/LOGIN_USER', loginFormData).then((value) => {
            switch (value) {
              case 1200:
                this.$router.push('/admin/dashboard/')
                break
              case 1401:
                this.errorSnack = true
                this.textSnack = 'عزيزي المستخدم ، حسابك غير مرخص له للدخول لهته الصفحة ، يرجى تفهم ذلك'
                break
              case 1404:
                this.errorSnack = true
                this.textSnack = 'هناك خطأ في كلمة السر او إسم المستخدم ، يرجى التحقق من معلوماتك'
                break
              case 1500:
                this.errorSnack = true
                this.textSnack = 'حدث خطأ على مستوى السيرفر ، يرجى المحاولة لاحقا أو التواصل مع المطور لحل هته المشكلة'
                break
            }
          })
          this.loading = false
        } catch (err) {
          console.log(err)
          this.errorSnack = true
          this.textSnack = 'حدث خطأ في عملية تسجيل الدخول ، يرجى المحاولة لاحقا أو التواصل مع المطور لحل هته المشكلة'
          this.loading = false
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
