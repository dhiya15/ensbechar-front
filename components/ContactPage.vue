<template>
    <div class="pt-8 pb-8 mt-3" data-aos="fade-up" :data-aos-delay="200" data-aos-anchor-placement="top-bottom">
      <v-container>
        <v-row>
          <v-col md="3" cols="12" align-self="center">
            <div class="hidden-sm-and-down">
              <v-col class="text-center" v-if="school.address != null && school.address != '' & school.address != undefined">
                <v-icon color="primary" size="32">mdi-map-marker</v-icon>
                <p>{{school.address}}</p>
              </v-col>

              <v-col class="text-center" v-if="(school.phone != null && school.fax != null)">
                <v-icon color="primary" size="32">mdi-phone</v-icon>
                <p>
                  <span v-if="school.phone != null && school.phone != '' & school.phone != undefined">
                    {{school.phone}}
                  </span>
                  <br>
                  <span v-if="school.fax != null && school.fax != '' & school.fax != undefined">
                    {{school.fax}}
                  </span>
                </p>
              </v-col>

              <v-col class="text-center" v-if="school.email != null && school.email != '' & school.email != undefined">
                <v-icon color="primary" size="32">mdi-email</v-icon>
                <p>{{school.email}}<br></p>
              </v-col>
            </div>
            <v-row class="hidden-md-and-up" v-if="school.address != null && school.address != '' & school.address != undefined">
              <v-col class="text-center" sm="4" cols="12">
                <v-icon color="primary" size="32">mdi-map-marker</v-icon>
                <p>{{school.address}}</p>
              </v-col>

              <v-col class="text-center" sm="4" cols="12">
                <v-icon color="primary" size="32">mdi-phone</v-icon>
                <p>
                  <span v-if="school.phone != null && school.phone != '' & school.phone != undefined">
                    {{school.phone}}
                  </span>
                  <br>
                  <span v-if="school.fax != null && school.fax != '' & school.fax != undefined">
                    {{school.fax}}
                  </span>
                </p>
              </v-col>

              <v-col class="text-center" sm="4" cols="12" v-if="school.email != null && school.email != '' & school.email != undefined">
                <v-icon color="primary" size="32">mdi-email</v-icon>
                <p>{{school.email}}<br></p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="1" class="pt-15 hidden-sm-and-down">
            <hr class="my_hr">
          </v-col>

          <v-col cols="12" md="8">
            <h2 class="text_primary">{{dict.send_message}}</h2>
            <p>
              {{dict.send_message_description}}
            </p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="dict.full_name"
                required
                filled
                dense
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="dict.email"
                required
                filled
                dense
              ></v-text-field>

              <v-textarea
                v-model="message"
                :rules="messageRules"
                filled
                :label="dict.message"
                auto-grow
              ></v-textarea>


              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 text-capitalize"
                @click="validate"
              >
                {{dict.send}}
                <span class="mx-2"></span>
                <v-progress-circular
                  v-if="contactLoad === true"
                  indeterminate
                  color="#F6B401"
                  size="20"
                ></v-progress-circular>
              </v-btn>

            </v-form>
            <v-alert dismissible class="mt-5" v-if="contactAlert === 1" type="success">{{dict.message_sent_success}}</v-alert>
            <v-alert dismissible class="mt-5" v-if="contactAlert === 2" type="error">{{dict.message_sent_error}}</v-alert>
          </v-col>

        </v-row>
      </v-container>
    </div>
</template>

<script>
  import aosMixin from '~/mixins/aos'
    export default {
      name: "ContactPage",
      mixins: [aosMixin],
      props: {
        school: Object
      },
      data: () => ({


        dict: {},


        fr_dict: {
          send_message: "Envoyer vous message",
          send_message_description: "Si vous avez des questions ou souhaitez obtenir des informations, n'hésitez pas à nous contacter en remplissant le formulaire suivant",
          send: "Envoyer",
          full_name: "Nom complet",
          email: "Email",
          message: "Message",
          full_name_required: "Nom compler est obligatoire",
          email_required: "Email est obligatoire",
          message_required: "Message est obligatoire",
          email_rule: 'Il faut saisir un e-mail valide',
          message_sent_success: "Message envoyé avec succé",
          message_sent_error: "Erreur"
        },
        en_dict: {
          send_message: "Send your message",
          send_message_description: "If you have any questions or would like information, do not hesitate to contact us by filling out the following form",
          send: "Send",
          full_name: "Full Name",
          email: "Email",
          message: "Message",
          full_name_required: "Full name is required",
          email_required: "Email is requiredd",
          message_required: "Message is requiredd",
          email_rule: 'E-mail must be valid',
          message_sent_success: "Message sent succefully",
          message_sent_error: "Error when sending your message"
        },
        ar_dict: {
          send_message: "ارسل رسالتك الان",
          send_message_description: "إذا كانت لديك أي أسئلة أو ترغب في الحصول على معلومات ، فلا تتردد في الاتصال بنا عن طريق ملء النموذج التالي",
          send: "ارسال",
          full_name: "الاسم الكامل",
          email: "الايميل",
          full_name_required: "الاسم الكامل اجباي",
          email_required: "الايميل اجباري",
          message_required: "الرسالة اجباري",
          message: "الرسالة",
          email_rule: 'يجب ادخال ايميل صحيح',
          message_sent_success: "تم ارسال الرسالة بنجاح",
          message_sent_error: "لم يتم ارسال الرسالة بنجاح"
        },


        valid: true,
        name: '',
        nameRules: [],
        email: '',
        emailRules: [],
        message: '',
        messageRules: [],
        contactLoad: false,
        contactAlert: 0,
      }),

      methods: {
        validate () {
          if(this.$refs.form.validate()) {
            this.contactLoad = true
            const info = {
              full_name: this.name,
              email: this.email,
              message: this.message,
            };
            this.$axios.post("/api/contact", info)
              .then(response => {
                this.contactLoad = false
                console.log(response.data)
                if(response.data.success === true){
                  this.contactAlert = 1
                }else{
                  this.contactAlert = 2
                }
                this.reset()
              })
              .catch(error => {
                this.contactLoad = false
                this.reset()
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
          }
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
        getCurrentLang() {
          const lang = localStorage.getItem("lang") ?? "fr"
          switch (lang) {
            case "fr":
              this.dict = this.fr_dict;
              this.$vuetify.rtl = false
              break;
            case "en":
              this.dict = this.en_dict;
              this.$vuetify.rtl = false
              break;
            case "ar":
              this.dict = this.ar_dict;
              this.$vuetify.rtl = true
              break;
          }
        }
      },
      created() {
        this.getCurrentLang()

        this.nameRules = [
          v => !!v || this.dict.full_name_required,
        ]

        this.emailRules = [
          v => !!v || this.dict.email_required,
          v => /.+@.+\..+/.test(v) || this.dict.email_rule,
        ]

        this.messageRules = [
          v => !!v || this.dict.message_required,
        ]
      }
    }
</script>

<style scoped>
  .my_hr {
    width:5%;
    text-align:left;
    margin-left:0;
    height: 80%;
    background-color: #8d8d8d;
  }
  .text_primary {
    color: #4ba086;
  }
</style>
