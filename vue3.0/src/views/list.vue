<template>
    <div>
        <p>title</p>
        <better-scroll class="wrapper"
                       :data="data"
                       :pulldown="pulldown"
                       :pullup="pullup"
                       @downLoadData="loadData"
                       @upLoadData="loadData1">
            <ul class="content">
                <li v-for="item in data">{{item}}</li>
            </ul>
            <div class="loading-wrapper"></div>
        </better-scroll>
    </div>

</template>
<script>
    import BScroll from 'better-scroll'
    import betterScroll from '_c/common/betterScroll'
    export default {
        components: {
            betterScroll
        },
        data() {
            return {
                data: [],
                pulldown: true,
                pullup: true,
            }
        },
        created() {
            for (var i = 0; i < 20; i++) {
                this.data.push(`我是第${i}个`)
            }
        },
        methods: {
            loadData() {
                console.log('down')

                // requestData().then((res) => {
                //   this.data = res.data.concat(this.data)
                // })
            },
            loadData1() {
                console.log('up')
            }

        }
    }
</script>
<style lang="less">
    .wrapper {
      height: 500px;
      .content {
        li {
          height: 30px;
          line-height: 50px;
          background-color: #eee;
        }
      }
    }
</style>
