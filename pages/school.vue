<template>
  <div class="mt-6">
    <SchoolDescription :school_description="school_description"/>
  </div>
</template>

<script>
    import SchoolDescription from "../components/SchoolDescription";
    export default {
        name: "school",
      components: {SchoolDescription},
      head () {
        return {
          title: "L'école - "
        }
      },
      data() {
        return {
          school_description: {},
        }
      },
      methods: {
        loadSchoolDescription() {
          this.loading = true
          const lang = localStorage.getItem("lang") ?? 'fr';
          this.$axios.get('/api/school_description?lang=' + lang).then(res => {
            this.loading = false

            res.data.school_description.images = Array.from(JSON.parse(res.data.school_description.images))
            this.school_description = res.data.school_description
          }).catch(err => {
            this.loading = false
          })
        }
      },
      created () {
        this.loadSchoolDescription()
      },
    }
</script>

<style scoped>

</style>
