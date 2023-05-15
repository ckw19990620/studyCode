<script>
export default {
  data() {
    return {
      num: 0,
      msg: 'hello world',
      user: {
        name: 'zs'
      }
    }
  },
  watch: {
    msg: {
      handler(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      }
    },
    'user.name': {
      handler(newValue) {
        console.log(newValue);
      },
      immediate: true
    }
  }
}
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="msg = 'lol'">+</button>
    <p>{{ user.name }}</p>
    <input v-model="user.name" type="text"/>
  </div>
</template>

<style scoped>
</style>
