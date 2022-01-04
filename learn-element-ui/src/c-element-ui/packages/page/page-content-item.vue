<template>
  <div class="page-content-item" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
const addPrefix = (props) => {
  const newProps = { ...props }
  const prefixs = ['-webkit-', '-ms-', '-moz-']
  for (const prop in props) {
    prefixs.forEach(prefix => {
      newProps[prefix + prop] = props[prop]
    })
  }
  console.log(newProps, 'newProps')
  return newProps
}

export default {
  name: 'page-content-item',
  props: {
    width: {
      type: String
    },
    gutter: {
      type: String,
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  inject: ['PageContent'],
  computed: {
    getStyle () {
      let flexStyle = {}
      if (this.width) {
        flexStyle = addPrefix({
          'flex-grow': 0,
          'flex-shrink': 1,
          'flex-basis': this.width
        })
      }
      return {
        marginLeft: this.gutter || undefined,
        ...flexStyle
      }
    }
  },
  created () {
    this.PageContent?.registerItems(this)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    this.PageContent?.unregisterItems(this)
  }
}
</script>

<style lang='less' scoped>
.page-content-item {
  position: relative;
  background: #fff;
  flex: 1;
  overflow: auto;
  border-radius: 4px;
}
.page-content-item + .page-content-item {
  margin-left: 10px;
}
</style>
