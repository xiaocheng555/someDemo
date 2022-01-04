<template>
  <div
    class="c-space"
    :class="[
      `c-space_${align}`,
      wrap && 'c-space_wrap',
      horizontal && 'c-space_horizontal'
    ]"
    :style="{
      marginBottom: wrap && !horizontal && (-sizes.y + 'px')
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSpace',
  props: {
    size: {
      type: Number | Array,
      default: 0
    },
    spacer: {
      type: String | Number | Object
    },
    align: {
      type: String,
      default: ''
    },
    wrap: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizes () {
      const result = {
        x: null,
        y: null
      }
      const prop = this.horizontal ? 'y' : 'x'
      if (Array.isArray(this.size)) {
        if (this.size.length === 1) {
          result[prop] = this.size
        } else if (this.size.length > 1) {
          result.x = this.size[0]
          result.y = this.size[1]
        }
      } else if (['small', 'middle', 'large'].includes(this.size)) {
        const sizeMap = {
          small: 8,
          middle: 16,
          large: 24
        }
        result[prop] = sizeMap[this.size]
        return [size]
      } else if (typeof this.size === 'number') {
        result[prop] = this.size
      }
      return result
    }
  },
  methods: {
    wrapNodes () {
      const children = this.$slots.default
      const newChildren = []

      for (let i = 0; i < children.length; i++) {
        const style = {
          marginRight: this.sizes.x + 'px',
          marginBottom: this.sizes.y + 'px'
        }
        if (i === children.length - 1) {
          if (this.horizontal) {
            style.marginBottom = null
          } else {
            style.marginRight = null
          }
        }
        const wrapVNode = this.$createElement('div', {
          style: style,
          class: 'c-space-box'
        }, [children[i]])
        newChildren.push(wrapVNode)
        if (this.spacer && i < children.length - 1) {
          newChildren.push(this.createSpacerVNode(style))
        }
      }
      this.$slots.default = newChildren
    },
    createSpacerVNode (style) {
      return this.$createElement('div', {
        style: style,
        class: 'c-space-box'
      }, [this.spacer])
    }
  },
  created () {
    this.wrapNodes()
  }
}
</script>

<style lang='less' scoped>
.c-space {
  display: flex;
  align-items: center;

  &.c-space_horizontal {
    flex-direction: column;
    align-items: initial;
  }
  &.c-space_center {
    align-items: center;
  }
  &.c-space_flex-start {
    align-items: flex-start;
  }
  &.c-space_flex-end {
    align-items: flex-end;
  }
  &.c-space_stretch {
    align-items: stretch;
  }
  &.c-space_baseline {
    align-items: baseline;
  }
  &.c-space_wrap {
    flex-wrap: wrap;
  }
}

.c-space-box {

}
</style>
