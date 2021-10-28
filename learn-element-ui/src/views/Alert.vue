<template>
  <div>
    <el-alert
      title="成功提示的文案"
      showIcon
      closeable>
    </el-alert>
    <br>
    <c-alert
      title="成功提示的文案"
      showIcon
      closeable>
    </c-alert>

    <br>
    <hr>
    <br>
    <el-alert
      title="成功提示的文案"
      showIcon
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <c-alert
      title="成功提示的文案"
      showIcon
      closeable
      closeText="知道了">
    </c-alert>

    <br>
    <hr>
    <br>

    <el-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="success"
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <el-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="error"
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <el-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="info"
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <el-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="warning"
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="success"
      closeable
      closeText="知道了">
    </c-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="error"
      closeable
      closeText="知道了">
    </c-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="info"
      closeable
      closeText="知道了">
    </c-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案"
      showIcon
      type="warning"
      closeable
      closeText="知道了">
    </c-alert>
    <el-switch v-model="toggle" @change="handleChange">切换主题</el-switch>

    <hr>
    <br>
    <br>
    <el-alert
      :effect="effect"
      title="成功提示的文案"
      description="描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字"
      showIcon
      type="warning"
      closeable
      closeText="知道了">
    </el-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案"
      description="描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字"
      showIcon
      type="warning"
      closeable
      closeText="知道了">
    </c-alert>

    <hr>
    <br>
    <br>
    <el-alert
      :effect="effect"
      title="成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案"
      description="描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字"
      showIcon
      type="warning"
      closeable>
    </el-alert>
    <br>
    <c-alert
      :effect="effect"
      title="成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案"
      description="描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字"
      showIcon
      type="warning"
      closeable>
    </c-alert>
    <br>
    <c-alert
      :effect="effect"
      showIcon
      type="warning"
      closeable>
      <p slot="title" class="ell">成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案成功提示的文案</p>
      <p slot="description" class="ell">描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字</p>
    </c-alert>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      effect: 'light',
      toggle: false
    }
  },
  methods: {
    handleChange () {
      this.effect = this.toggle ? 'light' : 'dark'
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
.ell {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>
