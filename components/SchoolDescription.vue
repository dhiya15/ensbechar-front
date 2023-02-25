<template>
  <v-row align="center" justify="center">
    <v-col class="pb-15" cols="11" lg="8" md="8" sm="11" xs="11">
      <h1>{{school_description.title}}</h1>
      <small v-if="use_created_at && use_created_at === true"><i v-if="school_description.created_at">{{new Date(school_description.created_at).toLocaleString().substring(0, 19).replace("T", " ")}}</i></small>
      <small v-else><i v-if="school_description.updated_at">{{new Date(school_description.updated_at).toLocaleString().substring(0, 19).replace("T", " ")}}</i></small>
      <br v-if="school_description.image"><br v-if="school_description.image">
      <!--    <img alt="" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + school_description.image" class="responsive_img"/>-->
      <img alt="" v-if="school_description.image" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + school_description.image" height="180" style="width: auto"/>
      <div class="mt-3">
        <p v-html="school_description.description"></p>
      </div>
      <v-card flat tile v-if="school_description.images.length > 0">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="(carousel, i) in school_description.images" :key="i">
            <v-card color="grey" class="carousel-card">
              <v-row class="fill-height" align="center" justify="center">
                <!--              <img alt="" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + carousel" class="responsive_img"/>-->
                <img alt="" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + carousel" class="responsive_img"/>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
        <v-card-actions class="justify-space-between" v-if="school_description.images != null && school_description.images.length > 0">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item v-for="i in school_description.images.length" :key="i" v-slot="{ active, toggle }">
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
    export default {
      name: "SchoolDescription",
      props: {
        school_description: Object,
        use_created_at: Boolean
      },
      data() {
        return {
          onboarding: 0,
          length: 0,
        }
      },
      methods: {
        next () {
          this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
        },
        prev () {
          this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
        },
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
        setInterval(() => {this.next()}, 10000)
        if(this.school_description.images != null && this.school_description.images.length > 0) {
          this.length = this.school_description.images.length
        }else{
          this.length = 0
        }
        this.getCurrentLang()
      }
    }
</script>

<style scoped>
  .responsive_img {
    width: auto;
    height: 400px;
  }
</style>
