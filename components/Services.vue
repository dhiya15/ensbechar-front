<template>
  <div class="services mt-2 pt-0">
    <v-row>
      <v-col cols="12" md="2" sm="4" class="text-center" v-for="(item, i) in services" :key="i">
        <a :href="item.url_link" class="text-decoration-none text-center" target="_blank">
          <v-card :elevation="2" outlined shaped class="pt-3 pb-3" data-aos="fade-up" :data-aos-delay="100 * i">
            <v-row>
              <v-col></v-col>
              <v-col>
                <v-img width="80" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + item.image"></v-img>
              </v-col>
              <v-col></v-col>
            </v-row>
            <h3 class="mt-2">{{item.title}}</h3>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
      name: "Services",
      props: {
        services: Array
      },
      data() {
        return {
          dict: {},
          fr_dict: {
            services_title: "Services"
          },
        };
      },
      methods: {
        getCurrentLang() {
          const lang = localStorage.getItem("lang") ?? "fr"
          switch (lang) {
            case "fr":
              this.$vuetify.rtl = false
              break;
            case "en":
              this.$vuetify.rtl = false
              break;
            case "ar":
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
  .services {
    /*background: linear-gradient(90deg, rgba(194, 190, 227, 0.5) 0%, rgba(155, 134, 179, 0.47) 100%), url("../static/counts-bg.jpg") center center no-repeat fixed;*/
    padding: 20px;
  }
</style>
