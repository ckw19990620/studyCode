<script setup>
import {useRoute} from "vue-router";

console.log(useRoute().params.id)
const props = defineProps({
  id: String
})
console.log(props.id)
function p() {
}
</script>

<template>
  <div>
    this is hello
    <button @click="p">打印</button>
  </div>
</template>

<style scoped>
div{
    border: 1px dotted #000;
}
</style>
