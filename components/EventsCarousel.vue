<template>
  <div class="pr-5 pl-5">
    <v-row>
      <v-col md="7" sm="12" lg="6">
        <v-card flat tile data-aos="fade-right">
          <v-window v-model="onboarding" reverse>
            <v-window-item v-for="(carousel, i) in posts" :key="i">
              <v-card color="grey" class="carousel-card">
                <v-row class="fill-height" align="center" justify="center">
                  <img alt="" :src="'ttps://site.ens-bechar.dz/ensbechar/storage/app/public/' + carousel.img" class="responsive_img"/>
                </v-row>
              </v-card>
              <div class="mt-3">
                <h2 class="text-center">
                  {{carousel.title.substring(0, 50)}}
                  <span v-if="carousel.title.length > 50">...</span>
                </h2>
                <div class="text-center" style="font-size: 14px">
                  {{carousel.description.substring(0, 80)}}
                  <span v-if="carousel.description.length > 80">...</span>
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
        <div class="recent-posts-title">
          {{fr_dict.recent_posts}}
        </div>
        <div class="recent-posts-card" v-for="(item, i) in posts" :key="item.id" :style="(i === onboarding) ? 'background-color: #F0F2F5' : ''">
          <v-row class="pl-3">
            <v-col cols="4">
              <img :src="'ttps://site.ens-bechar.dz/ensbechar/storage/app/public/' + item.img" alt="" style="width: 100%; height: 40px; border-radius: 5px">
            </v-col>
            <v-col>
              <h5>
                {{item.title.substring(0, 15)}}
                <span v-if="item.title.length > 15">...</span>
              </h5>
              <p class="paragraph">
                {{item.description.substring(0, 20)}}
                <span v-if="item.description.length > 20">...</span>
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col sm="12" md="5" lg="3">
        <v-card  data-aos="fade-up" :data-aos-delay="100 * i" :color="colors[Math.floor(Math.random() * colors.length)]" dark v-for="(item, i) in ads" :key="i" class="mb-4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h6" v-text="item.title"></v-card-title>

              <v-card-subtitle v-html="item.artist"></v-card-subtitle>

              <v-card-actions>
                <a :href="item.link" target="_blank" class="text-decoration-none">
                  <v-icon color="white" size="18">mdi-eye</v-icon>
                  <span style="color: white">{{fr_dict.view}}</span>
                </a>
              </v-card-actions>
            </div>

            <v-avatar
              class="ma-1 hidden-sm-and-down"
              size="100"
              tile
            >
              <v-img :src="'ttps://site.ens-bechar.dz/ensbechar/storage/app/public/' + item.src"></v-img>
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
          colors: ["#1F7087", '#952175'],
          fr_dict: {
            recent_posts: "Posts Récents",
            view: "Apperçu"
          },
          onboarding: 1,
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
      },
      created() {
        setInterval(() => {this.next()}, 10000)
      }
    }
</script>

<style scoped>
  .responsive_img {
    width: 100%;
    height: 400px;
  }
  .recent-posts-title {
    background-color: #255461;
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
