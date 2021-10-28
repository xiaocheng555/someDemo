<template>
  <main class="c-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'CMain'
}
</script>

<style lang='less'>
.c-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>
