<template>
    <div class="default-layout-com">
        <!--动态切换header-->
        <v-header
                ref="header_com"
                :pageIndex="headerIndex"
                :title="$route.meta.title"
                :isBack="$route.meta.isBack"
                v-if="$route.meta.commonHeader"
                :isPc="$route.meta.isPc"
        ></v-header>
        <section ref="layout_main" class="default-layout-main">
            <router-view></router-view>
        </section>
        <copy-rights ref="footer_com" :showFooter="$route.meta.showFooter"></copy-rights>
    </div>
</template>
<script>
    // @ is an alias to /src
    import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
    import { tool } from "../../common/js/tool";
    import vHeader from "_c/business-components/header/Header";
    import CopyRights from "_c/business-components/copy-rights/CopyRights";
    export default {
        name: "DefaultLayout",
        provide() {
            return {
                showMobileNav: this.showMobileNav
            };
        },
        components: {
            vHeader,
            CopyRights
        },
        data() {
            return {
            };
        },
        created() {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                this.isPc = false;
            } else {
                this.isPc = true;
            }
            this.set_isPc(this.isPc);
        },
        methods: {
            ...mapMutations(["set_lang", "set_langs", "set_isPc"]),
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
                        if(this.isPc) {
                            res = wh - headerH - footerH;
                        }else {
                            res = wh  - footerH;
                        }
                        let originMinH = parseFloat($refs.layout_main.style.minHeight);
                        if(!originMinH || res !== originMinH){
                            $refs.layout_main.style.minHeight = res + 'px';
                        }
                    }
                });
            }
        },
        computed: {
            ...mapState({
                headerIndex: "headerIndex"
            })
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
        /*background: url('~@/assets/images/index4_bg.png') 0 0 no-repeat;*/
        background-size: cover;
        min-height: 100%;
        position: relative;

    }
    @media (max-width: $sm) {
        .default-layout-com {
            /*background: url('~@/assets/images/default_bg.png') 0 0 no-repeat;*/
            background-size: cover;
            .default-layout-main {
                padding-top: 50px;
            }
        }
    }
</style>

