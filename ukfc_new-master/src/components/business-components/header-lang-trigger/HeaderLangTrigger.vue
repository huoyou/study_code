<template>
  <el-dropdown placement="bottom-start">
    <div>
      <img :src="get_lang.img" v-if="get_lang.img" class="nationality-img" alt="">
      <div class="nationality-img-box" v-else></div>
      <i class="triangle triangle-bottom"></i>
    </div>
    <el-dropdown-menu class="header-menu-dropdown language-toggle-dropdown" slot="dropdown">
      <el-dropdown-item
          v-for="item in get_langs"
          :key="item.id">
        <a href="javascript: void(0);"
           class="header-menu-dropdown-link"
           :class="{active: get_lang.code === item.code}"
           @click="toggleLang(item)">
          {{item.name}}
        </a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {updateVeeLang} from "../../../common/lang/vee-i18n";
  import {commonApi} from "../../../common/api/commonApi";

  export default {
    name: "HeaderLangTrigger",
    computed: {
      ...mapGetters(['get_langs', 'get_lang'])
    },
    methods: {
      ...mapMutations(['set_lang']),
      toggleLang(langItem){
        console.log('设置语言', langItem)
        this.set_lang(langItem);
        updateVeeLang(langItem.code);
        this.$i18n.locale = langItem.code.replace("_","-");
        commonApi.toggleLang(langItem.code);
      }
    }
  }
</script>
