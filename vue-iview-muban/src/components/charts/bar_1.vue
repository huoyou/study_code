<template>
  <div ref="dom" class="charts chart-bar" :style="{width: fw,height: fh}"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    value: Object,
    text: String,
    fw: { type: String, default: '100%' },
    fh: { type: String, default: '100%' },
    subtext: String
  },
  watch: {
    value () {
      this.$nextTick(() => {
        if (this.value) {
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
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}:{c} '
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: ''
          }
        },
        yAxis: {
          type: 'category',
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: 10,
          containLabel: true
        },
        series: [
          {
            data: seriesData,
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              // 通常情况下：
              normal: {
                // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList = [
                    '#C33531',
                    '#EFE42A',
                    '#64BD3D',
                    '#EE9201',
                    '#29AAE3',
                    '#B74AE5',
                    '#0AAF9F',
                    '#E89589',
                    '#16A085',
                    '#4A235A',
                    '#C39BD3 ',
                    '#F9E79F',
                    '#BA4A00',
                    '#ECF0F1',
                    '#616A6B',
                    '#EAF2F8',
                    '#4A235A',
                    '#3498DB'
                  ]
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true, // 开启显示
                  position: 'right', // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: function (params) {
                      var colorList = [
                        '#C33531',
                        '#EFE42A',
                        '#64BD3D',
                        '#EE9201',
                        '#29AAE3',
                        '#B74AE5',
                        '#0AAF9F',
                        '#E89589',
                        '#16A085',
                        '#4A235A',
                        '#C39BD3 ',
                        '#F9E79F',
                        '#BA4A00',
                        '#ECF0F1',
                        '#616A6B',
                        '#EAF2F8',
                        '#4A235A',
                        '#3498DB'
                      ]
                      return colorList[params.dataIndex]
                    },
                    fontSize: 16
                  }
                }
              },
              // 鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      let dom = echarts.init(this.$refs.dom, 'tdTheme')
      dom.setOption(option, true)
    }
  }
}
</script>

<style lang="less">
.charts {
  //
}
</style>
