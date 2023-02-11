<template>
  <div class="pt-8 pb-15">
    <v-container>
      <h1 class="text-center">{{fr_dict.our_specialities}}</h1>
      <p class="text-center" style="font-size: 12px;">{{fr_dict.our_specialities_description}}</p>
      <br>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="2" v-for="(speciality, i) in specialities" :key="i">
          <v-card class="pl-3 pr-3 pt-5 pb-5 text-center"  elevation="24" outlined shaped data-aos="fade-up" :data-aos-delay="100 * i">
            <img :src="'ttps://site.ens-bechar.dz/ensbechar/storage/app/public/' + speciality.src" alt=""/>
            <h3>
              {{speciality.title.substring(0, 15)}}
            </h3>
            <p class="mt-1" style="font-size: 14px;" v-html="speciality.description">
              {{speciality.description.substring(0, 70)}}
              <span v-if="speciality.description.length > 70">...</span>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Specialities",
      props: {
        specialities: Array
      },
      data() {
        return {
          fr_dict: {
            our_specialities: "Spécialiteis",
            our_specialities_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        }
      },
    }
</script>

<style scoped>

</style>
