<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(nav, index) in navList" :key="index">
        <router-link :to="nav.link">
          <el-button type="primary">
            {{nav.name}} <i class="el-icon-right"></i>
          </el-button>
          <br>
          <br>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navList: [
        {
          name: 'button',
          link: '/button'
        },
        {
          name: 'tag',
          link: '/tag'
        },
        {
          name: 'link',
          link: '/link'
        },
        {
          name: 'row',
          link: '/row'
        },
        {
          name: 'container',
          link: '/container'
        },
        {
          name: 'avatar',
          link: '/avatar'
        },
        {
          name: 'badge',
          link: '/badge'
        },
        {
          name: 'alert',
          link: '/alert'
        },
        {
          name: 'divider',
          link: '/divider'
        },
        {
          name: 'breadcrumb',
          link: '/breadcrumb'
        },
        {
          name: 'backtop',
          link: '/backtop'
        }
      ]
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
</style>
