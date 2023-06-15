<script setup>
import {useRoute, useRouter} from "vue-router";

console.log(useRoute().params)
</script>

<template>
  <div>
    this is Home
    <button @click="">打印</button>
  </div>
</template>

<style scoped>

</style>
