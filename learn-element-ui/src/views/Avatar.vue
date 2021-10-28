<template>
  <div>
    <section>
      <div class="block" v-for="fit in fits" :key="fit">
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
        <p class="title">{{ fit }}</p>
      </div>
    </section>
    <br>
    <br>
    <section>
      <div class="block" v-for="fit in fits" :key="fit">
        <c-avatar shape="square" :size="100" :fit="fit" :src="url"></c-avatar>
        <p class="title">{{ fit }}</p>
      </div>
    </section>
    <br>
    <br>
    <hr>

    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </el-avatar>
    <br>
    <br>
    <c-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </c-avatar>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    errorHandler () {
      return true
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
.block {
  display: inline-block;
  text-align: center;
  width: 20%;
}
.title {
  margin-top: 0;
}
</style>
