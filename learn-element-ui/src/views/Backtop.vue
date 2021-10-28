<template>
  <div>
    <!-- <el-backtop></el-backtop> -->
    <c-backtop target="body" :duration="1000"></c-backtop>
    <c-backtop target="body" :bottom="100">test</c-backtop>

    <p v-for="i in 1000" :key="i">{{i}}</p>
  </div>
</template>

<script>
export default {
  name: 'backtop',
  data () {
    return {
    }
  },
  created () {}
}
</script>

<style lang='less'>
html, body {
  height: 100%;
  overflow: auto;
}
</style>
