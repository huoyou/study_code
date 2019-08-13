<template>
    <div class="default-layout-com">
        <!--动态切换header-->
        <v-header ref="header_com"></v-header>
        <section ref="layout_main" class="default-layout-main">
            <router-view></router-view>
        </section>
        <v-footer ref="footer_com" ></v-footer>
    </div>
</template>
<script>
    import { tool } from "../../common/js/tool";
    export default {
        name: "DefaultLayout",
        provide() {
            return {
                showMobileNav: this.showMobileNav
            };
        },
        components: {
        },
        data() {
            return {
                isPc: false,
            };
        },
        created() {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                this.isPc = false;
            } else {
                this.isPc = true;
            }
        },
        methods: {
            // 计算中心内容的最小高度
            calcLayoutMainMinHeight(){
                this.$nextTick(() => {
                    // if(this.$route.meta.calMinHeight === false){
                    //   $refs.layout_main.style.minHeight = '';
                    //   return;
                    // }
                    if(this.$refs.header_com && this.$refs.footer_com) {
                        let $refs = this.$refs;
                        let wh = window.innerHeight;
                        let headerH = $refs.header_com.$el.offsetHeight;
                        let footerH = $refs.footer_com.$el.offsetHeight;
                        let res;
                            res = wh - headerH - footerH;
                        let originMinH = parseFloat($refs.layout_main.style.minHeight);
                        if(!originMinH || res !== originMinH){
                            $refs.layout_main.style.minHeight = res + 'px';
                        }
                    }
                });
            }
        },
        computed: {
        },
        watch: {
            $route(){
                this.calcLayoutMainMinHeight();
            }
        },
        mounted() {
            this.calcLayoutMainMinHeight();
            tool.on(window, "resize", this.calcLayoutMainMinHeight);
        },
        beforeDestroy() {
            tool.off(window, "resize", this.calcLayoutMainMinHeight);
        }
    };
</script>
<style lang="scss">
    .default-layout-com {
    }
    @media (max-width: $sm) {
        .default-layout-com {
        }
    }
</style>

