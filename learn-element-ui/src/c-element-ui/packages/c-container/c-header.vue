<template>
  <header
    class="c-header"
    :style="{
      height: height
    }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  beforeCreate () {
    if (this.$parent.addVerticalChild) {
      this.$parent.addVerticalChild(this)
    }
  },
  beforeDestroy () {
    if (this.$parent.removeVerticalChild) {
      this.$parent.removeVerticalChild(this)
    }
  }
}
</script>

<style lang='less'>
</style>
