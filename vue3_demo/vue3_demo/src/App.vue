<script setup>
</script>

<template>
  <div>
    <h1>hello App</h1>
    <p>
      <router-link to="/">to Home</router-link>
      &nbsp;
      <router-link to="/about">to About</router-link>
    </p>
    <router-view></router-view>
    <router-view name="About"></router-view>
  </div>
</template>

<style scoped>

</style>
