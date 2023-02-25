<template>
  <div class="pr-5 pl-5">
    <v-row>
      <v-col cols="12" md="7" sm="12" lg="6">
        <v-card flat tile data-aos="fade-right">
          <v-window v-model="onboarding" reverse>
            <v-window-item v-for="(carousel, i) in posts" :key="i">
              <v-card color="grey" class="carousel-card">
                <v-row class="fill-height" align="center" justify="center">
                  <img alt="" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + carousel.img" class="responsive_img"/>
                </v-row>
              </v-card>
              <div class="mt-3">
                <nuxt-link :to="{path: '/details', query: {id: carousel.id, type: 'posts'}}" class="text-decoration-none">
                  <h2 class="text-center pt-2" style="color: #F2921D">
                    {{carousel.title.substring(0, 60)}}
                    <span v-if="carousel.title.length > 60">...</span>
                  </h2>
                </nuxt-link>
                <div class="text-center" style="font-size: 14px">
                  {{carousel.description.substring(0, 90)}}
                  <span v-if="carousel.description.length > 90">...</span>
                </div>
              </div>
            </v-window-item>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-btn text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item v-for="i in posts.length" :key="i" v-slot="{ active, toggle }">
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
      <v-col class="hidden-md-and-down" cols="3" data-aos="fade-left">
        <div class="recent-posts-title" style="padding-right: 10px;">
          {{dict.recent_posts}}
        </div>
        <div class="recent-posts-card" v-for="(item, i) in posts" :key="item.id" :style="(i === onboarding) ? 'background-color: #F0F2F5' : ''">
          <nuxt-link :to="{path: '/details', query: {id: item.id, type: 'posts'}}" class="text-decoration-none">
            <v-row class="pl-3">
              <v-col cols="4">
                <img :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + item.img" alt="" style="width: 100%; height: 40px; border-radius: 5px">
              </v-col>
              <v-col>
                <h5 style="color: #F2921D;">
                  {{item.title.substring(0, 25)}}
                  <span v-if="item.title.length > 25">...</span>
                </h5>
                <p class="paragraph">
                  {{item.description.substring(0, 27)}}
                  <span v-if="item.description.length > 27">...</span>
                </p>
              </v-col>
            </v-row>
          </nuxt-link>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="5" lg="3">
        <v-card  data-aos="fade-up" :data-aos-delay="100 * i" :color="colors[Math.floor(Math.random() * colors.length)]" dark v-for="(item, i) in ads" :key="i" class="mb-4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <nuxt-link :to="{path: '/details', query: {id: item.id, type: 'ads'}}" class="text-decoration-none" style="color: white">
                <v-card-title class="text-h6" v-text="item.title"></v-card-title>
                <v-card-subtitle class="pb-0" v-html="item.description"></v-card-subtitle>
              </nuxt-link>
              <v-card-actions>
                <a :href="item.link" target="_blank" class="text-decoration-none">
                  <v-icon color="white" size="18">mdi-eye</v-icon>
                  <span style="color: white">{{dict.view}}</span>
                </a>
              </v-card-actions>
            </div>

            <v-avatar
              class="ma-1 hidden-sm-and-down"
              size="100"
              tile
              v-if="item.src != null"
            >
              <v-img :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import aosMixin from '~/mixins/aos'
    export default {
      name: "EventsCarousel",
      mixins: [aosMixin],
      props: {
        posts: Array,
        ads: Array
      },
      data() {
        return {
          colors: ["#939393", "#676767", "#FE5800", "#F2921D"],

          dict: {},

          fr_dict: {
            recent_posts: "Posts Récents",
            view: "Apperçu"
          },
          en_dict: {
            recent_posts: "Recent Posts",
            view: "Consult"
          },
          ar_dict: {
            recent_posts: "اخر الاخبار",
            view: "معاينة"
          },


          onboarding: 0,
          length: 4,
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
        setInterval(() => {this.next()}, 10000)
        this.getCurrentLang()
      }
    }
</script>

<style scoped>
  .responsive_img {
    width: 100%;
    height: 400px;
  }
  .recent-posts-title {
    background-color: #676767;
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 15px;
    font-weight: bold;
    border-radius: 3px;
  }
  .recent-posts-card {
    background-color: white;
    padding: 0 !important;
    margin-top: 1px;
    margin-bottom: 1px;
  }
  .paragraph{
    font-size: 12px;
    color: gray;
  }
</style>
