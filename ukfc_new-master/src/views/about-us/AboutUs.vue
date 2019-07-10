<template>
  <section class="about-us-page">
    <!--顶部banner start-->
    <div class="top-banner">
      <img src="../../assets/images/about-us/banner.png" alt="">
      <div class="top-banner-container">
        <div class="banner-text-wrap">
          <h2 class="banner-text1">UKF Group</h2>
          <h2 class="banner-text2">
            <!--数字货币期货交易托管系统-->
            {{$t('aboutUsPage.bannerText2')}}
          </h2>
          <p class="supervise">
            <!--FCA最强监管 遵守反洗钱/反恐融资法-->
            {{$t('aboutUsPage.supervise')}}
          </p>
        </div>
      </div>
    </div>
    <!--顶部banner end-->

    <!--关于我们介绍 start-->
    <div class="about-us-introduce">
      <div class="container about-us-introduce-container">
        <div class="introduce-block ukf-group-introduce-block clearfix">
          <div class="introduce-block-left">
            <img src="../../assets/images/about-us/ukf-group.png" alt="">
          </div>
          <div class="introduce-block-right">
            <div class="introduce-caption">UKF Group</div>
            <div class="introduce-content color-999" v-html="$t('aboutUsPage.ukfGroup')">
              <!--<p>
                UKF GROUP数字货币期货交易托管系统是由 Richard Holloway 先生联合Coin Shares公司创建的一家综合数字货币复利理财、
                互联网及数字货币期货交易的交易托管平台。
              </p>
              <br>
              <p>
                UKF GROUP公司总部设立在英国伦敦城，注册资本总额达5000万英镑，在全球拥有超过10家运营中心和分部，并在全球范围内吸纳了近千名专业交易员
                和超百位拥有投行背景的高级分析师。在加密数字资产高速增涨的近几年，UKF GROUP在世界顶级金融监管机构英国FAC的严格监管下为来自欧洲、
                北美洲的客户实现了高回报的加密货币理财服务，借助其在传统外汇市场丰富的实操经验以及严谨的分析技术，精准把握了BTC和ETH以及多个主
                流加密货币发展趋势，为全球客户捕获了丰厚的回报和收益，并在业内拥有加密货币市场“狙击手”的美誉。
              </p>-->
            </div>
          </div>
        </div>
        <div class="introduce-block coin-shares-introduce-block clearfix">
          <div class="introduce-block-left">
            <div class="text-right color-999">
              <div class="introduce-caption pt-15">CoinShares</div>
              <div v-html="$t('aboutUsPage.coinShares')">
               <!-- <p>CoinShares代表世界上第一个：</p>
                <p>受管制的比特币对冲基金（GABI），比特币交易所交易票据（COINXBT和COINXBE），</p>
                <p>以太坊交易所交易票据（COINETH和COINETHE）以及以太币计价的基金（CS Fund 1）。</p>
                <p>
                  作为一家拥有超过10亿美元资产管理规模的高增长加密金融公司，CoinShares在区块链和加密货币领域开发金融解决方案方面处于领先地位。
                </p>-->
              </div>
            </div>
          </div>
          <div class="introduce-block-right">
            <div class="introduce-content">
              <img src="../../assets/images/about-us/coin-shares.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--关于我们介绍 end-->

    <!--使命 start-->
    <div class="mission-block">
      <div class="mission-container">
        <h6 class="mission-text"><!--使命-->{{$t('aboutUsPage.mission')}}</h6>
        <div class="mission-content" v-html="$t('aboutUsPage.missionContent')">
          <!--<p>UKF GROUP致力于通过专业的技术团队为全球投资客户提供</p>
          <p>更便捷、成本更低的资产管理服务，显著提升交易运行效率，驱动更高的资产收益。</p>-->
        </div>
      </div>
    </div>
    <!--使命 end-->

    <!--价值观 start-->
    <div class="value-concept">
      <div class="container value-concept-container">
        <div class="clearfix value-concept-values">
          <ol class="fl" v-html="$t('aboutUsPage.valueConceptValue1')">
            <!--<li>1.用户第一</li>
            <li>2.勤勉敬业</li>
            <li>3.使命必达</li>-->
          </ol>
          <img src="../../assets/images/about-us/circle.png" class="circle-img" alt="">
          <ol class="fr" v-html="$t('aboutUsPage.valueConceptValue2')">
            <!--<li>4.积极乐观</li>
            <li>5.向前一步</li>
            <li>6.退后一步</li>-->
          </ol>
        </div>
        <div class="text-center color-333">
          <p class="value-concept-text-en">UKF GROUP</p>
          <p class="value-concept-text"><!--价值观-->{{$t('aboutUsPage.valueConceptText')}}</p>
        </div>
        <p class="value-concept-explain">
          {{$t('aboutUsPage.valueConceptExplain')}}
          <!--我们以满足用户需求为首要任务。我们精益求精，激情，高效，全力做好每一件事情，做到极致。我们认为保持积极快乐的心态，勇于探索，
          包容互助才能够高产出地工作，获得长期更高的回报。在UKF GROUP，我们每天都在创造独一无二的价值。-->
        </p>
      </div>
    </div>
    <!--价值观 end-->
  </section>
</template>

<script>
  export default {
    name: "AboutUs"
  }
</script>

<style lang="scss" scoped>
@import "about-us.scoped";
</style>
