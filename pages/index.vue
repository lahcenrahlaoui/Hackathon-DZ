<template>
  <div class='theme--dark'>
    <v-navigation-drawer color='primary' class='pa-2 text-center' v-model='drawer' app temporary>
      <img height='100' class='mx-auto' alt='Hackathon DZ' title='Hackathon DZ'
           src='/logo/hackathon-dz-white-transparent.png'/>
      <v-list rounded color='transparent'>
        <v-list-item exact :to="switchLocalePath('ar')">
          <v-list-item-title>تغيير اللغة للعربية</v-list-item-title>
        </v-list-item>
        <v-list-item exact :to="switchLocalePath('en')">
          <v-list-item-title>Change to English</v-list-item-title>
        </v-list-item>
        <v-list-item href='#about'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.about') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#prizes'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.prizes') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#partners'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.partners') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#sponsors'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.sponsors') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#agenda'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.agenda') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#faq'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.faq') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='#contact'>
          <v-list-item-title>{{ $t('texts.index.navbarlinks.contact') }}</v-list-item-title>
        </v-list-item>
        <v-list-item href='https://docs.google.com/forms/d/e/1FAIpQLScErAhNs-_1VLmSLl8dJD65EL2S2u9eIlJvCiYQVfQuqOSSGw/viewform'>
          <v-list-item-title >
            {{ $t('texts.index.navbarlinks.registration') }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <section id='main' class=''>
      <v-img height='100vh' class='hidden-md-and-down px-2'
             :src='"/backgrounds/bg0"+this.$i18n.locale+".png"'>
        <v-app-bar class='mt-10 px-5' elevation='0' color='transparent'>
          <img width='250' src='/logo/logo_biskra_takraa.png'/>
          <v-spacer></v-spacer>
          <v-btn rounded x-small text href='#about'>{{ $t('texts.index.navbarlinks.about') }}</v-btn>
          <v-btn rounded x-small text href='#prizes'>{{ $t('texts.index.navbarlinks.prizes') }}</v-btn>
          <v-btn rounded x-small text href='#partners'>{{ $t('texts.index.navbarlinks.partners') }}</v-btn>
          <v-btn rounded x-small text href='#sponsors'>{{ $t('texts.index.navbarlinks.sponsors') }}</v-btn>
          <v-btn rounded x-small text href='#agenda'>{{ $t('texts.index.navbarlinks.agenda') }}</v-btn>
          <v-btn rounded x-small text href='#faq'>{{ $t('texts.index.navbarlinks.faq') }}</v-btn>
          <v-btn rounded x-small text href='#contact'>{{ $t('texts.index.navbarlinks.contact') }}</v-btn>
          <v-btn exact rounded small text color='primary' :to='switchLocalePath("en")'>ENG</v-btn>
          <v-btn exact rounded small text color='primary' :to='switchLocalePath("ar")'>عربية</v-btn>

        </v-app-bar>
        <v-card-title class='flex-row text-break'>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols='6'>
              <div class='mt-lg-7 mt-xl-0'>
                <img id='startDateDesktop' width='100%' src='/sections/startDate.png'
                     alt='HackathonDZ  & Biskra TAKRAA Association' title='HackathonDZ & Biskra TAKRAA Association'/>
              </div>
            </v-col>
            <v-col cols='6'>
              <div ref='hackdz' class='text-left mt-5 mt-xl-15 pt-10 px-10 font-weight-bold font-italic'>
                <h1 class='text-h1 font-weight-bold' style='font-family: "Kufam", serif !important'>
                  {{ $t('texts.index.sectionInto.hackforalgeria1') }} <span
                  class='primary--text'> {{ $t('texts.index.sectionInto.hackforalgeria2') }}</span>
                </h1>
                <br/>
                <v-btn href="https://docs.google.com/forms/d/e/1FAIpQLScErAhNs-_1VLmSLl8dJD65EL2S2u9eIlJvCiYQVfQuqOSSGw/viewform" x-large color='primary' rounded>&nbsp;{{ $t('texts.index.sectionInto.registrationSection1') }}&nbsp;
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <div class='justify-center text-center mx-auto mt-3 text-h5 font-weight-bold'
               style='font-family: "Kufam", serif !important'>
            {{ $t('texts.index.sectionInto.rendezvous') }}
          </div>
        </v-card-title>
      </v-img>
      <v-img height='100vh' class='hidden-lg-and-up' src='/backgrounds/bg0m.png'>
        <v-app-bar class='hidden-lg-and-up mt-10 px-2' elevation='0' color='transparent'>
          <img width='200' src='/logo/logo_biskra_takraa.png' alt='HackathonDZ  & Biskra TAKRAA Association'
               title='HackathonDZ & Biskra TAKRAA Association'/>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click='drawer=!drawer'></v-app-bar-nav-icon>
        </v-app-bar>
        <v-container class='pa-0' fill-height style='height:70vh'>
          <v-row align='center'
                 justify='center'>
            <v-col class='pa-0'>
              <v-card-text class='pa-1'>
                <div class='text-center font-weight-bold font-italic'>
                  <h1 class='text-h5 text-sm-h4 text-md-h3 text-center font-weight-bold'
                      style='font-family: "Kufam", serif !important'>
                    {{ $t('texts.index.sectionInto.hackforalgeria1') }} <span
                    class='primary--text'> {{ $t('texts.index.sectionInto.hackforalgeria2') }}</span>
                  </h1>
                  <img width='100%' src='/sections/startDate.png'/>
                  <v-btn class="mt-10" href="https://docs.google.com/forms/d/e/1FAIpQLScErAhNs-_1VLmSLl8dJD65EL2S2u9eIlJvCiYQVfQuqOSSGw/viewform" x-large color='primary' rounded>&nbsp;{{ $t('texts.index.sectionInto.registrationSection1') }}&nbsp;
                  </v-btn>
                  <br/>
                  <div class='justify-center text-center mx-auto mt-3 text-h5 font-weight-bold'
                       style='font-family: "Kufam", serif !important'>
                    {{ $t('texts.index.sectionInto.rendezvous') }}
                  </div>
                </div>

              </v-card-text>

            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>
    <section id='about' class='mb-15 text-center pt-15'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <h2> {{ $t('texts.index.sectionInfo.title') }}
                  <span class='primary--text font-italic'>            {{ $t('texts.index.sectionInfo.titleAlgeria') }}
</span></h2>
                <br/>
                <v-divider class='primary'></v-divider>
                <br/>
                <p>
                  {{ $t('texts.index.sectionInfo.description') }}
                </p>
                <br/>
                <v-btn href="https://m.me/hackathondz/" rounded large color="primary">
                  {{ $t('texts.index.sectionInfo.info') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols='12' lg='6' class='text-right pt-lg-10 pb-10'>
          <img width='100%' src='/svg/programming.svg'/>
        </v-col>
      </v-row>
    </section>
    <section id='fields' class='mb-15 text-center mb-15 mt-15 pt-15 px-5 px-lg-10'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionFields.title') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/> <br/>
      <v-card elevation="0" color="white" class='py-0 px-lg-10 px-2  rounded-xl'>
        <img width="100%" :src="'/fields/field_'+$i18n.locale+'.png'"/>
      </v-card>
    </section>
    <section id='date' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionDate.title') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/>
      <div class=''>
        <v-card height='100%' color='transparent' dark elevation='0' class='pa-5'
                style='position: relative;padding-bottom:50px'>

          <v-card-text>
            <h2 class='text-break'>
              {{ $t('texts.index.sectionDate.description') }}

            </h2>
            <br/> <br/> <br/>
            <no-ssr>
              <vac :end-time='new Date(1635577200000)'>
                   <span
                     slot='process'
                     slot-scope='{ timeObj }'>
                  <v-row>
                  <v-col cols='12' md='6' lg='3' xl='6'>
                    <v-sheet width='100%' height='200' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-10'
                             justify='center'>
                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.d }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                                          {{ $t('texts.index.sectionDate.days') }}

                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>
                  </v-col>
                  <v-col cols='12' md='6' lg='3' xl='6'>
                    <v-sheet width='100%' height='200' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-10'
                             justify='center'>
                       <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.h }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                                          {{ $t('texts.index.sectionDate.hours') }}
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='12' md='6' lg='3' xl='6'>
                    <v-sheet width='100%' height='200' class='primary darken-1  text-center rounded-lg'>
                                             <v-row align='center' class='pt-10' justify='center'>

                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.m }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                                          {{ $t('texts.index.sectionDate.minutes') }}
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='12' md='6' lg='3' xl='6'>
                    <v-sheet width='100%' height='200' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-10'
                             justify='center'>
                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.s }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                                          {{ $t('texts.index.sectionDate.seconds') }}
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>

                </v-row>
                     </span>
              </vac>


            </no-ssr>
          </v-card-text>
        </v-card>
      </div>
    </section>
    <section id='location' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
            {{ $t('texts.index.sectionLocation.title') }}
          </h2>
          <br/>
          <v-divider style='width:250px' class='primary mx-auto'></v-divider>
          <br/> <br/> <br/>
          <img class='hidden-lg-and-up mb-15' width='100%' src='/svg/location.svg'/>

          <v-card class='mx-auto' color='transparent' elevation='0' max-width='600'>
            <h3 class='location-biskra text-md-h1 text-h3 text-break' style="font-family: 'Kufam', serif !important">
              {{ $t('texts.index.sectionLocation.description') }}
            </h3>
            <br/>
            <p>{{ $t('texts.index.sectionLocation.soon') }}</p>
          </v-card>

        </v-col>
        <v-col class='hidden-md-and-down'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <img width='100%' src='/svg/location.svg'/>
              </v-col>
            </v-row>
          </v-container>


        </v-col>
      </v-row>


    </section>
    <section id='prizes' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h4 font-weight-medium' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionPrizes.title1') }}
        <span class='primary--text font-weight-bold'>
          {{ $t('texts.index.sectionPrizes.title2') }}
        </span>
        {{ $t('texts.index.sectionPrizes.title3') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/> <br/>

      <h5 class='prize-number mt-5 text-md-h1 text-h4 text-break' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionPrizes.description') }}
      </h5>
      <br/>
      <p>
        {{ $t('texts.index.sectionPrizes.soon') }}
      </p>
    </section>
    <section id='partners' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionPartners.title') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/> <br/> <br/>
      <v-row class=' white rounded-t-xl'>
        <v-col cols='12' lg='4'
               class='pa-2' v-for='partner in partners1'>
          <div class=' rounded-xl'>
            <v-card height='250' light link :href='partner.url' elevation='0' class='pa-1 pa-lg-3 rounded-xl'>
              <v-container fill-height>
                <v-row class='justify-center align-center'>
                  <v-col>
                    <v-card-title class='justify-center'>
                      <img width='100' :title='partner.name' :alt='partner.name' :src='partner.img'/>
                    </v-card-title>
                    <v-card-text class='text-center'>
                      <h2 class='font-weight-bold' v-text='partner.name'></h2>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>

            </v-card>

          </div>
        </v-col>
      </v-row>
      <v-row class=' white rounded-b-xl'>
        <v-col cols='12' lg='4'
               class='pa-2' v-for='partner in partners2'>
          <div class=' rounded-xl'>
            <v-card height='250' light link :href='partner.url' elevation='0' class='pa-1 pa-lg-3 rounded-xl'>
              <v-container fill-height>
                <v-row class='justify-center align-center'>
                  <v-col>
                    <v-card-title class='justify-center'>
                      <img width='100' :title='partner.name' :alt='partner.name' :src='partner.img'/>
                    </v-card-title>
                    <v-card-text class='text-center'>
                      <h2 class='font-weight-bold' v-text='partner.name'></h2>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>

            </v-card>

          </div>
        </v-col>
      </v-row>

    </section>
    <section id='sponsors' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionSponsors.title') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/> <br/> <br/>
      <v-row class=' white rounded-xl'>
        <v-col cols='12' lg='4'
               class='pa-2' v-for='sponsor in sponsors'>
          <div class=' rounded-xl'>
            <v-card height='400' light link :href='sponsor.url' elevation='0' class='pa-1 pa-lg-3 rounded-xl'>
              <v-container fill-height>
                <v-row class='justify-center align-center'>
                  <v-col>
                    <v-card-title class='justify-center'>
                      <img width='200' :title='sponsor.name' :alt='sponsor.name' :src='sponsor.img'/>
                    </v-card-title>
                    <v-card-text class='text-center'>
                      <h2 class='font-weight-bold' v-text='sponsor.name'></h2>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>

            </v-card>

          </div>
        </v-col>
      </v-row>
    </section>
    <section id='agenda' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionAgenda.title') }}
      </h2>
      <br/>
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br/> <br/> <br/>
      <h3 class='prize-number text-md-h1 text-h3 text-break' style="font-family: 'Kufam', serif !important">
        {{ $t('texts.index.sectionAgenda.soon') }}
      </h3>
      <!--
            <v-card class='mx-auto' color='transparent' elevation='0' max-width='700'>
        <v-list color='primary darken-1' rounded>
          <div v-for='item in agenda'>
            <v-subheader>
              {{ item.title }}
            </v-subheader>
            <v-list-item link v-for='subItem in item.items'>
              <v-list-item-avatar color='white'>
                <v-icon color='primary'>mdi-calendar</v-icon>
              </v-list-item-avatar>
              <v-list-item-content class='text-left'>
                <v-list-item-title class='overflow-y-auto text-wrap'>{{ subItem.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ subItem.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </div>

        </v-list>
      </v-card>

      -->
    </section>
    <section id='faq' class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <h2 class='text-h2 font-weight-bold' style="font-family: 'Kufam', serif !important">
            {{ $t('texts.index.sectionFaq.title') }}

          </h2>
          <br/>
          <v-divider style='width:250px' class='primary mx-auto'></v-divider>
          <br/> <br/> <br/>
          <img class='hidden-lg-and-up mb-15' width='100%' src='/svg/unknown.svg'/>
          <v-btn color='primary' large href='https://m.me/hackathondz'> {{ $t('texts.index.sectionFaq.soon') }}
          </v-btn>
          <!--
                    <v-card class='mx-auto' color='transparent' elevation='0' max-width='600'>
                      <v-expansion-panels>
                        <v-expansion-panel class='primary'
                                           v-for='(item,i) in faqList'
                                           :key='i'
                        >
                          <v-expansion-panel-header>
                            {{ item.q }}
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class='font-weight-bold text-left'>
                            {{ item.a }}
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card>
          -->
        </v-col>
        <v-col class='hidden-md-and-down'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <img width='100%' src='/svg/unknown.svg'/>
              </v-col>
            </v-row>
          </v-container>


        </v-col>
      </v-row>
    </section>
    <section id='contact' class='mb-15 text-center pt-15'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <h2 class='text-h4 font-weight-bold' style="font-family: 'Kufam', serif !important">
                  {{ $t('texts.index.sectionContact.title') }}
                  <span class='primary--text'>{{ $t('texts.index.sectionContact.contactus') }}</span></h2>
                <br/>
                <v-divider class='primary'></v-divider>
                <br/>
                <v-btn href='mailto:contact@hackathon2021.dz' class='mt-5'
                       :width='$vuetify.breakpoint.lgAndUp ? 300 : 200' color='primary' rounded x-large>
                  <v-icon>mdi-email</v-icon> &nbsp; {{ $t('texts.index.sectionContact.email') }}
                </v-btn>
                <v-btn href='tel:+213541477334' class='mt-5' :width='$vuetify.breakpoint.lgAndUp ? 300 : 200'
                       color='primary' rounded x-large>
                  <v-icon>mdi-phone</v-icon> &nbsp; {{ $t('texts.index.sectionContact.phone') }}
                </v-btn>
                <v-btn class='mt-5 mb-5' href='https://www.facebook.com/hackathondz'
                       :width='$vuetify.breakpoint.lgAndUp ? 300 : 200' color='primary' rounded x-large>
                  <v-icon>mdi-facebook</v-icon> &nbsp; {{ $t('texts.index.sectionContact.facebook') }}
                </v-btn>

              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols='12' lg='6' class='text-right pt-lg-10 pb-10'>
          <img width='100%' src='/svg/Email_Send.svg'/>
        </v-col>
      </v-row>
    </section>
    <!-- Messenger Chat Plugin Code -->
    <div id='fb-root'></div>

    <!-- Your Chat Plugin code -->
    <div id='fb-customer-chat' class='fb-customerchat'>
    </div>

    <v-snackbar v-model='snack' color='primary' :timeout='5000'>
      {{ $t('texts.index.registrationDone') }}
    </v-snackbar>
  </div>
</template>


<script>
import {gsap} from 'gsap'

export default {
  layout: 'indexLayout',
  head() {
    return {
      title: this.$t('pages.index')
    }
  },
  mounted() {
    if (this.$route.query.success == "OK") {
      this.snack = true;
    }


    var chatbox = document.getElementById('fb-customer-chat')
    chatbox.setAttribute('page_id', '105574008533977')
    chatbox.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v12.0'
      })
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))

    const {hackdz} = this.$refs
    gsap.from(hackdz, {opacity: 0, duration: 1, x: 50})
    gsap.from('#startDateDesktop', {duration: 2, opacity: -1})

  },
  data() {
    return {
      snack:false,
      drawer: false,
      partners1: [

        {
          name: 'Ministry of Youth and Sports',
          img: '/partnership/biskra.png',
          url: 'https://www.mjs.gov.dz/'
        },
        {
          name: 'Wilaya of Biskra',
          img: '/partnership/biskra.png',
          url: 'http://www.wilayabiskra.dz/'
        },
        {
          name: 'Ministry of Culture and Arts',
          img: 'https://m-culture.gov.dz/templates/Culture/images/logo_culture.png',
          url: 'https://m-culture.gov.dz/'
        }
      ],
      partners2: [
        {
          name: 'Scientific and Technical Research Center on Arid Regions',
          img: '/partnership/crstra.png',
          url: 'https://www.crstra.dz/'
        },
        {
          name: 'Directorate of Youth and Sports Biskra',
          img: '/partnership/djsbiskra.png',
          url: ''
        },
        {
          name: 'Chamber of Traditional Industry and Crafts in Biskra',
          img: '/partnership/cambiskra.jpg',
          url: 'https://web.facebook.com/%D8%BA%D8%B1%D9%81%D8%A9-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D9%82%D9%84%D9%8A%D8%AF%D9%8A%D8%A9-%D9%88-%D8%A7%D9%84%D8%AD%D8%B1%D9%81-%D9%84%D8%A8%D8%B3%D9%83%D8%B1%D8%A9-179606028737807'
        },
        {
          name: 'Moubachir Silicon Valley',
          img: '/partnership/moubachir_sv.png',
        },



      ],
      sponsors: [
        {
          name: 'Sonelgaz',
          img: '/sponsors/sonelgaz.jpg',
          url: 'https://www.sonelgaz.dz/'
        },
        {
          name: 'NBbiskra Formation',
          img: '/sponsors/nbformation.jpg',
          url: 'https://web.facebook.com/NBBiskraformation'
        },
        {
          name: 'Naftal',
          img: '/sponsors/naftal.jpg',
          url: 'https://www.naftal.dz/'
        },
        {
          name: 'GDG Tiaret',
          img: '/partnership/gdgtiaret.png',
        },
        {
          name: 'Algerian Popular Loan',
          img: '/sponsors/logo_cpa.png',
        },
        {
          name: 'Local Development Bank',
          img: '/sponsors/logo_bdl.png',
        }

      ],

      agenda: [
        {
          title: 'First Day - 29/10/2021',
          items: [
            {
              title: 'Welcoming travelers from outside Biskra at the hotel',
              subtitle: '10:00 AM - 10:00 PM'
            }
          ]
        },
        {
          title: 'Second Day - 30/10/2021',
          items: [
            {
              title: 'Event Start - Introducing Hackathon & enjoying with a musical show ',
              subtitle: '08:00 AM - 09:00 AM'
            },
            {
              title: 'Event Start',
              subtitle: '08:00 AM - 09:00 AM'
            }
          ]
        },
        {
          title: 'Third Day - 31/10/2021',
          items: [
            {
              title: 'Welcoming travelers from outside Biskra at the hotel',
              subtitle: '10:00 AM - 10:00 PM'
            }
          ]
        },
        {
          title: 'Fourth Day - 01/11/2021',
          items: [
            {
              title: 'Welcoming travelers from outside Biskra at the hotel',
              subtitle: '10:00 AM - 10:00 PM'
            }
          ]
        }

      ],
      faqList: [
        {
          q: 'When will start Hackathon DZ?',
          a: 'Hackathon DZ event will start from 30/10/2021 at 8:00 AM'
        },
        {
          q: 'How much participant will join to this event?',
          a: 'About 200 Participants'
        },
        {
          q: 'How much fees of joining this event?',
          a: '1000 DA for each team'
        },
        {
          q: '',
          a: ''
        },
        {
          q: '',
          a: ''
        },
        {
          q: '',
          a: ''
        }

      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  }
}
</script>
<style scoped>
.prize-number {
  font-weight: 900;
  text-align: center;
  letter-spacing: -4px;
  line-height: 2;
  background: linear-gradient(#00dd86, #6deab8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.location-biskra {
  font-weight: 900;
  text-align: center;
  letter-spacing: -4px;
  line-height: 1.3;
  background: linear-gradient(#26cb8b, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
