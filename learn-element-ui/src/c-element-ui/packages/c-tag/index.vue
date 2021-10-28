<template>
  <span
    class="c-tag"
    :class="[
      type ? `c-tag_${type}` : '',
      size ? `c-tag_${size}` : '',
      effect ? `c-tag_${effect}` : '',
      {
        'is-hit': hit,
        'has-transition': disableTransitions
      }
    ]"
    :style="{
      background: color
    }"
    @click="handleClick">
    <slot></slot>
    <i class="el-icon-close c-tag-close" v-if="closable" @click="handleCloseClick"></i>
  </span>
</template>

<script>
export default {
  name: 'CTag',
  props: {
    type: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    },
    hit: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'light',
      validator (val) {
        return ['light', 'dark', 'plain'].indexOf(val) > -1
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    handleCloseClick (evt) {
      this.$emit('close', evt)
    }
  }
}
</script>

<style lang='less'>
.c-tag {
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
  padding: 0 10px;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  font-size: 12px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  white-space: nowrap;
  color: #409eff;
  background-color: #ecf5ff;
  &.is-hit {
    border: 1px solid #409eff;
  }
  &.has-transition {
    transition: all .3s;
  }

  .c-tag-close {
    position: relative;
    top: -1px;
    right: -5px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    font-size: 12px;
    line-height: 16px;
    vertical-align: middle;
    text-align: center;
    color: #409eff;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background: #409eff;
    }
  }
}

// 类型样式
.c-tag_info {
  border-color: #e9e9eb;
  color: #909399;
  background-color: #f4f4f5;
  &.is-hit {
    border-color: #909399;
  }
  .c-tag-close {
    color: #909399;

    &:hover {
      background: #909399;
    }
  }
}
.c-tag_success {
  border-color: #e1f3d8;
  color: #67c23a;
  background-color: #f0f9eb;
  &.is-hit {
    border-color: #67c23a;
  }
  .c-tag-close {
    color: #67c23a;

    &:hover {
      background: #67c23a;
    }
  }
}
.c-tag_warning {
  border-color: #faecd8;
  color: #e6a23c;
  background-color: #fdf6ec;
  &.is-hit {
    border-color: #e6a23c;
  }
  .c-tag-close {
    color: #e6a23c;

    &:hover {
      background: #e6a23c;
    }
  }
}
.c-tag_danger {
  border-color: #fde2e2;
  color: #f56c6c;
  background-color: #fef0f0;
  &.is-hit {
    border-color: #f56c6c;
  }
  .c-tag-close {
    color: #f56c6c;

    &:hover {
      background: #f56c6c;
    }
  }
}

// 效果样式
.c-tag_dark {
  border-color: #409eff;
  color: #fff;
  background-color: #409eff;

  .c-tag-close {
    color: #fff;
    &:hover {
      color: #FFF;
      background-color: rgba(255, 255, 255, .2);
    }
  }

  &.c-tag_info {
    background-color: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.c-tag_success {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.c-tag_danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  &.c-tag_warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.c-tag_plain {
  background: transparent;
}

// 尺寸样式
.c-tag_medium {
  height: 28px;
  line-height: 26px;
  .c-tag-close {
    transform: scale(.8);
  }
}
.c-tag_small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  .c-tag-close {
    transform: scale(.8);
  }
}
.c-tag_mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
  .c-tag-close {
    margin-left: -3px;
    transform: scale(.7);
  }
}
</style>
