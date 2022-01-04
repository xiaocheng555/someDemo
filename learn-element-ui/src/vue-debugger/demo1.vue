<template>
  <div style="padding: 20px; margin: 10px 0; border: 1px solid #999;">
    <h4>demo1</h4>
    <button @click="change">diff change</button>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-demo',
  data () {
    return {
      list: ['a', 'b', 'c', 'd']
    }
  },
  methods: {
    change () {
      this.list = ['f', 'b', 'd', 'c', 'e']
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
</style>
