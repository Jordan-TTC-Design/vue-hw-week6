<template>
  <div class="productList">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th scope="col">產品名稱</th>
          <th scope="col">產品價格</th>
          <th scope="col">動作</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="product in products" :key="product.id">
          <tr>
            <th scope="row">
              <img
                v-if="product.imageUrl"
                :src="product.imageUrl"
                :alt="product.title"
                style="height: 40px"
              />
              <p v-else>圖片丟失</p>
            </th>
            <td>
              <router-link :to="`/front/product/${product.id}`">{{ product.title }}</router-link>
            </td>
            <td>{{ product.origin_price }}/{{ product.price }}</td>
            <td>
              <div class="btn-group" role="group">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProductDetail(product.id)"
                >
                  查看詳細資訊
                </button>
                <button type="button" class="btn btn-outline-primary" @click="addCart(product.id)">
                  加入購物車
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      // cartTotal: null,
      // carts: [],
      pagination: {},
      temProduct: {},
    };
  },
  methods: {
    getProductsData() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=:1`;
      this.$http
        .get(url)
        .then((res) => {
          //   console.log(res);
          this.products = res.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProductsData();
    // console.log(process.env.VUE_APP_API);
    // console.log(process.env.VUE_APP_PATH);
  },
  mounted() {},
};
</script>
<style lang="scss"></style>
