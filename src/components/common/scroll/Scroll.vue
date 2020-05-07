<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'

BScroll.use(PullUp)

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      console.log(this.scroll)

      if(this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', (position) => {
            // console.log(position);
            this.$emit('scroll', position)
          })
      }

      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载')
          this.$emit('pullup')

          // setTimeout(() => {
            // this.scroll.finishPullUp()
          // }, 2000);
        })
      }
    },
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>