<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <card></card>
  <button type="button" class="btn btn-outline-primary">Primary</button>
</template>
<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      products: [],
      // cartTotal: null,
      // carts: [],
      pagination: {},
      // apiData: {
      //   apiUrl: 'https://vue3-course-api.hexschool.io',
      //   api: 'jordanttcdesign',
      // },
      temProduct: {},
    };
  },
  created() {
    // console.dir(this);
    console.log(process.env.VUE_APP_API);
    console.log(process.env.VUE_APP_PATH);
    // this.axios
    //   .get(`${this.apiData.apiUrl}/api/${this.apiData.api}/products?page=:1`)
    //   .then((res) => {
    //     console.log(res);
    //   });
  },
};
</script>
