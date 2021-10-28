/*
 * File: demo2.vue
 * File Created: 2021-06-25 2:12:48 pm
 * Author: zhanghc11 (huancheng.zhang@meicloud.com)
 * Copyright: 2017 - 2021 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2021-06-25 2:12:49 pm
 * Modified By: zhanghc11 (huancheng.zhang@meicloud.com>)
 */

<template>
  <div style="padding: 20px; margin: 10px 0; border: 1px solid #999;">
    demo2
    <button @click="increase">increase</button>
    <div :title="title">{{ title }}</div>
    text: {{ text }}
  </div>
</template>

<script>
export default {
  name: 'demo2',
  props: {
    text: String | Number
  },
  components: {},
  data () {
    return {
      title: 0
    }
  },
  methods: {
    increase () {
      this.title++
      this.$emit('increase', this.title)
    }
  },
  created () {},
  mounted () {
    console.log(this)
  }
}
</script>

<style lang='less' scoped>
</style>
