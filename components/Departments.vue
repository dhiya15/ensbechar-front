<template>
    <div style="background-color: #F1F3F4" class="pt-8 pb-15">
      <v-container>
        <h1 class="text-center">{{dict.our_departments}}</h1>
        <br>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="(department, i) in departments" :key="i">
            <v-card class="mx-auto" max-width="300" elevation="5" outlined data-aos="fade-up" :data-aos-delay="100 * i">
              <v-img height="150" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + department.src"></v-img>
              <v-col>
                <!--          <v-chip small>5:30PM</v-chip>-->
                <h3 class="mt-2">
                  {{department.name.substring(0, 39)}}
                  <span v-if="department.name.length > 40">...</span>
                </h3>
                <p class="font-weight-light mb-2" style="font-size: 14px">
                  {{department.description.substring(0, 70)}}
                  <span v-if="department.description.length > 70">...</span>
                  <br>
<!--                  <v-btn text small color="secondary" class="text-capitalize pt-0 pl-0 mb-2 text-decoration-underline" link to="/test">-->
<!--                    {{dict.see_more}}-->
<!--                  </v-btn>-->
                </p>
                <v-divider></v-divider>
                <v-row class="pt-3">
                  <v-col cols="2">
                    <v-avatar size="36px">
                      <v-img height="36" width="36" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + department.rs_image"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10">
                    <div class="user-info">
                      <h5>{{department.full_name}}</h5>
                      <small style="font-size: 14px">{{department.email}}</small>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>

  export default {
      name: "Departments",
      props: {
        departments: Array
      },
      data() {
        return {
          dict: {},

          fr_dict: {
            our_departments: "Départements",
            our_departments_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            see_more: "Voir plus",
          },
          en_dict: {
            our_departments: "Departments",
            our_departments_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            see_more: "See more",
          },
          ar_dict: {
            our_departments: "الاقسام",
            our_departments_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            see_more: "اقرا المزيد",
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
  .user-info h5 {
    margin: 0;
  }
  .user-info small {
    color: #545d7a;
  }
</style>
