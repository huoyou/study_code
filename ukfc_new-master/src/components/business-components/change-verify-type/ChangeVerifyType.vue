<template>
  <span
      class="toggle-verify-type"
      :class="{disabled: canNotToggle || supportTypes.length === 1}"
      :title="supportTypes.length === 1 ? $t('changeVerifyTypeCom.justBindOne') : ''"
      @click="toggleTypeBtnClick">
    <!--切换验证方式-->{{$t('changeVerifyTypeCom.toggle')}}
    <small>({{currentTypeText}})</small>
  </span>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {tool} from "../../../common/js/tool";

  export default {
    name: "ChangeVerifyType",
    props: {
      value: { // 可用值有 mobile、gaCode、email
        type: String,
        default: ''
      }
    },
    data(){
      return {
        verifyType: this.value,
        canNotToggle: false,
        types: {
          email: false,
          mobile: false,
          gaCode: false
        }
      }
    },
    computed: {
      ...mapGetters(['get_userInfo']),
      // 获取支持的类型
      supportTypes(){
        let arr = [];
        let userInfo = this.get_userInfo;
        if(userInfo.mobile){
          arr.push('mobile');
        }
        if(userInfo.gaStatus === 1){
          arr.push('gaCode');
        }
        if(userInfo.emailStatus === 1){
          arr.push('email');
        }
        return arr;
      },
      // 当前验证方式对应的文字
      currentTypeText(){
        if(this.canNotToggle){
          return this.$t('changeVerifyTypeCom.canNotToggle')
        }else{
          return this.$t("selectOption.verifyTypeText")[this.verifyType];
        }
      }
    },
    watch: {
      get_userInfo: {
        immediate: true,
        handler(newVal){
          let gaStatus = newVal.gaStatus;
          let emailStatus = newVal.emailStatus;
          let mobile = newVal.mobile;
          let types = this.types;
          if(gaStatus === 0 && emailStatus === 0 && !mobile){
            this.canNotToggle = true;
            return;
          }
          if(gaStatus === 1){
            types.gaCode = true;
          }
          if(emailStatus === 1){
            types.email = true;
          }
          if(mobile){
            types.mobile = true;
          }
          // 设置默认值
          if(!this.verifyType){
            if(types.mobile){
              this.verifyType = 'mobile';
              this.$emit('input', 'mobile');
            }else if(types.gaCode){
              this.verifyType = 'gaCode';
              this.$emit('input', 'gaCode');
            }else if(types.email){
              this.verifyType = 'email';
              this.$emit('input', 'email');
            }
          }else{
            // 如果传递的类型不在支持的类型内，则默认使用支持的类型的第一个值
            if(!this.typeInSupportTypes(this.verifyType)){
              this.verifyType = this.supportTypes[0];
              this.$emit('input', this.supportTypes[0]);
            }
          }
        }
      },
      value(newVal){
        if(newVal && newVal !== this.verifyType){
          this.verifyType = newVal;
        }
      }
    },
    methods: {
      // 切换类型
      toggleType(type){
        if(this.canNotToggle){
          console.error('没有支持的可切换类型！');
          return;
        }
        let supportTypes = this.supportTypes;
        if(typeof type === 'undefined'){
          type = this.verifyType;
          let index = tool.getIndex(supportTypes, item => {
            return item === type;
          });
          if(index === -1 || index === supportTypes.length - 1){
            index = 0;
          }else{
            index = index + 1;
          }
          let val = supportTypes[index];
          this.verifyType = val;
          this.$emit('input', val);
        }else{
          if(typeof type !== 'string'){
            return;
          }
          // 如果传递了type值，则判断传递的type值是否在支持的类型队列中，如果不在支持的队列中，则使用支持的队列的第一项
          let index = tool.getIndex(supportTypes, item => {
            return item === type;
          });
          let val;
          if(index === -1){
            val = supportTypes[0];
            this.verifyType = val;
            this.$emit('input', val);
          }else{
            val = type;
            this.verifyType = val;
          }
        }
      },
      /**
       * 判断指定类型是否在支持的类型中
       * @param type
       * @returns {boolean}
       */
      typeInSupportTypes(type){
        let supportTypes = this.supportTypes;
        for (let i = 0, len = supportTypes.length; i < len; i++) {
          if(supportTypes[i] === type){
            return true;
          }
        }
        return false;
      },
      toggleTypeBtnClick(){
        this.toggleType();
      }
    }
  }
</script>
