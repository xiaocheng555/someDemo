<template>
  <div class="page-container" :style="getStyle" :class="[innerScroll ? 'inner-scroll' : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    },
    innerScroll: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      'Page': this
    }
  },
  data () {
    return {
      height: undefined,
      hasHeaderGutter: false
    }
  },
  computed: {
    getStyle () {
      const cssProp = this.innerScroll ? 'height' : 'min-height'
      return {
        [cssProp]: this.height
      }
    }
  },
  methods: {
    registerEvent () {
      if (!this.onResize) {
        this.onResize = () => {
          this.$nextTick(() => {
            const rect = this.$el.getBoundingClientRect()
            const screenHeight = window.innerHeight || document.documentElement.offsetHeight
            this.height = screenHeight - rect.top + 'px'
            console.log(screenHeight, rect.top, 'event', this.height)
          })
        }
        this.onResize()
        window.addEventListener('resize', this.onResize)
      }
    },
    unRegisterEvent () {
      this.height = undefined
      if (this.onResize) {
        window.removeEventListener('resize', this.onResize)
        this.onResize = null
      }
    }
  },
  watch: {
    fullScreen: {
      immediate: true,
      handler (val) {
        if (val) {
          this.registerEvent()
        } else {
          this.unRegisterEvent()
        }
      }
    }
  },
  created () {
    this.PageHeader = null
    this.PageContent = null
  },
  beforeDestroy () {
    this.unRegisterEvent()
  }
}
</script>

<style lang='less' scoped>
.page-container {
  position: relative;
  display: flex;
  flex-direction: column;
  &.inner-scroll {
    /deep/ .page-content {
      overflow: auto;
    }
  }
}
</style>
