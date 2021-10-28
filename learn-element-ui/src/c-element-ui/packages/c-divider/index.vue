<template>
  <div
    v-if="direction === 'vertical'"
    class="c-divider c-divider_vertical">
  </div>
  <div
    v-else
    class="c-divider"
    :class="[
    contentPosition ? `c-divider_${contentPosition}` : '',
      {
        'width-text': $slots.default
      }
    ]">
    <span class="c-divider-text">
      <slot v-if="$slots.default"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    contentPosition: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang='less' scoped>
.c-divider {
  height: 0;
  margin: 24px 0;
  border-bottom: 1px solid #dcdfe6;
  &.c-divider_vertical {
    display: inline-block;
    height: .9em;
    width: 0;
    margin: 0;
    margin: 0 8px;
    border-right: 1px solid #dcdfe6;
    border-bottom: none;
    vertical-align: middle;
  }

  &.width-text {
    display: flex;
    align-items: center;
    height: auto;
    margin-top: 16px;
    margin-bottom: 16px;
    border-bottom: none;

    &::before {
      content: ' ';
      flex: 1;
      min-width: 5%;
      border-bottom: 1px solid #dcdfe6;
    }
    &::after {
      content: ' ';
      flex: 1;
      min-width: 5%;
      border-bottom: 1px solid #dcdfe6;
    }
    &.c-divider_left {
      &::before {
        flex: none;
        width: 5%;
      }
    }
    &.c-divider_right {
      &::after {
        flex: none;
        width: 5%;
      }
    }
  }
}
.c-divider-text {
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}
</style>
