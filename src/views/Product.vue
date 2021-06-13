<template>
  <div>
    <h1>單一產品</h1>
    <p>{{ product.content }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProductData() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    console.log(this.$route.params.id);
    console.log(this.$router);
    this.getProductData();
  },
  mounted() {},
};
</script>
