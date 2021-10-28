<template>
  <div class="demo-tag">
    <el-tag type="primary">tag</el-tag>
    <el-tag type="info">tag</el-tag>
    <el-tag type="success">tag</el-tag>
    <el-tag type="warning">tag</el-tag>
    <el-tag type="danger">tag</el-tag>
    <br>
    <br>
    <c-tag type="primary">tag</c-tag>
    <c-tag type="info">tag</c-tag>
    <c-tag type="success">tag</c-tag>
    <c-tag type="warning">tag</c-tag>
    <c-tag type="danger">tag</c-tag>

    <hr>
    <el-tag type="primary" closable>tag</el-tag>
    <el-tag type="info" closable>tag</el-tag>
    <el-tag type="success" closable>tag</el-tag>
    <el-tag type="warning" closable>tag</el-tag>
    <el-tag type="danger" closable>tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable>tag</c-tag>
    <c-tag type="info" closable>tag</c-tag>
    <c-tag type="success" closable>tag</c-tag>
    <c-tag type="warning" closable>tag</c-tag>
    <c-tag type="danger" closable>tag</c-tag>

    <hr>
    <el-tag type="primary" closable>tag</el-tag>
    <el-tag type="info" closable size="medium">tag</el-tag>
    <el-tag type="success" closable size="medium">tag</el-tag>
    <el-tag type="warning" closable size="small">tag</el-tag>
    <el-tag type="danger" closable size="mini">tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable>tag</c-tag>
    <c-tag type="info" closable size="medium">tag</c-tag>
    <c-tag type="success" closable size="medium">tag</c-tag>
    <c-tag type="warning" closable size="small">tag</c-tag>
    <c-tag type="danger" closable size="mini">tag</c-tag>

    <hr>
    <el-tag type="primary" closable hit>tag</el-tag>
    <el-tag type="info" closable size="medium" hit>tag</el-tag>
    <el-tag type="success" closable size="medium" hit>tag</el-tag>
    <el-tag type="warning" closable size="small" hit>tag</el-tag>
    <el-tag type="danger" closable size="mini" hit>tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable hit>tag</c-tag>
    <c-tag type="info" closable size="medium" hit>tag</c-tag>
    <c-tag type="success" closable size="medium" hit>tag</c-tag>
    <c-tag type="warning" closable size="small" hit>tag</c-tag>
    <c-tag type="danger" closable size="mini" hit>tag</c-tag>

    <hr>
    <el-tag type="primary" closable hit color="green">tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable hit  color="green">tag</c-tag>

    <hr>
    <el-tag v-if="visible" type="primary" closable hit>tag</el-tag>
    <el-tag v-show="visible" type="primary" closable hit>tag</el-tag>
    <br>
    <br>
    <c-tag v-if="visible" type="primary" closable hit>tag</c-tag>
    <c-tag v-show="visible" type="primary" closable hit>tag</c-tag>
    <br>
    <br>
    <c-button @click="visible = !visible">toggle</c-button>

    <hr>
    <el-tag type="primary" closable effect="dark" hit>tag</el-tag>
    <el-tag type="info" closable effect="dark" hit>tag</el-tag>
    <el-tag type="success" closable effect="dark" hit>tag</el-tag>
    <el-tag type="warning" closable effect="dark" hit>tag</el-tag>
    <el-tag type="danger" closable effect="dark" hit>tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable effect="dark" hit>tag</c-tag>
    <c-tag type="info" closable effect="dark" hit>tag</c-tag>
    <c-tag type="success" closable effect="dark" hit>tag</c-tag>
    <c-tag type="warning" closable effect="dark" hit>tag</c-tag>
    <c-tag type="danger" closable effect="dark" hit>tag</c-tag>

    <hr>
    <el-tag type="primary" closable effect="plain" hit>tag</el-tag>
    <el-tag type="info" closable effect="plain" hit>tag</el-tag>
    <el-tag type="success" closable effect="plain" hit>tag</el-tag>
    <el-tag type="warning" closable effect="plain" hit>tag</el-tag>
    <el-tag type="danger" closable effect="plain" hit>tag</el-tag>
    <br>
    <br>
    <c-tag type="primary" closable effect="plain" hit>tag</c-tag>
    <c-tag type="info" closable effect="plain" hit>tag</c-tag>
    <c-tag type="success" closable effect="plain" hit>tag</c-tag>
    <c-tag type="warning" closable effect="plain" hit>tag</c-tag>
    <c-tag type="danger" closable effect="plain" hit>tag</c-tag>

    <hr>
    <el-tag type="primary" closable effect="wrong" hit>tag</el-tag>
    <c-tag type="primary" closable effect="wrong" hit>tag</c-tag>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data () {
    return {
      visible: true
    }
  },
  created () {}
}
</script>

<style lang='less'>
.demo-tag {
  .el-tag+.el-tag {
    margin-left: 10px;
  }
}
</style>
