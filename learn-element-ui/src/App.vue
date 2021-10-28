<template>
  <div id="app">
    <!-- <h3 :title="title" :class="[title]">{{title}}</h3> -->
    <!-- <VueDebugger></VueDebugger> -->
    <!-- <Demo1></Demo1> -->
    <Demo2
      class="demo2"
      style="color: red;"
      title="demo2"
      :data-test="count"
      :text="count"
      :class="`demo_count_${count}`"
      :style="{ minHeight: count + 'px' }"
      @increase="handleIncrease">
    </Demo2>
      <!-- @click.native="handleClick" -->
    <!-- <div>
      <button @click="count = count + 1">increase</button>
      count: {{ count }}
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import VueDebugger from './vue-debugger'
import Demo1 from './vue-debugger/demo1'
import Demo2 from './vue-debugger/demo2'

export default {
  name: 'app',
  components: {
    VueDebugger,
    Demo1,
    Demo2
  },
  data () {
    return {
      count: 0,
      title: 'app title'
    }
  },
  methods: {
    handleClick () {
      console.log('==')
    },
    handleIncrease (count) {
      // debugger
      console.log(this, '==', count)
      console.log(this.title, 'title')
    }
  },
  created () {
    console.log(this.handleIncrease.toString(),'==================')
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
