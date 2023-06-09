<template>
  <div>
    <h1>Welcome to the Sample App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>