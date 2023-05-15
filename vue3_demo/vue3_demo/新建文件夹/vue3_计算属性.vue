<script>
export default {
  data() {
    return {
      num: 0,
      msg: 'hello world'
      // tp: ''
    }
  },
  computed: {
    // tp() {
    //   return this.num % 2 === 0 ? '偶数' : '奇数'
    // }
    tp: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(newValue) {
        console.log(newValue);
      }
    }
  },
  methods: {},
}
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ tp }}</p>
    <button @click="tp = 'llo'">+</button>
<!--    <button @click="num&#45;&#45;">-</button>-->
  </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
