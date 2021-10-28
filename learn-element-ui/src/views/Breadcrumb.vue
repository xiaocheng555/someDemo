<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <c-breadcrumb separator-class="el-icon-arrow-right">
      <c-breadcrumb-item :to="{ path: '/' }">首页</c-breadcrumb-item>
      <c-breadcrumb-item><a href="/">活动管理</a></c-breadcrumb-item>
      <c-breadcrumb-item>活动列表</c-breadcrumb-item>
      <c-breadcrumb-item>活动详情</c-breadcrumb-item>
    </c-breadcrumb>

    <br>
    <hr>
    <br>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tag' }" replace>tag列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <c-breadcrumb separator="/">
      <c-breadcrumb-item :to="{ path: '/' }">首页</c-breadcrumb-item>
      <c-breadcrumb-item><a href="/">活动管理</a></c-breadcrumb-item>
      <c-breadcrumb-item :to="{ path: '/tag' }" replace>tag列表</c-breadcrumb-item>
      <c-breadcrumb-item>活动详情</c-breadcrumb-item>
    </c-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang='less' scoped>
</style>
