<template>
  <div class="c-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBreadcrumb',
  props: {
    separator: {
      type: String,
      defualt: '/'
    },
    separatorClass: {
      type: String
    }
  },
  provide () {
    return {
      breadcrumb: {
        separator: this.separator,
        separatorClass: this.separatorClass
      }
    }
  },
  data () {
    return {
    }
  },
  created () {}
}
</script>

<style lang='less'>
.c-breadcrumb {

}
</style>
