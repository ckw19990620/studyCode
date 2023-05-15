<script>
import {ref, reactive, watch, watchEffect, computed} from "vue";

export default {
  data() {
    return {}
  },
  setup() {
    const counter = ref(0);

    const msg = ref('hello world')

    /*
     * computed返回一个带有 value 属性的对象
     */
    const reversedMsg = computed(() => {
      return msg.value.split('').reverse().join('')
    })
    function changeMsg() {
      msg.value = 'nihao'
    }

    const user = reactive({
      name: 'zk',
      age: 23
    })
    return {counter, msg, user, reversedMsg, changeMsg}
  },
  methods: {}
}
</script>

<template>
  <div>
    <p>{{msg}}</p>
    <p>{{reversedMsg}}</p>
    <button @click="changeMsg">+</button>
  </div>
</template>

<style scoped>
</style>
