<template>
  <div class="mt-2">
    <v-toolbar class="hidden-md-and-down" height="70">
      <img alt=""
           :src="'https://www.ens-bechar.dz/Panel/ensbechar/storage/app/public/' + school.logo"
           style="height: 60px; width: auto"
      >

      <v-spacer></v-spacer>

      <v-list-item block text link to="/">
        {{dict.home}}
      </v-list-item>

      <v-list-item text link to="/school">
        {{dict.school}}
      </v-list-item>

      <v-list-item text link to="/directions">
        {{dict.directions}}
      </v-list-item>

      <v-list-item text link to="/#departments">
        {{dict.departments}}
      </v-list-item>

      <v-list-item text link to="/e_leaning">
        {{dict.e_leaning}}
      </v-list-item>

      <v-list-item text link to="/library">
        {{dict.library}}
      </v-list-item>

      <v-list-item text link to="/contact">
        {{dict.contact}}
      </v-list-item>

      <v-spacer></v-spacer>

      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" text v-bind="attrs" v-on="on">
            <v-icon v-html="current_lang.icon"></v-icon> | {{ current_lang.lang }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in langs" :key="index" @click="setCurrentLang(index)">
            <v-list-item-title><v-icon v-html="item.icon"></v-icon> | {{ item.lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="mx-1"></div>
    </v-toolbar>

    <v-toolbar class="hidden-lg-and-up" height="70">
      <img alt="" src="../static/logo.png" width="150">

      <v-spacer></v-spacer>

      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" text v-bind="attrs" v-on="on">
            <v-icon v-html="current_lang.icon"></v-icon> | {{ current_lang.lang }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in langs" :key="index" @click="setCurrentLang(index)">
            <v-list-item-title><v-icon v-html="item.icon"></v-icon> | {{ item.lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="mx-1"></div>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="gray">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="pl-2 pr-2">
          <v-list-item block text link to="/">
            {{dict.home}}
          </v-list-item>

          <v-list-item text link to="/school">
            {{dict.school}}
          </v-list-item>

          <v-list-item text link to="/directions">
            {{dict.directions}}
          </v-list-item>

          <v-list-item text link to="/departments">
            {{dict.departments}}
          </v-list-item>

          <v-list-item text link to="/e_leaning">
            {{dict.e_leaning}}
          </v-list-item>

          <v-list-item text link to="/library">
            {{dict.library}}
          </v-list-item>

          <v-list-item text link to="/contact">
            {{dict.contact}}
          </v-list-item>
        </v-list>
      </v-menu>



      <div class="mx-1"></div>
    </v-toolbar>



  </div>
</template>

<script>
    export default {
      name: "NavBar",
      props: {
        school: Object
      },
      data () {
        return {
          langs: [
            {lang: "Fr", icon: "", key: "fr"},
            {lang: "En", icon: "", key: "en"},
            {lang: "Ar", icon: "", key: "ar"}
          ],
          current_lang: {lang: "Fr", icon: "", key: "fr"},


          dict: {},
          fr_dict: {
            home: "Accueil",
            school: "L'école",
            directions: "Directions",
            departments: "Départements",
            library: "Bibliothèque",
            e_leaning: "E-Learning",
            contact: "Contact",
          },
          en_dict: {
            home: "Home",
            school: "School",
            directions: "Directions",
            departments: "Déparments",
            library: "Library",
            e_leaning: "E-Learning",
            contact: "Contact",
          },
          ar_dict: {
            home: "الرئيسية",
            school: "المدرسة",
            directions: "المديريات",
            departments: "الاقسام",
            library: "المكتبة",
            e_leaning: "التعليم عن بعد",
            contact: "اتصل بنا",
          },




        }
      },
      methods: {
        setCurrentLang(index) {
          this.current_lang = this.langs[index]
          localStorage.setItem("lang", this.langs[index].key)
          location.reload();
        },
        getCurrentLang() {
          const lang = localStorage.getItem("lang") ?? "fr"
          switch (lang) {
            case "fr":
              this.current_lang = this.langs[0]
              this.dict = this.fr_dict;
              this.$vuetify.rtl = false
              break;
            case "en":
              this.current_lang = this.langs[1]
              this.dict = this.en_dict;
              this.$vuetify.rtl = false
              break;
            case "ar":
              this.current_lang = this.langs[2]
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
  .v-list-item {
    flex: none;
  }
  .v-list-item--link:before {
    border-radius: 25px;
  }
</style>
