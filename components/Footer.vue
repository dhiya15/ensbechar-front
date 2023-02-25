<template>
    <div>
      <v-footer color="secondary" class="pt-5">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" lg="3" sm="12">
              <img alt="" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + school.logo" class="responsive_img">
              <p class="footer_paragraph text--white">
                {{school.description}}
              </p>
            </v-col>
            <v-col cols="12" md="4" lg="3" sm="6">
              <h2 class="footer_title_text text-center text-md-center text-lg-center text-sm-left">{{dict.important_websites}}</h2>
              <p class="mt-2 text-center text-sm-left text-lg-center text-md-center">
                <span v-for="website in websites">
                  <a style="text-decoration: underline" :href="website.url_link"><span class="footer_text">{{website.title}}</span></a>
                  <br>
                </span>
              </p>
            </v-col>
            <v-col lg="3" class="hidden-md-and-down">
              <iframe class="contact-map" :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.4818338440095!2d'+ school.longitude +'!3d' + school.latitude +'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff196f0cf888f8f5!2zMzHCsDM1JzM1LjciTiAywrAxMycyNy4xIlc!5e0!3m2!1sar!2sdz!4v1663965947336!5m2!1sar!2sdz'" width="300" height="150" style="border:0; border-radius: 5px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <v-col cols="12" md="4" lg="3" sm="6">
              <h2 class="footer_title_text mb-2">{{dict.contact_us}}</h2>
              <a class="mr-1 ml-1" :href="school.facebook"><v-icon size="28" color="icons">mdi-facebook</v-icon></a>
              <a class="" :href="school.youtube"><v-icon size="28" color="icons">mdi-youtube</v-icon></a>
              <a class="mr-1 ml-1" :href="school.instagram"><v-icon size="28" color="icons">mdi-instagram</v-icon></a>
              <hr class="mt-4" style="width: 80%; background-color: #787878">
              <v-row class="mt-3 ml-1">
                <a class=" mr-3" href="#"><v-icon size="20" color="icons">mdi-calendar-range</v-icon> <span style="color: white">{{school.working_days}}</span></a>
                <a class=" mr-3" href="#"><v-icon size="20" color="icons">mdi-clock-time-eight</v-icon> <span style="color: white">{{school.working_hours}}</span></a>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
      <v-footer color="accent">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center">
              <span class="footer_title_text">&copy; {{ new Date().getFullYear() }} - {{school.name}}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </div>
</template>

<script>
    export default {

        name: "Footer",
      props: {
        school: Object,
        websites: Array
      },
      data() {
        return {
          dict: {},

          fr_dict: {
            contact_us: "Connectez avec nous",
            important_websites: "Liens Importants"
          },
          en_dict: {
            contact_us: "Connect with us",
            important_websites: "Important Websites"
          },
          ar_dict: {
            contact_us: "تواصل معنا",
            important_websites: "روابط مهمة"
          },

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
  .responsive_img {
    width: auto;
    height: 50px;
  }
  .footer_paragraph {
    font-size: 12px;
    text-align: justify;
    color: white;
  }
  .footer_text {
    color: lightgrey;
  }
  a {
    text-decoration: none;
  }
  .footer_text:hover {
    color: #ECF2FF;
  }
  .footer_title_text {
    color: white;
  }
  .contact-map {
    height: auto;
    width: 95%;
    text-align: right;
  }
</style>
