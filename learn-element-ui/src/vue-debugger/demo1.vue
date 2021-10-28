/*
 * File: demo1.vue
 * File Created: 2021-06-25 2:12:48 pm
 * Author: zhanghc11 (huancheng.zhang@meicloud.com)
 * Copyright: 2017 - 2021 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2021-06-25 2:12:49 pm
 * Modified By: zhanghc11 (huancheng.zhang@meicloud.com>)
 */

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
