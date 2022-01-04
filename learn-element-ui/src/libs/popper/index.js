function getScrollParent (el) {
  if (!(el instanceof Object && el.nodeType === 1)) {
    throw new Error(`parameter 1 is not of type 'Element'`)
  }
  if (['body', 'html', '#document'].includes(el.nodeName.toLowerCase())) {
    return document.body
  }

  const parent = el.parentNode
  if (!parent) {
    return el
  }
  const overflow = window.getComputedStyle(parent).overflowX
  if (overflow === 'auto' || overflow === 'scroll') {
    return parent
  }
  return getScrollParent(parent)
}

function getRect (el) {
  return el.getBoundingClientRect()
}

function isElement (el) {
  return el instanceof Object && el.nodeType === 1
}

export class Popper {
  constructor(triggerEl, tooltipEl, options) {
    this.space = options.space || 5
    this.triggerEl = triggerEl
    this.tooltipEl = tooltipEl
    this.style = {
      position: 'absolute',
      top: null,
      left: null,
      transform: null,
      background: '#000',
      opacity: '.8',
      color: '#642f45',
      padding: '5px',
    }
    this.scroller = getScrollParent(triggerEl)
    this.placement = this.getPlacement(options)

    this.updateStyle()
    this.updatePostion()
    this.registerEvent()
  }

  getPlacement (options) {
    const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    return placements[options.placement] || 'bottom'
  }

  updatePostion () {
    const scrollRect = getRect(this.scroller)
    const triggerRect = getRect(this.triggerEl)
    const tooltipRect = getRect(this.tooltipEl)
    this.style.left = triggerRect.left - scrollRect.left + 'px' // + this.getPlacementX(triggerRect, tooltipRect) + 'px'
    this.style.top = triggerRect.top - scrollRect.top + 'px' // + this.getPlacementY(triggerRect, tooltipRect) + 'px'
    console.log(this.style, triggerRect, scrollRect, 'top==')
    this.updateStyle()
  }

  updateStyle () {
    for (const key in this.style) {
      this.tooltipEl.style[key] = this.style[key]
    }
  }

  getPlacementX (triggerRect, tooltipRect) {
    switch (this.placement) {
      case 'left':
      case 'left-start':
      case 'left-end':
        return -tooltipRect.width - this.space
      case 'right':
      case 'right-start':
      case 'right-end':
        return triggerRect.width + this.space
      case 'top-end':
      case 'bottom-end':
        return triggerRect.left - (tooltipRect.width - triggerRect.width)
      case 'top-start':
      case 'bottom-start':
        return 0
      case 'top':
      case 'bottom':
        return 1 / 2 * triggerRect.width
    }
  }

  getPlacementY (triggerRect, tooltipRect) {
    switch (this.placement) {
      case 'top':
      case 'top-start':
      case 'top-end':
        return -tooltipRect.height - this.space
      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        return triggerRect.height + this.space
      case 'left-start':
      case 'right-start':
        return 0
      case 'left-end':
      case 'right-end':
        return triggerRect.height - tooltipRect.height
    }
  }

  registerEvent () {
    if (this.scroller.tagName !== 'BODY') {
      this.scroller.addEventListener('scroll', this.scrollFn)
    }
  }

  scrollFn () {
    this.updatePostion()
  }

  update() {
    this.updatePostion()
  }

  destroy () {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.scrollFn)
    }
  }

}

export function createPopper (triggerEl, tooltipEl, options = {}) {
  if (!isElement(triggerEl)) {
    throw new Error(`popper Error: parameter 1 is not of type 'Element'`)
  }
  if (!isElement(tooltipEl)) {
    throw new Error(`popper Error: parameter 2 is not of type 'Element'`)
  }
  if (typeof options !== 'object') {
    options = {}
  }
  return new Popper(triggerEl, tooltipEl, options)
}
