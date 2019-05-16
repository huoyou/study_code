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
    legend: Array,
    xdata: Array
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
      let xdata = this.xdata
      let option = {
        legend: {
          data: legend
        },
        xAxis: {
          type: 'category',
          data: xdata
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
      /* this.lineImg = this.dom.getDataURL() */
    })
  }
}
</script>

<style lang="less">
.charts{
  //
}
</style>
