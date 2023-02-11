<template>
  <div class="mt-6">
    <div v-if="!loading">
      <EventsCarousel :posts="cms.posts" :ads="cms.ads"/>
      <SchoolInNumbers :numbers="cms.school_in_numbers"/>
      <Specialities :specialities="cms.specialities"/>
      <Departments :departments="cms.departments"/>
      <News :news="cms.news" :topics="cms.topics"/>


      <v-fab-transition>
        <v-btn v-show="showBtn" color="primary" bottom right fab fixed @click="toTop" class="mb-3">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>

    <div v-else>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>


  </div>
</template>

<script>
import EventsCarousel from "../components/EventsCarousel";
import SchoolInNumbers from "../components/SchoolInNumbers";
import Contact from "../components/ContactPage";
import Specialities from "../components/Specialities";
import Departments from "../components/Departments";
import News from "../components/News";
export default {
  name: 'IndexPage',
  scrollToTop: true,
  props: {
    data: Array
  },
  components: {News, Departments, Specialities, Contact, SchoolInNumbers, EventsCarousel},
  data () {
    return {
      showBtn: false,
      loading: false,
      cms: {}
    }
  },
  methods: {
    handleScroll () {
      if(window.scrollY > 100){
        this.showBtn = true
      }else{
        this.showBtn = false
      }
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    loadCMS() {
      this.loading = true
      this.$axios.get('/api/cms?lang=fr').then(res => {
        this.loading = false
        this.cms = res.data
      }).catch(err => {
        this.loading = false
      })
    }
  },
  created () {
    this.loadCMS()
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>
