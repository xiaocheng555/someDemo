<template>
  <component
    class="c-col"
    :class="[
       span ? `c-col-${span}` : '',
       xs ? `c-col-xs-${xs}` : '',
       sm ? `c-col-sm-${sm}` : '',
       md ? `c-col-md-${md}` : '',
       lg ? `c-col-lg-${lg}` : '',
       xl ? `c-col-xl-${xl}` : '',
       offset ? `c-col-offset-${offset}` : '',
       push ? `c-col-push-${push}` : '',
       pull ? `c-col-pull-${pull}` : ''
    ]"
    :style="{
      paddingLeft: gutter ? `${gutter / 2}px` : '',
      paddingRight: gutter ? `${gutter / 2}px` : '',
    }"
    :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number | Object
    },
    sm: {
      type: Number | Object
    },
    md: {
      type: Number | Object
    },
    lg: {
      type: Number | Object
    },
    xl: {
      type: Number | Object
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  inject: {
    gutter: 'rowGutter'
  }
}
</script>

<style lang='less'>
// 1-24栅格化样式
.col-size (@prefix, @prop: width) {
  .@{prefix}-1 {
    @{prop}: 4.166667%;
  }
  .@{prefix}-2 {
    @{prop}: 8.33333%;
  }
  .@{prefix}-3 {
    @{prop}: 12.5%;
  }
  .@{prefix}-4 {
    @{prop}: 16.66667%;
  }
  .@{prefix}-5 {
    @{prop}: 20.83333%;
  }
  .@{prefix}-6 {
    @{prop}: 25%;
  }
  .@{prefix}-7 {
    @{prop}: 29.16667%;
  }
  .@{prefix}-8 {
    @{prop}: 33.33333%;
  }
  .@{prefix}-9 {
    @{prop}: 37.5%;
  }
  .@{prefix}-10 {
    @{prop}: 41.66667%;
  }
  .@{prefix}-11 {
    @{prop}: 45.83333%;
  }
  .@{prefix}-12 {
    @{prop}: 50%;
  }
  .@{prefix}-13 {
    @{prop}: 54.16667%;
  }
  .@{prefix}-14 {
    @{prop}: 58.33333%;
  }
  .@{prefix}-15 {
    @{prop}: 62.5%;
  }
  .@{prefix}-16 {
    @{prop}: 66.66667%;
  }
  .@{prefix}-17 {
    @{prop}: 70.83333%;
  }
  .@{prefix}-18 {
    @{prop}: 75%;
  }
  .@{prefix}-19 {
    @{prop}: 79.16667%;
  }
  .@{prefix}-20 {
    @{prop}: 83.33333%;
  }
  .@{prefix}-21 {
    @{prop}: 87.5%;
  }
  .@{prefix}-22 {
    @{prop}: 91.66667%;
  }
  .@{prefix}-23 {
    @{prop}: 95.83333%;
  }
  .@{prefix}-24 {
    @{prop}: 100%;
  }
}

.c-col {
  box-sizing: border-box;
  float: left;
}
[class*=c-col-pull-] {
  position: relative;
}
[class*=c-col-push-] {
  position: relative;
}
.col-size(c-col, width);
.col-size(c-col-offset, margin-left);
.col-size(c-col-pull, right);
.col-size(c-col-push, left);

// xs屏幕：1-24栅格化样式
@media only screen and (max-width: 767px) {
  .col-size(c-col-xs);
}
// sm屏幕：1-24栅格化样式
@media only screen and (min-width: 768px) {
  .col-size(c-col-sm);
}
// md屏幕：1-24栅格化样式
@media only screen and (min-width: 992px) {
  .col-size(c-col-md);
}
// lg屏幕：1-24栅格化样式
@media only screen and (min-width: 1200px) {
  .col-size(c-col-lg);
}
// xl屏幕：1-24栅格化样式
@media only screen and (min-width: 1920px) {
  .col-size(c-col-xl);
}
</style>
