<template>
    <div v-if="!loading" class="mt-6">
      <SchoolDescription :school_description="content" :use_created_at="true"/>
    </div>
  <div v-else>
    <v-col style="height: 250px" align-self="center" align="center" class="text-center justify-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-col>
  </div>
</template>

<script>
    import SchoolDescription from "../components/SchoolDescription";
    export default {
      name: "details",
      components: {SchoolDescription},
      data () {
        return {
          loading: false,
          content: {}
        }
      },
      methods: {
        loadDetails() {
          this.loading = true
          let id = this.$route.query.id
          let type = this.$route.query.type
          const lang = localStorage.getItem("lang") ?? 'fr';
          this.$axios.get('/api/get_content?id=' + id + '&lang=' + lang + '&type=' + type).then(res => {
            this.loading = false

            res.data[0].images = Array.from(JSON.parse(res.data[0].images))
            this.content = res.data[0]
          }).catch(err => {
            this.loading = false
          })
        }
      },
      created () {
        this.loadDetails()
      },
    }
</script>

<style scoped>

</style>
