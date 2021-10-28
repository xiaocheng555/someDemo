<template>
  <button
    class="c-button"
    :class="[
      type ? `c-button_${type}` : '',
      size ? `c-button_${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-block': block
      }
    ]"
    :type="nativeType"
    :disabled="disabled"
    :autofocus="autofocus"
    @click="handleClick">
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon &&!loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang='less'>
.c-button {
  box-sizing: border-box;
  display: inline-block;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
  color: #606266;
  background: #ffffff;
  line-height: 1;
  transition: .1s;
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }

  // 圆润按钮
  &.is-round {
    padding: 12px 23px;
    border-radius: 20px;
  }
  // 圆形按钮
   &.is-circle {
    padding: 12px;
    border-radius: 50%;
  }
  // 幽灵按钮
  &.is-plain:hover,
  &.is-plain:focus {
    background: #FFF;
    border-color: #409EFF;
    color: #409EFF;
  }
  &.is-plain:active {
    outline: 0;
    color: #3a8ee6;
    border-color: #3a8ee6;
    background: #FFF;
  }
  // 禁止按钮
   &.is-disabled {
    color: #C0C4CC;
    cursor: not-allowed;
    background-image: none;
    background-color: #FFF;
    border-color: #EBEEF5;
  }
  // loading样式
  &.is-loading {
    position: relative;
    pointer-events: none;
    &:before {
      pointer-events: none;
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: rgba(255,255,255,.35);
    }
  }
  &.is-block {
    width: 100%;
    margin-right: 0;
  }
}

// 按钮类型
.c-button_primary {
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #FFF;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #FFF;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}
.c-button_danger {
  color: #FFF;
  background-color: #F56C6C;
  border-color: #F56C6C;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #FFF;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #FFF;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #FFF;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }


}
.c-button [class*=el-icon-]+span {
  margin-left: 5px;
}
.c-button_warning {
  color: #FFF;
  background-color: #E6A23C;
  border-color: #E6A23C;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #FFF;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #FFF;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #FFF;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}
.c-button_info {
  color: #FFF;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #FFF;
  }
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #FFF;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #FFF;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}

// 按钮尺寸
.c-button_medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-round {
    padding: 10px 20px;
  }
  &.is-circle {
    padding: 10px;
  }
}
.c-button_small {
  font-size: 12px;
  border-radius: 3px;
  padding: 9px 15px;
  &.is-round {
    padding: 9px 15px;
  }
  &.is-circle {
    padding: 9px;
  }
}
.c-button_mini {
  font-size: 12px;
  border-radius: 3px;
  padding: 7px 15px;
  &.is-round {
    padding: 7px 15px;
  }
  &.is-circle {
    padding: 7px;
  }
}
</style>
