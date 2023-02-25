<template>
  <div class="pt-8 pb-15">
    <v-container>
      <h1 class="text-center" style="color: #F2921D">{{dict.our_specialities}}</h1>
<!--      <p class="text-center" style="font-size: 12px;">{{dict.our_specialities_description}}</p>-->
      <br>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="2" v-for="(speciality, i) in specialities" :key="i">
          <v-card class="pl-3 pr-3 pt-5 pb-5 text-center"  elevation="24" outlined shaped data-aos="fade-up" :data-aos-delay="100 * i">
            <img :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + speciality.src" alt=""/>
            <h3 style="color: #3697b3">
              {{speciality.title.substring(0, 15)}}
            </h3>
            <p class="mt-1" style="font-size: 14px;" v-html="speciality.description">
              {{speciality.description.substring(0, 70)}}
              <span v-if="speciality.description.length > 70">...</span>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Specialities",
      props: {
        specialities: Array
      },
      data() {
        return {
          dict: {},

          fr_dict: {
            our_specialities: "Spécialités",
            our_specialities_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          },
          en_dict: {
            our_specialities: "Specialties",
            our_specialities_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          },
          ar_dict: {
            our_specialities: "التخصصات",
            our_specialities_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
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

</style>
