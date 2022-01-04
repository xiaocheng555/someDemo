<template>
  <div>
    <slot></slot>
    {{suffix}}
  </div>
</template>

<script>
export default {
  name: 'list2',
  data () {
    return {
      suffix: ''
    }
  },
  created () {
    const childList = this.$slots.default || []
    this.$slots.default = childList.slice(0, 3)
    if (childList.length > 3) {
      this.suffix = '+' + (childList.length - 3)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
