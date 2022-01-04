<template>
  <div
    class="page-content"
    :class="[
      noPadding ? 'no-padding' : '',
      noBg ? 'no-bg' : '',
      hasGutter ? 'has-gutter' : '',
      items.length > 0 ? 'is-flex' : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-content',
  props: {
    noPadding: {
      type: Boolean,
      default: false
    },
    noBg: {
      type: Boolean,
      default: false
    }
  },
  inject: ['Page'],
  provide () {
    return {
      'PageContent': this
    }
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    hasGutter () {
      return this.Page?.hasHeaderGutter
    }
  },
  methods: {
    registerItems (Item) {
      if (this.items.indexOf(Item) === -1) {
        this.items.push(Item)
      }
    },
    unregisterItems (Item) {
      console.log('unRegisterItems')
      this.items = this.items.filter(item => item !== Item)
    }
  }
}
</script>

<style lang='less' scoped>
.page-content {
  position: relative;
  flex: 1;
  padding: 20px;
  border-radius: 0 0 4px 4px;
  background: #ffffff;
  &.no-padding {
    padding: 0;
  }
  &.no-bg {
    background: none;
  }
  &.has-gutter {
    border-radius: 4px;
  }
  &.is-flex {
    display: flex;
  }
}
</style>
