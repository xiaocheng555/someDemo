<template>
  <footer
    class="c-footer"
    :style="{
      height: height
    }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'CFooter',
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
.c-footer {

}
</style>
