<template>
  <section
    class="c-container"
    :class="[
      {
        'is-vertical': isVertical
      }
    ]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'CContainer',
  data () {
    return {
      // 存储垂直布局的子组件（c-aside、c-main）
      verticalChilds: []
    }
  },
  computed: {
    isVertical () {
      return this.verticalChilds.length > 0
    }
  },
  methods: {
    // 添加子组件
    addVerticalChild (vm) {
      this.verticalChilds.push(vm)
    },
    // 移除子组件
    removeVerticalChild (vm) {
      let index = this.verticalChilds.indexOf(vm)
      if (index > -1) {
        this.verticalChilds.splice(index, 1)
      }
    }
  }
}
</script>

<style lang='less'>
.c-container {
  display: flex;

  &.is-vertical {
    flex-direction: column;
  }
}
</style>
