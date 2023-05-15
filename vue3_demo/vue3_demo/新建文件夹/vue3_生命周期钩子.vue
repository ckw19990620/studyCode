<script>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount} from "vue";

export default {
  data() {
    return {
      msg: 'helloWorld'
    }
  },
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log('onMounted')
    })
    return {}
  },
  methods: {}
}
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
</style>
