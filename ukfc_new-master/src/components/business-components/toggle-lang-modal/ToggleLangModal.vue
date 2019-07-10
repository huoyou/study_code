<template>
  <boot-modal
      v-model="modalVisible"
      :title="$t('common.toggleLang')"
      size="sm"
      @closed="onModalClosed">
    <ul class="lang-list clearfix">
      <li class="lang-item"
          :class="{active: lang.code === get_lang.code}"
          v-for="lang in get_langs"
          :key="lang.code"
          @click="langItemClick(lang)">
        <p class="lang-name">{{lang.name}}</p>
        <img :src="lang.img" class="country-img" alt="">
      </li>
    </ul>
  </boot-modal>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex";
  import {updateVeeLang} from "../../../common/lang/vee-i18n";
  import {commonApi} from "../../../common/api/commonApi";

  export default {
    name: "ToggleLangModal",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        modalVisible: this.show
      }
    },
    methods: {
      ...mapMutations(['set_lang']),
      // 语言点击事件
      langItemClick(langItem){
        if(langItem.code === this.get_lang.code){
          return;
        }
        this.set_lang(langItem);
        updateVeeLang(langItem.code);
        this.$i18n.locale = langItem.code.replace("_","-");
        commonApi.toggleLang(langItem.code);
        this.$emit('update:show', false);
      },
      // 弹窗关闭事件
      onModalClosed(){
        this.$emit('update:show', false);
      }
    },
    computed: {
      ...mapGetters(['get_langs', 'get_lang'])
    },
    watch:{
      show(newVal){
        this.modalVisible = newVal;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lang-list{
    padding: 0 15px;
  }
  .lang-item{
    float: left;
    width: 50%;
    padding: 3px 8px 0 8px;
    border: 1px solid transparent;
    border-radius: 8px;
    margin-bottom: 15px;
    text-align: center;
    cursor: pointer;
    &.active{
      border-color: #ea5902;
    }
  }
  .country-img{
    height: 60px;
  }
  .lang-name{
    font-size: 12px;
  }
</style>
