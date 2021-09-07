<template>
  <div class='pa-lg-10'>
    <v-card elevation='10' class='overflow-hidden'>

      <v-row class='hidden-md-and-down'>
        <v-col cols='6' class='background overflow-hidden'>
        </v-col>
        <v-col class='primary '>
          <v-card height='100%' color='transparent' dark elevation='0' class='pa-5'
                  style='position: relative;padding-bottom:50px'>
            <v-card-title class='font-weight-bold text-h3' style='font-family: "Kufam", serif !important'>
              COMING SOON!
            </v-card-title>
            <v-card-text>
              DZ HACKATHON'S WEBSITE WILL BE LAUNCHED IN:
              <br /> <br /> <br />
              <no-ssr>
                <vac :end-time='new Date(1631228400000)'>
                   <span
                     slot='process'
                     slot-scope='{ timeObj }'>
                  <v-row>
                  <v-col cols='3'>
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
                            Days
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>
                  </v-col>
                  <v-col cols='3'>
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
                            Hours
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='3'>
                    <v-sheet width='100%' height='200' class='primary darken-1  text-center rounded-lg'>
                                             <v-row align='center' class='pt-10' justify='center'>

                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.m }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                            Minutes
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='3'>
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
                            Seconds
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
            <v-card-actions style='position: absolute;bottom: 0;padding-top: 0;padding-bottom: 0'>
              <v-list dense color='transparent'>
                <v-list-item>
                  Contact us
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class='mr-3'>
                    <v-icon>mdi-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    0671496607
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class='mr-3'>
                    <v-icon>mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    contact@hackathondz.net
                  </v-list-item-title>
                </v-list-item>

              </v-list>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class='hidden-lg-and-up'>
        <v-card height='100%' color=''  elevation='0' class='pa-5'
                style='position: relative;padding-bottom:50px'>
          <v-card-title class='font-weight-bold text-center justify-center text-h3 text-break' style='font-family: "Kufam", serif !important'>
            COMING SOON!
          </v-card-title>
          <v-card-text class='text-center'>
            DZ HACKATHON'S WEBSITE WILL BE LAUNCHED IN:
            <p class='mt-5 mb-n5'>
              <img height='200' class='mx-auto' src='/logo/logo.png'/>
            </p>
            <br /> <br /> <br />
            <no-ssr>
              <vac :end-time='new Date(1631228400000)'>
                   <span
                     slot='process'
                     slot-scope='{ timeObj }'>
                  <v-row align='center'>
                  <v-col cols='6' class='pa-5'>
                    <v-sheet dark height='150' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-5'
                             justify='center'>
                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.d }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                            Days
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>
                  </v-col>
                  <v-col cols='6' class='pa-5'>
                    <v-sheet dark height='150' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-5'
                             justify='center'>
                       <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.h }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                            Hours
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='6' class='pa-5'>
                    <v-sheet dark height='150' class='primary darken-1  text-center rounded-lg'>
                        <v-row align='center' class='pt-5'
                               justify='center'>

                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.m }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                            Minutes
                          </h3>
                        </v-col>
                      </v-row>


                    </v-sheet>

                  </v-col>
                  <v-col cols='6' class='pa-5'>
                    <v-sheet dark height='150' class='primary darken-1  text-center rounded-lg'>
                      <v-row align='center' class='pt-5'
                             justify='center'>
                        <v-col cols='12'>
                          <h2 class='font-weight-black text-h3'>
                            {{ timeObj.s }}
                          </h2>
                        </v-col>
                        <v-col>
                          <h3>
                            Seconds
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
          <v-card-actions class='pt-10'>
            <v-list dense color='transparent'>
              <v-list-item>
                Contact us
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class='mr-3'>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  0671496607
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class='mr-3'>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  biskrareads07@gmail.com
                </v-list-item-title>
              </v-list-item>

            </v-list>
          </v-card-actions>
        </v-card>

      </div>
    </v-card>

  </div>
</template>

<style scoped>
.background {
  height: 550px;
  background: url("/backgrounds/bg1.png") no-repeat center center !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
}
</style>
