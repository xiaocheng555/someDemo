<template>
  <component
    class="c-row"
    :class="[
      justify !== 'start' ? `is-justify-${justify}` : '',
      align !== 'top' ? `is-align-${align}` : '',
      {
        'c-row_flex': type === 'flex'
      }
    ]"
    :style="{
      marginLeft: gutter ? `-${gutter / 2}px` : '',
      marginRight: gutter ? `-${gutter / 2}px` : '',
    }"
    :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  provide () {
    return {
      rowGutter: this.gutter
    }
  }
}
</script>

<style lang='less'>
.c-row {
  box-sizing: border-box;
  flex-wrap: wrap;

  &:after {
    content: ' ';
    clear: both;
  }
}
.c-row_flex {
  display: flex;

  &:after {
    content: none;
  }
  // justify布局
  &.is-justify-start {
    justify-content: start;
  }
  &.is-justify-end {
    justify-content: end;
  }
  &.is-justify-center {
    justify-content: center;
  }
  &.is-justify-space-around {
    justify-content: space-around;
  }
  &.is-justify-space-between {
    justify-content: space-between;
  }
  // align布局
  &.is-align-top {
    align-items: start;
  }
  &.is-align-middle {
    align-items: center;
  }
  &.is-align-bottom {
    align-items: end;
  }
}
</style>
