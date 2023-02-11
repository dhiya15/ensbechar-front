<template>
    <div class="counts mt-5">
      <h1 class="text-center pl-1 pr-1">{{fr_dict.school_numbers}}</h1>
      <v-row class="mt-3">
        <v-col cols="12" md="3" sm="6" class="text-center" v-for="(item, i) in numbers" :key="i">
          <v-icon size="32">{{item.icon}}</v-icon>
          <h5><ICountUp :delay="1000 * i" :endVal="item.total"/></h5>
          <h3>{{item.title}}</h3>
        </v-col>
      </v-row>
    </div>
</template>

<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
      name: "SchoolInNumbers",
      components: {
        ICountUp
      },
    props: {
        numbers: Array
    },
    data() {
      return {
        fr_dict: {
          school_numbers: "L'école avec chiffres"
        },
      };
    },
    }
</script>

<style scoped>
  .shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .counts {
    background: linear-gradient(90deg, rgba(194, 190, 227, 0.5) 0%, rgba(155, 134, 179, 0.47) 100%), url("../static/counts-bg.jpg") center center no-repeat fixed;
    padding: 20px 0 20px 0;
  }
</style>
