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
