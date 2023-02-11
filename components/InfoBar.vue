<template>
  <div>
    <v-row class="info_bar_container hidden-xs-only">
      <div>
        <a class="text-capitalize text_white mr-3">
          <v-icon size="20" color="primary">mdi-email</v-icon>
          {{school.email}}
        </a>
        <a class="text-capitalize text_white" href="#">
          <v-icon size="20" color="primary">mdi-fax</v-icon>
          {{school.fax}}
        </a>
      </div>

      <v-spacer></v-spacer>

      <div>
        <span class="text_white mr-3">{{fr_dict.follow_us}}</span>
        <a class=" mr-3" :href="school.facebook"><v-icon size="20" color="primary">mdi-facebook</v-icon></a>
        <a class=" mr-3" :href="school.youtube"><v-icon size="20" color="primary">mdi-youtube</v-icon></a>
        <a :href="school.instagram"><v-icon size="20" color="primary">mdi-instagram</v-icon></a>
      </div>
    </v-row>


    <v-row class="hidden-sm-and-up mt-0 pl-5" style="background-color: #255461;">
      <v-col cols="12">
        <a class="text-capitalize text_white mr-3">
          <v-icon size="20" color="primary">mdi-email</v-icon>
          {{school.email}}
        </a>
        <div class="mx-2"></div>
        <a class="text-capitalize text_white" href="#">
          <v-icon size="20" color="primary">mdi-fax</v-icon>
          {{school.fax}}
        </a>
        <div class="mx-2"></div>
        <span class="text_white mr-3">{{fr_dict.follow_us}}</span>
        <a class=" mr-3" :href="school.facebook"><v-icon size="20" color="primary">mdi-facebook</v-icon></a>
        <a class=" mr-3" :href="school.youtube"><v-icon size="20" color="primary">mdi-youtube</v-icon></a>
        <a :href="school.instagram"><v-icon size="20" color="primary">mdi-instagram</v-icon></a>
      </v-col>
    </v-row>


  </div>
</template>

<script>
    export default {
        name: "InfoBar",
      props: {
        school: Object
      },
      data () {
        return {
          fr_dict: {
            follow_us: "Suivre nous:"
          }
        }
      },
    }
</script>

<style scoped>
  .info_bar_container{
    padding: 20px 25px 10px 20px;
    background-color: #255461;
  }
  a {
    text-decoration: none;
  }
  .text_white {
    color: white;
  }
</style>
