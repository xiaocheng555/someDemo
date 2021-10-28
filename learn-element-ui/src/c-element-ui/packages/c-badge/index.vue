<template>
  <span class="c-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden"
        class="c-badge-content"
        :class="[
          type ? `c-badge-content_${type}` : '',
          {
            'is-dot': isDot,
            'is-fixed': $slots.default
          }
        ]"
        :style="badgeStyle"
        :title="title">
        <template v-if="!isDot">
          {{ badgeValue }}
        </template>
      </sup>
    </transition>
  </span>
</template>

<script>
export default {
  name: 'CBadge',
  props: {
    value: {
      type: Number
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    offset: {
      type: Array,
      default: () => []
    },
    title: {
      type: String | Number,
      default: ''
    }
  },
  computed: {
    badgeValue () {
      if (typeof this.value !== 'number') return ''
      if (typeof this.max === 'number') {
        return this.value <= this.max ? this.value : this.max + '+'
      } else {
        return this.value
      }
    },
    badgeStyle () {
      return {
        top: this.offset[0] + 'px',
        marginRight: -this.offset[1] + 'px',
      }
    }
  }
}
</script>

<style lang='less'>
.c-badge {
  display: inline-block;
  position: relative;
}
.c-badge-content {
  display: inline-block;
  padding: 0 6px;
  border: 1px solid #FFF;
  border-radius: 10px;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  color: #ffffff;
  background-color: #F56C6C;

  &.is-fixed {
    position: absolute;
    right: 10px;
    top: 0;
    transform: translate(100%, -50%);
  }
  &.is-dot {
    right: 5px;
    padding: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}
.c-badge-content_primary {
  background-color: #409EFF;

}
.c-badge-content_warning {
  background-color: #E6A23C;
}
.c-badge-content_success {
  background-color: #67c23a;
}
.c-badge-content_info {
  background-color: #909399;
}
</style>
