<template>
    <div class="pt-8 pb-8 mt-3" data-aos="fade-up" :data-aos-delay="200" data-aos-anchor-placement="top-bottom">
      <v-container>
        <v-row>
          <v-col md="3" cols="12" align-self="center">
            <div class="hidden-sm-and-down">
              <v-col class="text-center">
                <v-icon color="primary" size="32">mdi-map-marker</v-icon>
                <p>{{school.address}}</p>
              </v-col>

              <v-col class="text-center">
                <v-icon color="primary" size="32">mdi-phone</v-icon>
                <p>
                  {{school.phone}}
                  <br>
                  {{school.fax}}
                </p>
              </v-col>

              <v-col class="text-center">
                <v-icon color="primary" size="32">mdi-email</v-icon>
                <p>{{school.email}}<br></p>
              </v-col>
            </div>
            <v-row class="hidden-md-and-up">
              <v-col class="text-center" sm="4" cols="12">
                <v-icon color="primary" size="32">mdi-map-marker</v-icon>
                <p>{{school.address}}</p>
              </v-col>

              <v-col class="text-center" sm="4" cols="12">
                <v-icon color="primary" size="32">mdi-phone</v-icon>
                <p>
                  {{school.phone}}
                  <br>
                  {{school.fax}}
                </p>
              </v-col>

              <v-col class="text-center" sm="4" cols="12">
                <v-icon color="primary" size="32">mdi-email</v-icon>
                <p>{{school.email}}<br></p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="1" class="pt-15 hidden-sm-and-down">
            <hr class="my_hr">
          </v-col>

          <v-col cols="12" md="8">
            <h2 class="text_primary">{{fr_dict.send_message}}</h2>
            <p>
              {{fr_dict.send_message_description}}
            </p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                :label="fr_dict.full_name"
                required
                filled
                dense
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                filled
                dense
              ></v-text-field>

              <v-textarea
                name="input-7-1"
                filled
                label="Message"
                auto-grow
              ></v-textarea>


              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 text-capitalize"
                @click="validate"
              >
                {{fr_dict.send}}
              </v-btn>

            </v-form>
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
        fr_dict: {
          send_message: "Envoyer vous message",
          send_message_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
            "              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          send: "Envoyer",
          full_name: "Nom complet"
        },
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }),

      methods: {
        validate () {
          this.$refs.form.validate()
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
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
