<template>
  <transition name="el-fade-in">
    <div
      v-show="visible"
      class="c-backtop"
      :style="{
        right: `${right}px`,
        bottom: `${bottom}px`,
      }"
      @click="handleClick">
      <slot>
        <i class="el-icon-caret-top"></i>
      </slot>
    </div>
  </transition>
</template>

<script>
// 缓动动画
const easeInOutCubic = function (pos) {
  if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
  return 0.5 * (Math.pow((pos-2), 3) + 2)
}

export default {
  name: 'CBacktop',
  props: {
    target: {
      type: String
    },
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      visible: false,
      container: null,
      targetEl: null
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        if (this.target) {
          this.scroller = document.querySelector(this.target)
        } else {
          this.scroller = document.documentElement
        }
        this.container = this.scroller.nodeName === 'HTML' ? document : this.scroller
        this.bindEvent()
      })
    },
    bindEvent () {
      if (this.container) {
        this.container.addEventListener('scroll', this.handleScroll)
      }
    },
    removeEvent () {
      if (this.container) {
        this.container.removeEventListener('scroll', this.handleScroll)
      }
    },
    handleScroll () {
      let scrollTop = this.scroller.scrollTop
      this.visible = scrollTop >= this.visibilityHeight
    },
    handleClick (event) {
      this.scrollToTop()
      this.$emit('click', event)
    },
    scrollToTop () {
      let distance = this.scroller.scrollTop
      let beginTime = new Date().getTime()
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        let now = new Date().getTime()
        let progress = (now - beginTime) / this.duration
        if (progress < 1) {
          let currDistance = distance - distance * easeInOutCubic(progress)
          this.scroller.scrollTop = currDistance
          rAF(frameFunc)
        } else {
          this.scroller.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }
  },
  created () {
    this.init()
  },
  beforeDestroy () {
    this.removeEvent()
  }
}
</script>

<style lang='less'>
.c-backtop {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  color: #409eff;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f2f6fc;
  }
}
</style>
