<template>
  <div class="box">
    <el-button ref="trigger2">trigger2</el-button>
    <p ref="tooltip2">1卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤21卡上打开肌肤2</p>


    <el-button ref="trigger">trigger</el-button>
    <p ref="tooltip">1卡上打开肌肤</p>


  </div>
</template>

<script>
import { createPopper } from '@/libs/popper'

export default {
  name: 'Poper',
  components: {},
  data () {
    return {
    }
  },
  created () {
    this.$nextTick(() => {
      // console.log()
      // const triggerEl = this.$refs.trigger.$el
      // const tooltip = this.$refs.tooltip
      // console.log(triggerEl, tooltip, 'triggerEl, tooltip')
      // const poper = createPopper(triggerEl, tooltip, {
      //   placement: 'left'
      // })

      const trigger2El = this.$refs.trigger2.$el
      const tooltip2 = this.$refs.tooltip2
      const poper2 = window.Popper.createPopper(trigger2El, tooltip2, {
        placement: 'right',
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              altBoundary: true,
              tether: false,
            },
          }
        ]
      })
      console.log(poper, 'poper')
    })
  }
}
</script>

<style lang='less' scoped>

.box {
  height: 200px;
  border: 1px solid red;
  padding: 100px;
  margin: 100px;
}
</style>
