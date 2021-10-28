<template>
  <div>
    <el-container>
      <el-header height="60px">Header</el-header>
      <el-container style="height: 300px; border: 1px solid #eee">
        <el-aside width="200px">
          <div style="height: 1000px;"></div>
        </el-aside>
        <el-main>
          <div style="height: 1000px;"></div>
        </el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
    <br>
    <br>
    <c-container>
      <c-header height="60px">Header</c-header>
      <c-container style="height: 300px; border: 1px solid #eee">
        <c-aside width="200px">
          <div style="height: 1000px;"></div>
        </c-aside>
        <c-main>
          <div style="height: 1000px;"></div>
        </c-main>
      </c-container>
      <c-footer></c-footer>
    </c-container>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

// my
.c-header, .c-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.c-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.c-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .c-container {
  margin-bottom: 40px;
}
.c-container:nth-child(5) .c-aside,
.c-container:nth-child(6) .c-aside {
  line-height: 260px;
}
.c-container:nth-child(7) .c-aside {
  line-height: 320px;
}
</style>
