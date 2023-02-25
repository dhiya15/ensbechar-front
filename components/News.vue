<template>
    <div class="pt-5 mt-2 pb-15">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="12" lg="8">
            <h2 class="text-left news_title" v-if="this.$vuetify.rtl === false">
              <v-icon>mdi-newspaper-variant-multiple</v-icon>
              {{dict.news}}
            </h2>
            <h2 class="text-right news_title" v-else>
              <v-icon>mdi-newspaper-variant-multiple</v-icon>
              {{dict.news}}
            </h2>
            <v-divider class="divider"></v-divider>
            <br>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6" v-for="(item, i) in news" :key="i" data-aos="fade-up" :data-aos-delay="100 * i">
                <v-sheet :color="colors[Math.floor(Math.random() * colors.length)]" rounded outlined>
                  <v-col>
                    <v-row>
                      <v-col cols="9">
                        <h3>
                          {{item.title.substring(0, 40)}}
                          <span v-if="item.title.length > 40">...</span>
                        </h3>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col cols="3" class="text-right">
                        <small style="font-size: 12px; color: gray">{{item.date}}</small>
                      </v-col>
                    </v-row>
                    <v-divider class="mt-2 mb-2"></v-divider>
                    <p class="paragraph">
                      {{item.description.substring(0, 77)}}
                      <span v-if="item.description.length > 78">...</span>
                    </p>
                    <nuxt-link :to="{path: '/details', query: {id: item.id, type: 'news'}}" class="text-decoration-none">
                      <v-btn text small color="secondary" class="text-capitalize pt-0 pl-0 mb-1 text-decoration-underline">
                        {{dict.see_more}}
                      </v-btn>
                    </nuxt-link>
                  </v-col>
                </v-sheet>
              </v-col>
            </v-row>

          </v-col>
          <v-col cols="12" md="4" sm="12" lg="4">
            <h2 class="text-left news_title" v-if="this.$vuetify.rtl === false">
              <v-icon>mdi-calendar-text</v-icon>
              {{dict.topics}}
            </h2>
            <h2 class="text-right news_title" v-else>
              <v-icon>mdi-calendar-text</v-icon>
              {{dict.topics}}
            </h2>
            <v-divider class="divider"></v-divider>
            <br>
            <v-row v-for="(topic, i) in topics" :key="i" data-aos="fade-up" :data-aos-delay="100 * i">
              <v-col cols="12">
                <nuxt-link :to="{path: '/details', query: {id: topic.id, type: 'topics'}}" class="text-decoration-none">
                <v-sheet class="d-flex" color="grey lighten-3" rounded outlined>
                  <v-col cols="4">
                    <v-img style="height: auto; width: 100%" :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + topic.img"></v-img>
                  </v-col>
                  <v-col cols="8">
                    <h5>
                      {{topic.title.substring(0, 35)}}
                      <span v-if="topic.title.length > 35">...</span>
                    </h5>
                    <p class="paragraph">
                      {{topic.description.substring(0, 40)}}
                      <span v-if="topic.description.length > 40">...</span>
                    </p>
                  </v-col>
                </v-sheet>
                </nuxt-link>
              </v-col>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
    export default {
      name: "News",
      props: {
        news: Array,
        topics: Array
      },
      data() {
        return {
          dic: {},
          fr_dict: {
            topics: "Sujets",
            news: "Nouvelles",
            see_more: "Voir plus",
          },
          en_dict: {
            topics: "Topics",
            news: "News",
            see_more: "See more",
          },
          ar_dict: {
            topics: "مواضيع",
            news: "جديد",
            see_more: "اقرا المزيد",
          },


          colors: ["#DEF5E5", '#FFFFD0', '#F8F4EA', "#ECE8DD", "#FAF8F1", "#F4EAD5", "#F5EBE0", "#"],
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
  .divider {
    border: 2px solid grey;
    border-radius: 10px;
    width: 30%;
  }
  .paragraph{
    font-size: 12px;
    color: gray;
  }
  p {
    margin-bottom: 8px;
  }
</style>
