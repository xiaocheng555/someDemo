<template>
  <transition name="el-fade-in">
    <div
      v-show="!isClose"
      class="c-alert"
      :class="[
        `c-alert_${type}`,
        `c-alert_${effect}`,
        {
          'has-description': hasDesc
        }
      ]">
      <i v-if="showIcon" class="c-alert-icon" :class="`el-icon-${type}`"></i>
      <div class="c-alert-content">
        <div class="c-alert-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <p class="c-alert-desc" v-if="hasDesc">
          <slot name="description">{{ description }}</slot>
        </p>
      </div>
      <div
        v-if="closeable"
        class="c-alert-close"
        @click="handleClose">
        <span v-if="closeText">{{ closeText }}</span>
        <i v-else class="el-icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CAlert',
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'info',
      validator (val) {
        return ['success', 'warning', 'info', 'error'].indexOf(val) > -1
      }
    },
    description: {
      type: String
    },
    closeable: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String
    },
    effect: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      isClose: false
    }
  },
  computed: {
    hasDesc () {
      return !!this.description || this.$slots.description
    }
  },
  methods: {
    handleClose (e) {
      const result = this.$emit('close', e)
      if (result !== false) {
        this.isClose = true
      }
    }
  },
  created () {}
}
</script>

<style lang='less'>
.c-alert {
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  align-items: center;
  color: #909399;
  background-color: #f4f4f5;

  &.has-description {
    .c-alert-icon {
      font-size: 28px;
    }
    .c-alert-title {
      font-weight: 700;
    }
  }
}
// 类型样式
.c-alert_error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.c-alert_success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.c-alert_warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}
// dark主题的样式
.c-alert_dark {
  background-color: #909399;
  color: #FFF;

  &.c-alert_error {
    background-color: #F56C6C;
  }
  &.c-alert_success {
    background-color: #67C23A;
  }
  &.c-alert_warning {
    background-color: #e6a23c;
  }
  .c-alert-close {
    color: #ffffff;
  }
}

.c-alert-icon {
  font-size: 16px;
}
.c-alert-content {
  flex: 1;
  padding: 0 8px;
  font-size: 13px;
  line-height: 18px;
  overflow: hidden;
}
.c-alert-desc {
  font-size: 12px;
  margin: 5px 0 0;
  line-height: 16px;
}
.c-alert-close {
  align-self: flex-start;
  font-size: 12px;
  color: #C0C4CC;
  cursor: pointer;
}
</style>
