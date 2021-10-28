<template>
  <div>
    <br>
    <el-badge :value="100" :max="99">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="12" :max="99">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="3" :max="99">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="100" :max="99">
    </el-badge>

    <br>
    <br>
    <c-badge :value="100" :max="99">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="12" :max="99">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="3" :max="99">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="100" :max="99">
    </c-badge>

    <hr>
    <el-badge :value="100" :max="99" type="primary">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="100" :max="99" type="info">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="100" :max="99" type="warning">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="100" :max="99" type="danger">
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge :value="100" :max="99" type="success">
      <el-button>按钮</el-button>
    </el-badge>
    <br>
    <br>
    <c-badge :value="100" :max="99" type="primary">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="100" :max="99" type="info">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="100" :max="99" type="warning">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="100" :max="99" type="danger">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge :value="100" :max="99" type="success">
      <c-button>按钮</c-button>
    </c-badge>

    <hr>
    <br>
    <el-badge type="primary" is-dot>
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge type="info" is-dot>
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge type="warning" is-dot>
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge type="danger" is-dot>
      <el-button>按钮</el-button>
    </el-badge>
    <el-badge type="success" is-dot>
      <el-button>按钮</el-button>
    </el-badge>
    <br>
    <br>
    <c-badge type="primary" is-dot>
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge type="info" is-dot>
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge type="warning" is-dot>
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge type="danger" is-dot>
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge type="success" is-dot>
      <c-button>按钮</c-button>
    </c-badge>

    <hr>
    <el-badge :value="100" :max="99" :hidden="hidden">
      <el-button>按钮</el-button>
    </el-badge>
    <c-badge :value="100" :max="99" :hidden="hidden">
      <c-button>按钮</c-button>
    </c-badge>
    <el-switch v-model="hidden"></el-switch>

    <hr>
    <c-badge :title="100" :value="100" :max="99" :offset="[0, -78]" style="margin-left: 20px;">
      <c-button>按钮</c-button>
    </c-badge>
    <c-badge is-dot :offset="[0, -70]" style="margin-left: 20px;">
      <c-button>按钮</c-button>
    </c-badge>
  </div>
</template>

<script>
export default {
  name: 'badge',
  components: {},
  data () {
    return {
      hidden: false
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
.el-badge,
.c-badge {
  margin-top: 10px;
  margin-right: 50px;
}
</style>
