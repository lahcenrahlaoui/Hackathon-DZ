<template>
  <div class='text-center'>
    <v-card-title>
      <h1 class='grey--text text--accent-1'>قائمة المشتركين</h1>
      <v-spacer></v-spacer>
      <v-select class='mt-5' v-model='filterEmail' item-text='ar_name' item-value='id' :items='listWilaya' label='الولاية' light dense style='width:0px' color='primary' outlined></v-select>
    </v-card-title>
    <br />
    <v-btn @click='emailDialog=true' class='mt-5 mb-15' v-if='selectedParticipants.length>0'>
      <v-icon>mdi-email</v-icon> &nbsp;
      إرسال بريد تأكيد ({{selectedParticipants.length}} مستقبل )
    </v-btn>

    <v-card light class='pa-2'>



      <v-data-table dense show-select v-model='selectedParticipants' item-key="email"
        :headers='headers'
        :items='participants.filter(p => (filterEmail) ? p.wilaya === filterEmail : true )'
        :footer-props="{
                      itemsPerPageText: 'عدد الأسطر في  الصفحة :',
                      pageText: '{0}-{1} من {2}'
              }">
        <template v-slot:item.wilaya='{ item }'>
          {{ listWilaya.find(w => w.id == item.wilaya).ar_name }}
        </template>
        <template v-slot:item.teamParticipant='{item}'>
          <v-checkbox  disabled v-model='item.teamParticipant'></v-checkbox>
        </template>
        <template v-slot:item.send1Confirmation='{item}'>
          <v-checkbox  disabled v-model='item.send1Confirmation'></v-checkbox>
        </template>
        <template v-slot:item.confirmed='{item}'>
          <v-chip small :color='item.confirmed ? "primary" : "secondary"'>
            {{
              !item.confirmed ? 'غير مؤكد' : 'مؤكد'
            }}
          </v-chip>

        </template>
        <template v-slot:item.sex='{item}'>
          <v-chip small :color='item.sex==="m" ? "blue" : "pink"' class='white--text'>
            {{
              item.sex !== "m" ? 'أنثى' : 'ذكر'
            }}
          </v-chip>

        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model='emailDialog' persistent max-width='600'>
      <v-card light>
        <v-card-title class='secondary white--text'>
          إرسال طلبات التأكيد ({{selectedParticipants.length}})
          <v-spacer></v-spacer>
          <v-btn icon color='white' @click='emailDialog=false'><v-icon>fas fa-times</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-subheader>قائمة الإيمايلات</v-subheader>
            <v-chip class='ma-1' close @click.close='removeSelectedParticipant(p)' small v-for='p in selectedParticipants'>
               {{p.email}}
            </v-chip>
          <br/> <br/>
          <v-btn @click='sendFirstConfirmationEmail' color='secondary' elevation='0'>إرسال إيمايل التأكيد التسجيل الأولي</v-btn>
          <v-btn color='info' disabled elevation='0'>إرسال إيمايل تأكيد التسجيل النهائي</v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model='successSnack' color='success' :timeout='5000'>
      تمت العملية بنجاح
    </v-snackbar>
  </div>

</template>

<script>
import list from 'assets/wilaya.js'

export default {
  name: 'participants',
  layout: 'adminDashboard',
  mounted() {
    this.$store.dispatch('participant/GET_PARTICIPANTS').then((value) => {
      if (value !== 1500 && value !== 1404) {
        this.participants = value

      }
    })

  },
  data() {
    return {
      headers: [
        {
          text: 'الإسم',
          value: 'firstnameAR',
          align:'right',
        },
        { text: 'اللقب', value: 'lastnameAR',          align:'right',
        },
        {
          text:'الجنس',value:'sex',align:'right'
        },
        { text: 'رقم الهاتف', value: 'phoneNumber' ,          align:'right',
        },
        { text: 'البريد الإلكتروني', value: 'email' ,          align:'right',
        },
        { text: 'الولاية', value: 'wilaya' ,          align:'right',
        },
        { text: 'مشارك بفريق', value: 'teamParticipant' ,          align:'right',
        },
        {
          text:' إرسال التأكيد',value:'send1Confirmation',align: 'right',
        },
        { text: 'تأكيد الدفع', value: 'confirmed',          align:'right',
        }

      ],
      listWilaya:list,
      participants:[],
      filterEmail:null,
      selectedParticipants: [],
      emailDialog: false,
      successSnack: false
    }
  },

  methods: {
    removeSelectedParticipant(p) {
      for( var i = 0; i < this.selectedParticipants.length; i++){

        if ( this.selectedParticipants[i] === p) {
          this.selectedParticipants.splice(i, 1);
          i--;
        }
      }
    },
    sendFirstConfirmationEmail() {
      var list = [];
      this.selectedParticipants.forEach(s => {
        list.push({
          email: s.email,
          arname : s.firstnameAR + ' '+ s.lastnameAR,
          enname : s.firstnameLT + ' '+ s.lastnameLT,

        })
      })
      this.$store.dispatch('participant/PARTICIPANT_SEND_CONFIRMATION_EMAIL',list).then((value) => {
        if (value !== 1500 && value !== 1404) {
          this.emailDialog=false
          this.successSnack = true;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
