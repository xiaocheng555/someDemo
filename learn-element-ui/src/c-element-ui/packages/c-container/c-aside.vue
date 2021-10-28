<template>
  <aside
    class="c-aside"
    :style="{
      width: width
    }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'CAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>

<style lang='less'>
.c-aside {
  box-sizing: border-box;
  overflow: auto;
}
</style>
