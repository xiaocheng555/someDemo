<template>
  <div class="collapse-item" :class="[disabled && 'is-disabled']">
    <div class="collapse-header" @click="toggle">
      <slot name="title">{{title}}</slot>
    </div>
    <div ref="content" class="collapse-body" :style="contentStyle">
      <div class="collapse-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
function getTransitionEnd () {
  const el = document.createElement('surface')
  const transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
   }

   for (const t in transitions) {
      if(el.style[t] !== undefined) {
        return transitions[t]
      }
   }
}
const transitionEnd = getTransitionEnd()

export default {
  name: 'CCollapseItem',
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['Collapse'],
  data () {
    return {
      isOpen: false,
      height: 0
    }
  },
  computed: {
    contentStyle () {
      return {
        height: this.height
      }
    }
  },
  methods: {
    toggle () {
      if (this.disabled) return
      this.isOpen ? this.close() : this.open()
      this.Collapse?.emitChange(this)
    },
    open () {
      if (this.isOpen) return
      this.isOpen = true
      this.setContentHeight()
    },
    close () {
      if (!this.isOpen) return
      this.isOpen = false
      this.setContentHeight()
      setTimeout(() => {
        this.height = 0
      })
    },
    setContentHeight () {
      const el = this.$refs.content
      if (el) {
        this.height = el.scrollHeight + 'px'
      }
    },
    bindEvent () {
      this.transitionEndFn = () => {
        if (this.isOpen) {
          this.height = undefined
        }
      }
      this.$refs.content?.addEventListener(transitionEnd, this.transitionEndFn)
    },
    unbindEvent () {
      this.$refs.content?.removeEventListener(transitionEnd, this.transitionEndFn)
    }
  },
  created () {
    this.Collapse?.registerItem(this)
    this.$nextTick(() => {
      this.bindEvent()
    })
  },
  beforeDestroy () {
    this.unbindEvent()
    this.Collapse?.unregisterItem(this)
  }
}
</script>

<style lang='less' scoped>
.collapse-item {
  &.is-disabled {
    .collapse-header {
      opacity: .6;
      cursor: not-allowed;
    }
  }
}
.collapse-header {
  display: flex;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  padding: 0 16px;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
  font-size: 13px;
  font-weight: 500;
  transition: border-bottom-color .3s;
  outline: none;
}
.collapse-body {
  box-sizing: border-box;
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  transition: height .3s ease-in-out;
}
.collapse-content {
  padding: 8px 16px 16px;
  font-size: 13px;
  color: #303133;
  line-height: 1.769230769230769;
}
</style>
