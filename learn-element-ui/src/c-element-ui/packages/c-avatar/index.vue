<template>
  <span
    class="c-avatar"
    :class="[
      shape ? `c-avatar_${shape}` : '',
    ]"
    :style="{
      width: size  + 'px',
      height: size + 'px'
    }">
    <img
      v-if="!slotVisible"
      :src="src"
      :srcSet="srcSet"
      :alt="alt"
      :style="{
        'object-fit': fit
      }"
      @error="handleError">
    <slot v-else></slot>
  </span>
</template>

<script>
export default {
  name: 'CAvatar',
  props: {
    src: {
      type: String
    },
    srcSet: {
      type: String
    },
    size: {
      type: Number,
      default: 60
    },
    alt: {
      type: String
    },
    fit: {
      type: String,
      default: 'cover'
    },
    shape: {
      type: String,
      default: 'circle'
    }
  },
  data () {
    return {
      slotVisible: false
    }
  },
  methods: {
    handleError (e) {
      const result = this.$emit('error', e)
      this.slotVisible = result !== false
    }
  }
}
</script>

<style lang='less'>
.c-avatar {
  box-sizing: border-box;
  display: inline-block;
  width: 60px;
  height: 60px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background: #C0C4CC;

  & > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}
.c-avatar_circle {
  border-radius: 50%;
}
.c-avatar_square {
  border-radius: 4px;
}
</style>
