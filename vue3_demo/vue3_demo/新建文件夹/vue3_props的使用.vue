<script>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, provide} from "vue";
import HelloWorld from '../src/components/HelloWorld.vue';

export default {
  components: {HelloWorld},
  data() {
    return {
      msg: 'helloWorld'
    }
  },
  setup() {
    provide('name', msg)
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
<!--    <HelloWorld class="box" @injectCount="injectCount" :msg="msg"/>-->
    <HelloWorld class="box" @injectCount="injectCount" ref="HW" :msg="msg"/>
    <hr>
    <button @click="this.msg='aaaa'">改变msg</button>
  </div>
</template>

<style scoped>
.box{
    border: 1px solid #000;
}
</style>
