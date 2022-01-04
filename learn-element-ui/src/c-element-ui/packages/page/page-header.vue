<template>
  <div
    class="page-header"
    :class="[ divide ? 'has-divide' : '', !!gutter ? 'has-gutter' : '' ]"
    :style="{
      marginBottom: gutter
    }">
    <div class="page-header-inner">
      <img v-if="icon" class="page-header-icon" :src="icon" />
      <div class="page-header-content">
        <div class="page-header-subtitle">
          <slot name="subtitle"></slot>
        </div>
        <slot name="title">
          <component :is="titleTag" class="page-header-title">{{title}}</component>
        </slot>
      </div>
      <div class="page-header-action">
        <slot name="action"></slot>
      </div>
    </div>
    <div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    titleTag: {
      type: String,
      default: 'h2'
    },
    gutter: {
      type: String | Boolean,
      default: ''
    },
    divide: {
      type: Boolean,
      default: false
    }
  },
  inject: ['Page'],
  watch: {
    gutter: {
      immediate: true,
      handler (val) {
        this.Page.hasHeaderGutter = !!val
      }
    }
  }
}
</script>

<style lang='less' scoped>
.page-header {
  position: relative;
  background: #ffffff;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  &.has-divide {
    border-bottom: 1px solid #dddddd;
  }
  &.has-gutter {
    margin-bottom: 10px;
    border-radius: 4px;
  }
}
.page-header-inner {
  display: flex;
  align-items: center;
  padding: 20px;
}
.page-header-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.page-header-content {
  flex: 1;
}
.page-header-title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #011829;
}
.page-header-subtitle {
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #919ca3;
}
.page-header-action {

}
</style>
