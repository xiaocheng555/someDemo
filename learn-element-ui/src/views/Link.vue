<template>
  <div>
    <el-link type="default">默认链接</el-link>
    <el-link type="info">默认链接</el-link>
    <el-link type="primary">默认链接</el-link>
    <el-link type="danger">默认链接</el-link>
    <el-link type="warning">默认链接</el-link>
    <el-link type="success">默认链接</el-link>
    <br>
    <br>
    <c-link type="default">默认链接</c-link>
    <c-link type="info">默认链接</c-link>
    <c-link type="primary">默认链接</c-link>
    <c-link type="danger">默认链接</c-link>
    <c-link type="warning">默认链接</c-link>
    <c-link type="success">默认链接</c-link>

    <hr>
    <c-link type="default" href="http://baidu.com" target="_blank">baidu.com</c-link>
    <c-link type="info" href="http://baidu.com" target="_blank">默认链接</c-link>
    <c-link type="primary" href="http://baidu.com" target="_blank">默认链接</c-link>
    <c-link type="danger" href="http://baidu.com" target="_blank">默认链接</c-link>
    <c-link type="warning" href="http://baidu.com" target="_blank">默认链接</c-link>
    <c-link type="success" href="http://baidu.com" target="_blank">默认链接</c-link>

    <hr>
    <c-link type="default" href="http://baidu.com" disabled>baidu.com</c-link>
    <c-link type="info" href="http://baidu.com" disabled>默认链接</c-link>
    <c-link type="primary" href="http://baidu.com" disabled>默认链接</c-link>
    <c-link type="danger" href="http://baidu.com" disabled>默认链接</c-link>
    <c-link type="warning" href="http://baidu.com" disabled>默认链接</c-link>
    <c-link type="success" href="http://baidu.com" disabled>默认链接</c-link>

    <hr>
    <c-link type="default" :to="{ path: '/button' }" target="_blank">button页面</c-link>
    <c-link type="info" :to="{ path: '/button' }" disabled>button页面</c-link>
    <c-link type="primary" :to="{ name: 'Button' }">name - button页面</c-link>
    <c-link type="danger" :to="{ path: '/button' }">button页面</c-link>
    <c-link type="warning" :to="{ path: '/button' }">button页面</c-link>
    <c-link type="success" :to="{ path: '/button' }">button页面</c-link>
  </div>
</template>

<script>
export default {
  name: 'link-page',
  components: {},
  data () {
    return {
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
</style>
