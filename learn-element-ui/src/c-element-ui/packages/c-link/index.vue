<template>
  <a
    v-if="!isRouter"
    :class="classes"
    :href="currHref"
    @click="handleClick">
    <slot></slot>
  </a>
  <router-link
    v-else
    tag="a"
    :class="classes"
    :to="to"
    disable
    @click.native="handleClick">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'CLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    to: {
      type: Object
    },
    showDisabledHref: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRouter () {
      return !this.disabled && !!this.to
    },
    classes () {
      return [
        'c-text',
        this.type ? `c-text_${this.type}` : '',
        {
          'has-underline': this.underline,
          'is-disabled': this.disabled,
          'is-link': true
        }
      ]
    },
    currHref () {
      return !this.showDisabledHref && this.disabled ? undefined : this.href
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) {
        event.preventDefault()
        return
      }

      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less'>
.c-text {
  display: inline-block;
  margin-right: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #606266;
  outline: none;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &.is-disabled {
    opacity: .7;
    cursor: not-allowed;
  }
  &.has-underline {
    &:hover {
      text-decoration: underline;
    }
  }
}
.c-text_info {
  color: #909399;
}
.c-text_primary {
  color: #409eff;
}
.c-text_success {
  color: #67c23a;
}
.c-text_warning {
  color: #e6a23c;
}
.c-text_danger {
  color: #f56c6c;
}

&.is-link:not(.is-disabled) {
  transition: color .3s;
  cursor: pointer;
  &:hover {
    color: #409eff;
  }
  &.c-text_info {
    &:hover {
      color: #a6a9ad;
    }
  }
  &.c-text_primary {
    &:hover {
      color: #66b1ff;
    }
  }
  &.c-text_success {
    &:hover {
      color: #85ce61;
    }
  }
  &.c-text_warning {
    &:hover {
      color: #ebb563;
    }
  }
  &.c-text_danger {
    &:hover {
      color: #f78989;
    }
  }
}
</style>
