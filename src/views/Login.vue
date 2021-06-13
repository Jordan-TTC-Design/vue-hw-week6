<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4 mt-4">
        <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              v-model="username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <button type="button" class="btn btn-lg btn-primary w-100 mt-3" @click="login">
            登入
          </button>
        </form>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
      </div>
    </div>
  </div>
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
    <div class="double-bounce3"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password,
      };
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      // console.log(user)
      this.spinnerOpen();
      this.$http
        .post(`${url}`, user)
        .then((res) => {
          this.spinnerClose();
          //   console.log(res);
          const { data } = res;
          if (data.success === true) {
            // 加入token
            const { token } = res.data;
            const { expired } = res.data;
            console.log(token, expired);
            document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
            this.$router.push('/DashBoardProducts');
            // this.username = '';
            // this.password = '';
          } else {
            // alert('登入失敗');
            this.username = '';
            this.password = '';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    spinnerOpen() {
      document.querySelector('.spinner').classList.add('spinner--open');
    },
    spinnerClose() {
      document.querySelector('.spinner').classList.remove('spinner--open');
    },
  },
  created() {},
};
</script>
