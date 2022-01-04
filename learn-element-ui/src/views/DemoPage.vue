<template>
  <div class="demo-page">
    <div style="position: fixed; right: 30px; bottom: 30px; z-index: 100;">
      gutter: <el-switch v-model="gutter"></el-switch>
      fullScreen: <el-switch v-model="fullScreen"></el-switch>
      divide: <el-switch v-model="divide"></el-switch>
      tabs: <el-switch v-model="tabs"></el-switch>
      innerScroll: <el-switch v-model="innerScroll"></el-switch>
      noPadding: <el-switch v-model="noPadding"></el-switch>
      noBg: <el-switch v-model="noBg"></el-switch>
      分栏: <el-switch v-model="rows"></el-switch>
    </div>

    <page :fullScreen="fullScreen" :innerScroll="innerScroll">
      <page-header
        title="第三方授权"
        icon="https://img01.yzcdn.cn/vant/logo.png"
        :gutter="gutter"
        :divide="divide">
        <div slot="subtitle">系统集成中心 / 第三方授权</div>
        <el-button slot="action" type="primary" size="small">action</el-button>
        <el-tabs v-if="tabs" slot="bottom"  v-model="currTab">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </page-header>
      <page-content :noPadding="noPadding" :noBg="noBg">
        <template v-if="rows">
          <page-content-item width="300px">
            内容条数：<el-input-number v-model="count2"></el-input-number>
            <p v-for="i in count2" :key="i">{{i}}</p>
          </page-content-item>
          <page-content-item>
            内容条数：<el-input-number v-model="count3"></el-input-number>
            <p v-for="i in count3" :key="i">{{i}}</p>
          </page-content-item>
          <page-content-item width="200px" gutter="20px">
            <div style="height: 100%; overflow: auto;">
              <p v-for="i in 100" :key="i">{{i}}</p>
            </div>
          </page-content-item>
        </template>
        <template v-else>
          <el-input-number v-model="count"></el-input-number>
          <p v-for="i in count" :key="i">{{i}}</p>
          test
        </template>
      </page-content>
    </page>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  data () {
    return {
      currTab: 'first',
      tabs: false,
      gutter: false,
      fullScreen: false,
      divide: false,
      count: 10,
      count2: 10,
      count3: 10,
      innerScroll: false,
      noPadding: false,
      noBg: false,
      rows: false
    }
  },
  created () {}
}
</script>

<style lang='less'>
body {
  background: #eee;
}
.demo-page {
  padding: 20px;
  padding-bottom: 0;
  .el-tabs {
    position: relative;
    top: -1px;
  }
  .el-tabs__nav {
    margin-left: 20px !important;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
}
.content-title-wrap {
  height: 50px;
}
.content-title {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  line-height: 50px;
  background: #999;
}
</style>
