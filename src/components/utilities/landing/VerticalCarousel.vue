<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number,
      default: 5000
    },
    onSlidEnd: {
      type: Function,
      default: i => 0
    }
  },
  data () {
    return {
      childrenLength: 0,
      activeIndex: 0,
      timer: 0,
      trackStyle: {
        transform: 'translate(0px, 0px) translateZ(0px)',
        transitionDuration: 0
      },
      transitionDuration: 0,
      height: 'auto'
    }
  },
  methods: {
    setTimer () {
      if (this.time && this.childrenLength > 1) {
        this.timer = setInterval(() => {
          this.transitionTo(this.activeIndex + 1)
        }, this.time)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
    transitionTo (index, duration = 4000) {
      this.clearTimer()
      this.transitionDuration = duration
      this.slid(index, 0)
      this.setTimer()
    },
    slid (index) {
      let { childrenLength: len, computedLoop, height, transitionDuration } = this
      if (len === 0) return
      if (!computedLoop) {
        index = (index + len) % len
      }
      let translateY = -height / 8 * (index + (computedLoop ? 1 : 0))
      this.trackStyle = {
        transform: `translate(0px, ${translateY}px) translateZ(0px) translate3d(0, 0, 0)`,
        transitionDuration: transitionDuration + 'ms',
        '-webkit-backface-visibility': 'hidden'
      }
      this.activeIndex = (index + len) % len
      if (transitionDuration > 0 && computedLoop && (this.activeIndex === 0 || this.activeIndex === len - 1)) {
        setTimeout(this.correctIndex, transitionDuration)
      }
      if (transitionDuration > 0) {
        this.onSlidEnd(this.activeIndex)
      }
    },
    correctIndex () {
      this.transitionDuration = 0
      this.slid(this.activeIndex, 0)
    },
    resize () {
      this.$nextTick(() => {
        this.height = this.$el.clientHeight
        this.slid(this.activeIndex, 0)
      }, this)
    }
  },
  computed: {
    computedAuto () {
      return this.auto && this.childrenCount > 1
    },
    computedLoop () {
      return this.childrenLength > 1 ? this.loop : false
    }
  },
  watch: {
    computedAuto () {
      this.setTimer()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.resize()
      window.addEventListener('resize', this.resize)
      this.setTimer()
    })
    this.childrenLength = this.$slots.default.length
  },
  updated () {
    this.childrenLength = this.$slots.default.length
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
    this.clearTimer()
  },
  render (h) {
    let len = this.childrenLength - 1
    let itemStyle = {
      height: this.height / 4 + (typeof this.height === 'number' ? 'px' : '')
    }
    return (
      <div class="container">
        <div class="carousel-list" style={this.trackStyle}>
          {this.computedLoop
            ? <div class='carousel-item' style={itemStyle}>{this.$slots.default[len]}</div>
            : null
          }
          {this.$slots.default.map((item, index) => <div class="carousel-item" style={itemStyle}>{item}</div>)}
          {this.computedLoop
            ? <div class='carousel-item' style={itemStyle}>{this.$slots.default[0]}</div>
            : null
          }
        </div>
      </div>
    )
  }
}
</script>

<style lang="" scoped>
.container {
  width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.carousel-list {
  width: 100%;
}
.carousel-item {
  width: 100%;
  height: auto !important;
}
</style>
