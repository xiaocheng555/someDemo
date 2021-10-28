<template>
  <span class="c-breadcrumb-item" @click="handleClick">
    <span class="c-breadcrumb-item-inner" :class="[isLink ? 'is-link' : 'isLink']">
      <slot></slot>
    </span>
    <span class="c-breadcrumb-separator" :class="breadcrumb.separatorClass">
      {{ breadcrumb.separator }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'CBreadcrumbItem',
  props: {
    to: {
      type: Object
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    breadcrumb: 'breadcrumb'
  },
  computed: {
    isLink () {
      return !!this.to
    }
  },
  methods: {
    handleClick () {
      if (this.isLink && this.$router) {
        let prop = this.replace ? 'replace' : 'push'
        this.$router[prop](this.to)
      }
    }
  }
}
</script>

<style lang='less'>
.c-breadcrumb-item {
  display: inline-block;

  &:last-child {
    .c-breadcrumb-separator {
      display: none;
    }
  }
  .c-breadcrumb-item-inner.is-link,
  a {
    text-decoration: none;
    color: #999999;
    &:hover {
      color: #409EFF;
      transition: color .2s;
      cursor: pointer;
    }
  }
}
.c-breadcrumb-item-inner {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,.85);
}
.c-breadcrumb-separator {
  display: inline-block;
  margin: 0 9px;
  font-size: 14px;
  font-weight: 700;
  color: #C0C4CC;

  &[class*=" el-icon-"] {
    margin: 0 6px;
    font-weight: 400;
    vertical-align: baseline;
  }
}
</style>
