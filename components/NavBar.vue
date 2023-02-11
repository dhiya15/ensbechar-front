<template>
  <div class="mt-2">
    <v-toolbar class="hidden-md-and-down" height="70">
      <img alt="" src="../static/logo.png">

      <v-spacer></v-spacer>

      <v-list-item block text link to="/">
        {{fr_dict.home}}
      </v-list-item>

      <v-list-item text link to="/school">
        {{fr_dict.school}}
      </v-list-item>

      <v-list-item text link to="/directions">
        {{fr_dict.directions}}
      </v-list-item>

      <v-list-item text link to="/departments">
        {{fr_dict.departments}}
      </v-list-item>

      <v-list-item text link to="/e_leaning">
        {{fr_dict.e_leaning}}
      </v-list-item>

      <v-list-item text link to="/library">
        {{fr_dict.library}}
      </v-list-item>

      <v-list-item text link to="/contact">
        {{fr_dict.contact}}
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
            {{fr_dict.home}}
          </v-list-item>

          <v-list-item text link to="/school">
            {{fr_dict.school}}
          </v-list-item>

          <v-list-item text link to="/directions">
            {{fr_dict.directions}}
          </v-list-item>

          <v-list-item text link to="/departments">
            {{fr_dict.departments}}
          </v-list-item>

          <v-list-item text link to="/e_leaning">
            {{fr_dict.e_leaning}}
          </v-list-item>

          <v-list-item text link to="/library">
            {{fr_dict.library}}
          </v-list-item>

          <v-list-item text link to="/contact">
            {{fr_dict.contact}}
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
      data () {
        return {
          langs: [
            {lang: "Fr", icon: "mdi-eiffel-tower"},
            {lang: "Ar", icon: "mdi-abjad-arabic"}
          ],
          current_lang: {lang: "Fr", icon: "mdi-eiffel-tower"},
          fr_dict: {
            home: "Accueil",
            school: "L'ecole",
            directions: "Directions",
            departments: "Départements",
            library: "Bibliothèque",
            e_leaning: "E-Learning",
            contact: "Contact",
          },
        }
      },
      methods: {
        setCurrentLang(index) {
          this.current_lang = this.langs[index]
        },
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
