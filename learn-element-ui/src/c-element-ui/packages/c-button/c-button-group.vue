<template>
  <span class="c-button-group">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CButtonGroup'
}
</script>

<style lang='less'>
.c-button-group {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;

  &:after {
    display: table;
    content: '';
    clear: both;
  }

  &:last-child {
    margin-right: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  .c-button + .c-button {
    margin-left: 0;
  }
  & > .c-button {
    position: relative;
    float: left;
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:hover,
    &:focus,
    &:active {
      z-index: 1;
    }

    &.c-button_info,
    &.c-button_primary,
    &.c-button_warning,
    &.c-button_danger {
      &:not(:first-child):not(:last-child) {
        border-left-color: rgba(255,255,255,.5);
        border-right-color: rgba(255,255,255,.5);
      }
      &:not(:last-child) {
        margin-right: -1px;
      }
      &:first-child {
        border-right-color: rgba(255,255,255,.5);
      }
      &:last-child {
        border-left-color: rgba(255,255,255,.5);
      }
    }
  }
}
</style>
