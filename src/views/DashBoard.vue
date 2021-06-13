<template>
  <div>
    管理介面
    <router-link to="/admin/products">管理產品列表</router-link>
    <router-link to="/admin/orders">訂單列表</router-link>
  </div>
  <router-view v-if="check"></router-view>
</template>
<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    getToken() {
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = `${token}`;
      const url = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.check = true;
        } else {
          this.$router.push('/login');
        }
      });
    },
  },
  created() {
    this.getToken();
  },
};
</script>
