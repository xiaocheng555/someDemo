<template>
  <div class="row-demo">
    <c-row class="box-list" :gutter="gutter" type="flex" justify="center" align="middle">
      <c-col
        class="box-wrap"
        v-for="i in 20"
        :pull="i === 2 ? 1 : null"
        :push="i === 10 ? 1 : null"
        :offset="i === 20 ? 1 : null"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="3"
        :key="i">
        <div class="box">
          <c-row :gutter="5">
            <div>
              <c-col :span="12">test1</c-col>
              <c-col :span="12">test2</c-col>
            </div>
          </c-row>
        </div>
      </c-col>
    </c-row>
    <br>
    <br>
    <hr>
    <br>
    <br>
    <el-row class="box-list" :gutter="gutter" type="flex" justify="center" align="middle">
      <el-col
        class="box-wrap"
        v-for="i in 20"
        :pull="i === 2 ? 1 : null"
        :push="i === 10 ? 1 : null"
        :offset="i === 20 ? 1 : null"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="3"
        :key="i">
         <div class="box">
            <c-row :gutter="5">
              <c-col :span="12">test1</c-col>
              <c-col :span="12">test2</c-col>
            </c-row>
          </div>
      </el-col>
    </el-row>
    <br>
    <br>
    <hr>
    <br>
    <br>

    <c-row class="box-list" :gutter="gutter" type="flex" justify="center" align="middle">
      <c-col
        class="box-wrap"
        v-for="i in 3"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="3"
        :key="i">
        <div class="box">
          <c-row :gutter="5">
            <div>
              <c-col :span="12">test1</c-col>
              <c-col :span="12">test2</c-col>
            </div>
          </c-row>
        </div>
      </c-col>
    </c-row>
    <br>
    <br>
    <hr>
    <br>
    <br>
    <el-row class="box-list" :gutter="gutter" type="flex" justify="center" align="middle">
      <el-col
        class="box-wrap"
        v-for="i in 3"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="3"
        :key="i">
         <div class="box">
            <c-row :gutter="5">
              <c-col :span="12">test1</c-col>
              <c-col :span="12">test2</c-col>
            </c-row>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'row',
  data () {
    return {
      gutter: 10
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
.box-list {
  flex-wrap: wrap;
  min-height: 200px;
  background: rgba(0, 0, 0, .2);
}
.box-wrap {
  height: 150px;
}
.box {
  border: 1px solid red;
  width: 50%;
  height: 100%;
}
</style>
