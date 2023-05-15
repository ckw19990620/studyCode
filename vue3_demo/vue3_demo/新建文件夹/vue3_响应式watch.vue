<script>
import {ref, reactive, watch, watchEffect, computed} from "vue";

export default {
  data() {
    return {}
  },
  setup() {
    const counter = ref(0);

    function changeCounter() {
      counter.value++
    }

    watch(counter, (v, oldValue) => {
      console.log(v);
      console.log(oldValue);
    })


    const user = reactive({
      name: 'zk',
      age: 23
    })

    function changeUsername() {
      user.name = 'ls'
    }

    watchEffect(() => {
      console.log(user.name)
    })
    // watchEffect(cb), 不需要指定监听的属性

    /*
    * watch和watchEffect 的区别
    * watchEffect 不需要指定监听的属性，会自动收集依赖，只要在回调中引用到了响应式的属性，这些属性发生变更的时候，回调就会执行
    * watch只能监听指定的属性
    * */
    return {counter, user, changeCounter, changeUsername}
  },
  methods: {}
}
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="changeCounter"> +</button>
    <p>{{ user.name }}</p>
    <button @click="changeUsername">c</button>
  </div>
</template>

<style scoped>
</style>
