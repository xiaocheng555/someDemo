<template>
  <div class="c-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCollapse',
  provide () {
    return {
      Collapse :this
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array | String
    }
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    valueToSelect () {
      const val = this.value
      let valueToSelect = []
      if (this.accordion) {
        if (val && typeof val !== 'string') {
          console.warn('accordion模式下，value值必须为string')
        } else {
          valueToSelect.push(val)
        }
      } else {
        if (val && !Array.isArray(val)) {
          console.warn('非accordion模式下，value值必须为array')
        } else if (Array.isArray(val)) {
          valueToSelect = [...val]
        }
      }
      return valueToSelect
    }
  },
  methods: {
    registerItem (Item) {
      this.items.push(Item)
      if (this.valueToSelect === Item.name
        || (Array.isArray(this.valueToSelect) && this.valueToSelect.includes(Item.name))) {
        this.$nextTick(() => {
          Item.open()
        })
      }
    },
    unregisterItem (Item) {
      this.items = this.items.filter(item => Item !== item)
    },
    emitChange (Item) {
      let currValue
      if (this.accordion) {
        currValue = Item.isOpen ? Item.name : undefined
      } else {
        currValue = this.items.filter(Item => Item.isOpen).map(Item => Item.name)
      }
      console.log('currValue', currValue)
      this.$emit('input', currValue)
      this.$emit('change', Item.name)
    },
    handleValueChange () {
      this.items.some(Item => {
        if (this.valueToSelect.includes(Item.name)) {
          Item.open()
        } else {
          Item.close()
        }
      })
    }
  },
  watch: {
    value () {
      this.handleValueChange()
    }
  }
}
</script>

<style lang='less' scoped>
</style>
