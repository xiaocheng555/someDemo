
<template>
  <div>
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src2" width="100" @click="show(index)">
    <div >
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    }
  },
  data () {
    return {
      list: [
        {
          src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg'
        },
        {
          src: 'https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg'
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg'
        },
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg'
        },
        {
          src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg'
        },
        {
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        },
        {
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        },
        {
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
        },
        {
          src:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/169beda20a9f431293151cff12314b65~tplv-k3u1fbpfcp-watermark.awebp?'
        },
        {
          src: 'https://oss-cn-uat.midea.com:17443/userDownload/D4BE612D71A34354AC652BF6B5E82CA6/oss-uat/UOM/image/2f6f4695-347d-46f2-80c5-b764cf00c5a1.png'
        },
        {
          src: 'https://oss-cn-uat.midea.com:17443/userDownload/D4BE612D71A34354AC652BF6B5E82CA6/oss-uat/UOM/image/2f6f4695-347d-46f2-80c5-b764cf00c5a1.png'
        },
        {
          src: 'https://oss-cn-uat.midea.com:17443/userDownload/D4BE612D71A34354AC652BF6B5E82CA6/oss-uat/UOM/image/2f6f4695-347d-46f2-80c5-b764cf00c5a1.png'
        },
        {
          src: 'https://oss-cn-uat.midea.com:17443/userDownload/D4BE612D71A34354AC652BF6B5E82CA6/oss-uat/UOM/image/2f6f4695-347d-46f2-80c5-b764cf00c5a1.png'
        },
        {
          src: 'https://oss-cn-uat.midea.com:17443/userDownload/D4BE612D71A34354AC652BF6B5E82CA6/oss-uat/UOM/image/2f6f4695-347d-46f2-80c5-b764cf00c5a1.png'
        }
      ],
      options: {
        thumbBoundsEl: '.previewer-demo-img'
        // getThumbBoundsFn (index) {
        //   let pageYScroll = window.pageYOffset || document.documentElement.scrollTop

        //   return {x: 20, w: window.innerWidth - 20, y: pageYScroll + window.innerHeight / 4}
        //   // return {x: 10, y: 1135, w: 200}
        //   // find thumbnail element
        //   let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
        //   // get window scroll Y
        //   let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        //   // optionally get horizontal scroll
        //   // get position of element relative to viewport
        //   let rect = thumbnail.getBoundingClientRect()
        //   // w = width
        //   console.log({x: rect.left, y: rect.top + pageYScroll, w: rect.width}, '==')
        //   return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        //   // Good guide on how to get element coordinates:
        //   // http://javascript.info/tutorial/coordinates
        // }
      }
    }
  },
  created () {
    window._list = this.list
  }
}
</script>

<style>
.previewer-demo-img {
  margin: 0 auto;
  display: block;
  width: 200px;
  height: 200px;
  background: red;
}
</style>
