<template>
  <div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>

      <div class="pswp__scroll-wrap">
        <!-- 增加loading -->
        <div class="pswp__loading-box">
          <div class="pswp__preloader pswp__preloader--active" v-show="loading">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
        </div>

        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">

          <div class="pswp__top-bar">

            <div class="pswp__counter"></div>

            <div class="pswp__loading-text"></div>

            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <button class="pswp__button pswp__button--share" title="Share"></button>

            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>


          <!-- <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div> -->

          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip">
              <!-- <a href="#" class="pswp__share--facebook"></a>
    					<a href="#" class="pswp__share--twitter"></a>
    					<a href="#" class="pswp__share--pinterest"></a>
    					<a href="#" download class="pswp__share--download"></a> -->
            </div>
          </div>

          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center">
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
// 存在bug：https://github.com/dimsemenov/PhotoSwipe/issues/1075，PhotoSwipe 需要改动源码
// 2884行，增加代码： if (!item.container) { return; }
import PhotoSwipe from 'photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'

export default {
  name: 'Previewer',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    imgs () {
      return this.list.map(one => {
        if (!one.msrc) {
          one.msrc = one.src
        }
        if (typeof one.w === 'undefined') {
          one.w = 0
          one.h = 0
        }
        return one
      })
    }
  },
  watch: {
    imgs (newVal, oldVal) {
      if (!this.photoswipe) {
        return
      }
      if (newVal.length && newVal.length - oldVal.length === -1) {
        const index = this.photoswipe.getCurrentIndex()
        this.photoswipe.invalidateCurrItems()
        this.photoswipe.items.splice(index, 1)
        let goToIndex = index
        if (goToIndex > this.photoswipe.items.length - 1) {
          goToIndex = 0
        }
        this.photoswipe.goTo(goToIndex)
        this.photoswipe.updateSize(true)
        this.photoswipe.ui.update()
      } else if (!newVal.length) {
        this.close()
      }
    }
  },
  methods: {
    init (index) {
      this.doInit(index)
    },
    doInit (index) {
      const options = Object.assign({
        fullscreenEl: false, // 全屏放大按钮
        history: true, // 打开图片后添加历史记录
        tapToClose: false, // 点击则关闭
        shareEl: false, // 是否有分享按钮
        index: index, // 当前图片索引
        focus: false, // 是否聚焦
        showHideOpacity: true, // 图片关闭时带不透明度
        maxSpreadZoom: 1.2, // 手势最大放大倍数
        errorMsg: '<div class="pswp__error-msg">图片加载失败</div>' // 图片加载失败提示
      }, this.options)
      options.getThumbBoundsFn = this.setThumbBoundsFn(options)
      this.photoswipe = new PhotoSwipe(this.$el, UI, this.imgs, options)
      this.setLoading(index)

      this.photoswipe.listen('gettingData', (index, item) => {
        // 加载宽高
        if (!item.w || !item.h) {
          if (item.loadError) return
          const img = new Image()
          img.onload = () => {
            item.w = img.width
            item.h = img.height
            if (this.photoswipe) {
              this.photoswipe.invalidateCurrItems()
              this.photoswipe.updateSize(true)
            }
          }
          img.src = item[this.sizeCalcProp]
        }
      })
      this.photoswipe.init()

      this.photoswipe.listen('close', () => {
        this.$emit('on-close')
        this.photoswipe = null
      })

      this.photoswipe.listen('afterChange', (a, b) => {
        const currentIndex = this.photoswipe.getCurrentIndex()
        this.fillLongImg(true)
        this.setLoading(currentIndex)
        this.$emit('on-index-change', {
          currentIndex: currentIndex
        })
      })

      this.photoswipe.listen('initialZoomIn', () => {
        this.fillLongImg(true)
      })

      // 查看长图时，支持滚动图片而不关闭弹窗
      this.photoswipe.listen('preventDragEvent', (e, isDown, preventObj) => {
        const item = this.photoswipe.currItem
        if (item.longImg) {
          this.photoswipe.options.closeOnVerticalDrag = false
          // 往下拖懂图片释放时，且图片距离顶部超过设定范围，则手动关闭弹窗
          const rect = e.target.getBoundingClientRect()
          if (!isDown && rect.top > 40 && rect.top < 250) {
            this.photoswipe.close()
          }
        } else {
          this.photoswipe.options.closeOnVerticalDrag = true
        }
      })
    },
    // 长图片填充屏幕
    fillLongImg (triggerResize) {
      if (!this.photoswipe) return
      if (!this.longImgFilled) return

      const item = this.photoswipe.currItem
      if (item && item.w && item.h) {
        const isLongImg = item.h / item.w > 3 // 是否长图
        if (isLongImg) {
          const zoomLevel = this.photoswipe.viewportSize.x / item.w
          item.initialZoomLevel = zoomLevel
          item.initialPosition = {
            x: 0,
            y: 0
          }
          // 手动缩放使图片填充屏幕
          if (triggerResize) {
            this.photoswipe.applyZoomPan(item.initialZoomLevel, 0, 0)
          }
          item.longImg = true
        } else {
          item.longImg = false
        }
      }
    },
    // 设置loading
    setLoading (index) {
      this.loading = false
      const item = this.imgs[index]
      if (item && !item.loaded && !item.loadError) {
        const img = new Image()
        this.loading = true
        img.onload = () => {
          if (index === this.photoswipe.getCurrentIndex()) {
            this.loading = false
          }
        }
        img.onerror = () => {
          if (index === this.photoswipe.getCurrentIndex()) {
            this.loading = false
          }
        }
        img.src = item.src
      }
    },
    // 设置PhotoSwipe实例的getThumbBoundsFn回调
    setThumbBoundsFn (options) {
      if (options.getThumbBoundsFn) {
        return options.getThumbBoundsFn
      }
      if (typeof options.thumbBoundsEl === 'string') {
        return (index) => {
          let thumbnail = (document.querySelectorAll(options.thumbBoundsEl) || {})[index]
          if (thumbnail) {
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            }
          }
        }
      }
    },
    show (index) {
      this.init(index)
    },
    getCurrentIndex () {
      if (this.photoswipe) {
        return this.photoswipe.getCurrentIndex()
      }
    },
    close () {
      this.photoswipe && this.photoswipe.close()
    },
    goTo (index) {
      this.photoswipe && this.photoswipe.goTo(index)
    },
    prev () {
      this.photoswipe && this.photoswipe.prev()
    },
    next () {
      this.photoswipe && this.photoswipe.next()
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    sizeCalcProp: { // 获取图片尺寸的图片地址属性
      type: String,
      default: 'msrc'
    },
    longImgFilled: { // 填充长图
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style src="photoswipe/dist/photoswipe.css"></style>
<style src="photoswipe/dist/default-skin/default-skin.css"></style>
<style lang="less">
.pswp__loading-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 20px;
  color: #409eff;
  opacity: .85;
}
.pswp__error-msg {
  width: 100% !important;
  height: auto !important;
}
.pswp__top-bar .pswp__preloader {
  display: none;
}
</style>
