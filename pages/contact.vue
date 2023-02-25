<template>
    <div class="mb-3">
      <ContactPage :school="school"/>
    </div>
</template>

<script>
    import ContactPage from "../components/ContactPage";
    export default {
      name: "contact",
      components: {ContactPage},
      data () {
        return {
          title: 'Vuetify.js',
          school: {},
        }
      },
      methods: {
        loadSchool() {
          const lang = localStorage.getItem("lang") ?? 'fr';
          this.loading = true
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
      head () {
        return {
          title: "Contact - "
        }
      },
    }
</script>

<style scoped>

</style>
