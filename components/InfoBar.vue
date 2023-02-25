<template>
  <div>
    <v-row class="info_bar_container hidden-xs-only">
      <div>
        <span v-if="this.$vuetify.rtl === false">
          <a class="text-capitalize text_white mr-3" v-if="school.email != null && school.email != '' & school.email != undefined">
            <v-icon size="20" color="icons">mdi-email</v-icon>
            {{school.email}}
          </a>
          <a class="text-capitalize text_white" href="#" v-if="school.fax != null && school.fax != '' & school.fax != undefined">
            <v-icon size="20" color="icons">mdi-fax</v-icon>
            {{school.fax}}
          </a>
        </span>
        <span v-else>
          <a class="text-capitalize text_white" href="#" v-if="school.fax != null && school.fax != '' & school.fax != undefined">
            <v-icon size="20" color="icons">mdi-fax</v-icon>
            {{school.fax}}


          </a>
          <a class="text-capitalize text_white mr-3" v-if="school.email != null && school.email != '' & school.email != undefined">
            <v-icon size="20" color="icons">mdi-email</v-icon>
            {{school.email}}


          </a>

        </span>
      </div>

      <v-spacer></v-spacer>

      <div>
        <span class="text_white mr-3">{{dict.follow_us}}</span>
        <a class="mr-1 ml-1" :href="school.facebook"><v-icon size="20" color="icons">mdi-facebook</v-icon></a>
        <a class="" :href="school.youtube"><v-icon size="20" color="icons">mdi-youtube</v-icon></a>
        <a class="mr-1 ml-1" :href="school.instagram"><v-icon size="20" color="icons">mdi-instagram</v-icon></a>
      </div>
    </v-row>


    <v-row class="hidden-sm-and-up mt-0 pl-5" style="background-color: #939393;">
      <v-col cols="12">
        <a class="text-capitalize text_white mr-3" v-if="school.email != null && school.email != '' & school.email != undefined">
          <v-icon size="20" color="primary">mdi-email</v-icon>
          {{school.email}}
        </a>
        <div class="mx-2"></div>
        <a class="text-capitalize text_white" href="#" v-if="school.fax != null && school.fax != '' & school.fax != undefined">
          <v-icon size="20" color="primary">mdi-fax</v-icon>
          {{school.fax}}
        </a>
        <div class="mx-2"></div>
        <span class="text_white mr-3">{{dict.follow_us}}</span>
        <a class=" mr-3" :href="school.facebook"><v-icon size="20" color="primary">mdi-facebook</v-icon></a>
        <a class=" mr-3" :href="school.youtube"><v-icon size="20" color="primary">mdi-youtube</v-icon></a>
        <a :href="school.instagram"><v-icon size="20" color="primary">mdi-instagram</v-icon></a>
      </v-col>
    </v-row>


  </div>
</template>

<script>
    export default {
        name: "InfoBar",
      props: {
        school: Object
      },
      data () {
        return {
          fr_dict: {
            follow_us: "Suivre nous : "
          },
          en_dict: {
            follow_us: "Follow us : "
          },
          ar_dict: {
            follow_us: "تابعنا على : "
          }
        }
      },
      methods: {
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
      }
    }
</script>

<style scoped>
  .info_bar_container{
    padding: 20px 25px 10px 20px;
    background-color: #939393;
  }
  a {
    text-decoration: none;
  }
  .text_white {
    color: white;
  }
</style>
