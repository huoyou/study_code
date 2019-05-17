<template>
  <div ref="dom" class="charts chart-bar"></div>
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
    legend: Array
  },
  data () {
    return {
      dom: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      let seriesData = this.value
      let legend = this.legend
      let option = {
        legend: {
          data: legend,
          left: 50
        },
        radar: [
          {
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          },
          {
            indicator: [
              { text: '资质', max: 100 },
              { text: '增长', max: 100 },
              { text: '经营', max: 100 },
              { text: '资产', max: 100 },
              { text: '信用', max: 100 },
              { text: '行业', max: 100 }
            ],
            center: ['50%', '50%'],
            radius: 120
          }
        ],
        series: [{
          name: '企业评分分析图',
          type: 'radar',
          radarIndex: 1,
          data: seriesData
        }]
      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
    })
  }
}
</script>

<style lang="less">
.charts{
  //
}
</style>
