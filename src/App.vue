<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/front">Front</router-link>| <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
//加入scss
@import './assets/all';
</style>
