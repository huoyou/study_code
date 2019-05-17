<template>
  <div ref="dom" class="charts chart-bar" :style="{width: fw,height: fh}"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartRadar',
  props: {
    value: Array,
    text: String,
    subtext: String,
    fw: { type: String, default: '100%' },
    fh: { type: String, default: '100%' },
    xdata: Array
  },
  data () {
    return {
      dom: {}
    }
  },
  watch: {
    xdata () {
      this.$nextTick(() => {
        if (this.xdata) {
          let dom = echarts.init(this.$refs.dom)
          dom.clear()
          this.init()
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      var legend, seriesData
      if (this.value.length > 0) {
        for (let i = 0; i < this.value.length; i++) {
          this.value[i].type = 'line'
          this.value[i].symbol = 'none'
          this.value[i].smooth = 0.3
        }
        seriesData = this.value
        legend = this.value.map(el => el.name)
      } else {
        seriesData = []
        legend = []
      }
      console.log('seriesData', seriesData)
      let xdata = this.xdata
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'left'
        },
        legend: {
          data: legend
        },
        grid: {
          x: 50,
          y: 30,
          x2: 30,
          y2: 10,
          containLabel: true
        },
        calculable: true,
        xAxis: {
          type: 'category',
          data: xdata,
          axisLabel: {
            rotate: 30,
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#CECECE'
            }
          },
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            rotate: 30,
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#CECECE'
            }
          }
        },
        series: seriesData
      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option, true)
    }
  }
}
</script>

<style lang="less">
.charts {
  //
}
</style>
