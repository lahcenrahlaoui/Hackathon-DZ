<template>
  <div>
    <v-navigation-drawer color='primary' v-model='drawer' app temporary>

    </v-navigation-drawer>
    <section class='mb-15' >
      <v-img height='100vh' class='hidden-md-and-down px-2'
             src='/backgrounds/bg0.png'>
        <v-app-bar class='mt-10 px-5' elevation='0' color='transparent'>
          <img width='100' src='/logo/logo.png'/>
          <v-spacer></v-spacer>
          <v-btn rounded small text>Home</v-btn>
          <v-btn rounded small text>About</v-btn>
          <v-btn rounded small text>Prizes</v-btn>
          <v-btn rounded small text>Agenda</v-btn>
          <v-btn rounded small text>FAQ</v-btn>
          <v-btn rounded small text>Contact</v-btn>
          <v-btn rounded outlined small color='primary'>Register in HACKATHON</v-btn>

        </v-app-bar>
        <v-card-title class='flex-row text-break'>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols='6'>
              <div class='mt-lg-7 mt-xl-0'>
                <img width='100%' src='/sections/startDate.png'/>

              </div>

            </v-col>
            <v-col cols='6'>
              <div class='text-left mt-5 mt-xl-15 pt-10 px-10 font-weight-bold font-italic'>
                <h1 class='text-h1 font-weight-bold' style='font-family: "Montserrat", serif !important'>
                  HACK FOR <span class='primary--text'> ALGERIA</span>
                </h1>
                <br/>
                <v-btn color='primary' rounded width='300'>REGISTER IN HACKATHON DZ</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
      </v-img>
      <v-img height='100vh' class='hidden-lg-and-up'  src='/backgrounds/bg0m.png'>
        <v-app-bar class='hidden-lg-and-up mt-10 px-2' elevation='0' color='transparent'>
          <img width='75' src='/logo/logo.png'/>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click='drawer=!drawer'></v-app-bar-nav-icon>
        </v-app-bar>
        <v-container class='pa-0' fill-height style='height:70vh'
        >
          <v-row align="center"
                 justify="center">
            <v-col class='pa-0'>
              <v-card-text class='pa-1'>
                <div class='text-center font-weight-bold font-italic'>
                  <h1 class='text-h5 text-sm-h4 text-md-h3 text-center font-weight-bold' style='font-family: "Montserrat", serif !important'>
                    HACKATHON DZ <br/>
                    HACK FOR <span class='primary--text'> ALGERIA</span>
                  </h1>
                  <img width='100%' src='/sections/startDate.png'/>
                  <v-btn class='mt-n15' color='primary' rounded width='250' >REGISTER IN HACKATHON DZ</v-btn>
                  <br/>

                </div>

              </v-card-text>

            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>
    <v-img width='100%' class='pa-5 mt-15' src='/sections/about.png'/>
    <section class='mb-15'>
      <v-row dense>
        <v-col  cols='12' lg='6' class='text-center justify-center pt-10 pb-lg-10 px-10'>
          <v-container fill-height fluid class='pa-0 ma-0'>
            <v-row align="center"
                   justify="center" class='pa-0 ma-0'>
              <v-col class='pa-0 ma-0'>
                <h2>For Hackathon DZ ... For <span class='primary--text font-italic'>Algeria</span></h2>
                <br/>
                <v-divider class='primary'></v-divider>
                <br/>
                <p>
                  <b>Hackathon DZ</b> is an event where a group of people with common interests and skills meet to exchange experiences or solve a problem. And the meeting can also aim to start building a project. The Hackathon is considered to be the beating heart of stimulating innovations, between individuals and facilities.It should be noted that such events are of interest to organizations, large or small, and it should be noted that recently this term has started to be limited to developers. applications, programmers and designers that are organized by specialized technology companies.
                </p>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols='12' lg='6' class='text-right pt-lg-10 pb-10'>
          <img width='100%' src='/sections/computer.png'/>
        </v-col>
      </v-row>
    </section>
    <v-img width='100%' class='pa-5 mt-n10' src='/sections/prizes.png'/>
    <section class='mb-15 mt-10  text-center'>
      <h2 class='text-h4 font-weight-medium' style="font-family: 'Montserrat', serif !important"> Anyone who participates in <span class='primary--text font-weight-bold'>HackathonDZ</span> is a winner
      </h2>
      <br/>
      <v-divider  style='width:250px' class='primary mx-auto'></v-divider>
      <br/>

      <h3 class='prize-number text-h1 text-break' style="font-family: 'Montserrat', serif !important">
       + 2,500,000 DZD
      </h3>
      <br/>
      <p>PS : More information will be published soon</p>
    </section>
    <v-img width='100%' class='pa-5' src='/sections/sponsors.png'/>

  </div>
</template>
<script>
export default{
  layout:'indexLayout',
  data() {
    return {
      drawer: false
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
</style>
