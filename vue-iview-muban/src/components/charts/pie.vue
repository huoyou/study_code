<template>
  <div ref="dom" class="charts chart-pie" :style="{width: fw,height: fh}"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "ChartPie",
  props: {
    value: Array,
    text: String,
    fw: { type: String, default: "100%" },
    fh: { type: String, default: "100%" },
    subtext: String
  },
  watch: {
    value() {
      this.$nextTick(() => {
        if (this.value) {
          let dom = echarts.init(this.$refs.dom);
          dom.clear();
          this.init();
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      let legend = this.value.map(_ => _.name);
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: legend
        },
        series: [
          {
            type: "pie",
            name: '动态变化',
            radius: "55%",
            center: ["50%", "60%"],
            data: this.value,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#C33531",
                    "#EFE42A",
                    "#64BD3D",
                    "#EE9201",
                    "#29AAE3",
                    "#B74AE5",
                    "#0AAF9F",
                    "#E89589",
                    "#16A085",
                    "#4A235A",
                    "#C39BD3 ",
                    "#F9E79F",
                    "#BA4A00",
                    "#ECF0F1",
                    "#616A6B",
                    "#EAF2F8",
                    "#4A235A",
                    "#3498DB"
                  ];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      let dom = echarts.init(this.$refs.dom, "tdTheme");
      dom.setOption(option,true);
    }
  }
};
</script>

<style lang="less">
.charts {
  //
}
</style>
