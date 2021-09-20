<template>
  <div>
    <v-navigation-drawer color='primary' v-model='drawer' app temporary>

    </v-navigation-drawer>
    <section class=''>
      <v-img height='100vh' class='hidden-md-and-down px-2'
             src='/backgrounds/bg0.png'>
        <v-app-bar class='mt-10 px-5' elevation='0' color='transparent'>
          <img width='100' src='/logo/logo.png' />
          <v-spacer></v-spacer>
          <v-btn rounded x-small text>About</v-btn>
          <v-btn rounded x-small text>Prizes</v-btn>
          <v-btn rounded x-small text>Partners</v-btn>
          <v-btn rounded x-small text>Sponsors</v-btn>
          <v-btn rounded x-small text>Agenda</v-btn>
          <v-btn rounded x-small text>FAQ</v-btn>
          <v-btn rounded x-small text>Contact</v-btn>
          <v-btn rounded outlined small color='primary'>Register in HACKATHON</v-btn>

        </v-app-bar>
        <v-card-title class='flex-row text-break'>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols='6'>
              <div class='mt-lg-7 mt-xl-0'>
                <img id='startDateDesktop' width='100%' src='/sections/startDate.png' />

              </div>

            </v-col>
            <v-col cols='6'>
              <div ref='hackdz' class='text-left mt-5 mt-xl-15 pt-10 px-10 font-weight-bold font-italic'>
                <h1 class='text-h1 font-weight-bold' style='font-family: "Montserrat", serif !important'>
                  HACK FOR <span class='primary--text'> ALGERIA</span>
                </h1>
                <br />
                <v-btn color='primary' rounded width='300'>REGISTER IN HACKATHON DZ</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
      </v-img>
      <v-img height='100vh' class='hidden-lg-and-up' src='/backgrounds/bg0m.png'>
        <v-app-bar class='hidden-lg-and-up mt-10 px-2' elevation='0' color='transparent'>
          <img width='75' src='/logo/logo.png' />
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click='drawer=!drawer'></v-app-bar-nav-icon>
        </v-app-bar>
        <v-container class='pa-0' fill-height style='height:70vh'
        >
          <v-row align='center'
                 justify='center'>
            <v-col class='pa-0'>
              <v-card-text class='pa-1'>
                <div class='text-center font-weight-bold font-italic'>
                  <h1 class='text-h5 text-sm-h4 text-md-h3 text-center font-weight-bold'
                      style='font-family: "Montserrat", serif !important'>
                    HACKATHON DZ <br />
                    HACK FOR <span class='primary--text'> ALGERIA</span>
                  </h1>
                  <img width='100%' src='/sections/startDate.png' />
                  <v-btn class='mt-n10' color='primary' rounded width='250'>REGISTER IN HACKATHON DZ</v-btn>
                  <br />

                </div>

              </v-card-text>

            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>
    <section class='mb-15 text-center pt-15'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <h2>For Hackathon DZ ... For <span class='primary--text font-italic'>Algeria</span></h2>
                <br />
                <v-divider class='primary'></v-divider>
                <br />
                <p>
                  <b>Hackathon DZ</b> is an event where a group of people with common interests and skills meet to
                  exchange experiences or solve a problem. And the meeting can also aim to start building a project. The
                  Hackathon is considered to be the beating heart of stimulating innovations, between individuals and
                  facilities.It should be noted that such events are of interest to organizations, large or small, and
                  it should be noted that recently this term has started to be limited to developers. applications,
                  programmers and designers that are organized by specialized technology companies.
                </p>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols='12' lg='6' class='text-right pt-lg-10 pb-10'>
          <img width='100%' src='/sections/computer.png' />
        </v-col>
      </v-row>
    </section>
    <section class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h4 font-weight-medium' style="font-family: 'Montserrat', serif !important"> Anyone who
        participates in <span class='primary--text font-weight-bold'>HackathonDZ</span> is a winner
      </h2>
      <br />
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br />

      <h3 class='prize-number text-md-h1 text-h3 text-break' style="font-family: 'Montserrat', serif !important">
        + 500,000 DZD Prizes
      </h3>
      <br />
      <p>PS : More information will be published soon</p>
    </section>
    <section class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Montserrat', serif !important"> Our Partners
      </h2>
      <br />
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br /> <br /> <br />
      <v-row>
        <v-col :offset='partners.indexOf(partner)===3 && $vuetify.breakpoint.lgAndUp ? 4:0 ' cols='12' lg='4'
               class='pa-2' v-for='partner in partners'>
          <div class='module-border-wrap rounded-xl'>
            <v-card height='400' light link :href='partner.url' class='pa-1 pa-lg-5  rounded-xl'>
              <v-container fill-height>
                <v-row class='justify-center align-center'>
                  <v-col>
                    <v-card-title class='justify-center'>
                      <img width='250' :src='partner.img' />
                    </v-card-title>
                    <v-card-text class='text-center'>
                      <h2 class='font-weight-black' v-text='partner.name'></h2>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>

            </v-card>

          </div>
        </v-col>
      </v-row>
    </section>
    <section class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <h2 class='text-h2 font-weight-bold' style="font-family: 'Montserrat', serif !important"> Agenda
      </h2>
      <br />
      <v-divider style='width:250px' class='primary mx-auto'></v-divider>
      <br /> <br /> <br />
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
    </section>
    <section class='mb-15 mt-15 pt-15 px-5 px-lg-10 text-center'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <h2 class='text-h2 font-weight-bold' style="font-family: 'Montserrat', serif !important"> FAQ
          </h2>
          <br />
          <v-divider style='width:250px' class='primary mx-auto'></v-divider>
          <br /> <br /> <br />
          <img class='hidden-lg-and-up mb-15' width='100%' src='/svg/unknown.svg' />

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

        </v-col>
        <v-col class='hidden-md-and-down'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
          <img width='100%' src='/svg/unknown.svg' />
                </v-col>
            </v-row>
          </v-container>


        </v-col>
      </v-row>
    </section>
    <section class='mb-15 text-center pt-15'>
      <v-row dense>
        <v-col cols='12' lg='6' class='text-center justify-center pt-10 px-10'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align='center'
                   justify='center' class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <h2 class='text-h4 font-weight-bold' style="font-family: 'Montserrat', serif !important">Wanna know more? <span class='primary--text'>Contact US!</span></h2>
                <br />
                <v-divider class='primary'></v-divider>
                <br />
                <v-btn class='mt-5' :width='$vuetify.breakpoint.lgAndUp ? 300 : 200' color='primary' rounded x-large>
                  <v-icon>mdi-email</v-icon> &nbsp; E-mail
                </v-btn>
                <v-btn class='mt-5' :width='$vuetify.breakpoint.lgAndUp ? 300 : 200' color='primary' rounded x-large>
                  <v-icon>mdi-phone</v-icon> &nbsp; Phone Number
                </v-btn>
                <v-btn class='mt-5 mb-5' href='https://m.me/hackathondz' :width='$vuetify.breakpoint.lgAndUp ? 300 : 200' color='primary' rounded x-large>
                  <v-icon>mdi-facebook</v-icon> &nbsp; Facebook
                </v-btn>

              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols='12' lg='6' class='text-right pt-lg-10 pb-10'>
          <img width='100%' src='/svg/Email_Send.svg' />
        </v-col>
      </v-row>
    </section>


  </div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  layout: 'indexLayout',
  mounted() {
    const { hackdz } = this.$refs
    gsap.from(hackdz, { opacity: 0, duration: 1, x: 50 })
    gsap.from('#startDateDesktop', { duration: 2, opacity: -1 })

  },
  data() {
    return {
      drawer: false,
      partners: [
        {
          name: 'Wilaya of Biskra',
          img: '/partnership/biskra.png',
          url: ''
        },
        {
          name: 'Biskra TAKRAA Association',
          img: '/partnership/biskra_takraa.jpg',
          url: 'https://www.facebook.com/biskrareads07/'
        },
        {
          name: 'Centre de recherche scientifique et technique sur les régions arides (CRSTRA)',
          img: '/partnership/crstra.png',
          url: 'https://www.crstra.dz/'
        },
        {
          name: 'Ministry of Youth and Sports',
          img: '/partnership/biskra.png',
          url: ''
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
  }
}
</script>
<style scoped>
.prize-number {
  font-weight: 900;
  text-align: center;
  letter-spacing: -4px;
  background: -webkit-linear-gradient(#00dd86, #6deab8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.module-border-wrap {
  position: relative;
  background: linear-gradient(#00dd86, #6deab8);
  padding: 5px;
}

</style>
