<template>
  <v-app>
    <v-main>
      <InfoBar :school="school"/>
      <NavBar :school="school"/>
      <Nuxt/>
      <Footer :school="school" :websites="websites"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";
export default {
  name: 'DefaultLayout',
  components: {Footer, InfoBar, NavBar},
  data () {
    return {
      title: 'Vuetify.js',
      school: {},
      websites: []
    }
  },
  methods: {
    loadSchool() {
      this.loading = true
      const lang = localStorage.getItem("lang") ?? 'fr';
      this.$axios.get('/api/school?lang=' + lang).then(res => {
        this.loading = false
        this.school = res.data.school
        this.websites = res.data.websites
      }).catch(err => {
        this.loading = false
      })
    }
  },
  created () {
    this.loadSchool()
  },
}
</script>

<style scoped>

</style>
