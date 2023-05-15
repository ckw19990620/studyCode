<script>
import {provide, ref} from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {HelloWorld},
  data() {
    return {}
  },
  setup() {
    const name = ref('zs')
    provide('name', name)
    return {}
  },
  mounted() {
    console.log(this.$refs.HW);
    this.$refs.HW.injectCount()
  },
  methods: {
    injectCount(data) {
      console.log(data);
    }
  }
}
</script>

<template>
  <div>
    <HelloWorld class="box"/>
  </div>
</template>

<style scoped>

</style>
