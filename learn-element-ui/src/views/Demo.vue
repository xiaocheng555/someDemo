<template>
  <div>
    <List>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </List>
    <List2>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </List2>
  </div>
</template>

<script>
import List2 from './Dem_List'

const List = {
  render () {
    const childList = this.$slots.default || []
    const children = childList.slice(0, 3)
    let suffix = ''
    if (childList.length > 3) {
      suffix = '+' + (childList.length - 3)
    }

    return (
      <div>
        {children}
        {suffix}
      </div>
    )
  }
}

const Item = {
  render () {
    return (
      <span style="border: 1px solid red;">item</span>
    )
  }
}

export default {
  name: 'demo',
  components: {
    List,
    List2,
    Item
  },
  data () {
    return {
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
</style>
