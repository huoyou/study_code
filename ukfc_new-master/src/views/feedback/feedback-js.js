import { supportApi } from "../../common/api/supportApi";
import { tool } from "../../common/js/tool";
import { Roll } from "../../common/js/roll";
import { mapGetters } from "vuex";

export default {
  name: "Feedback",
  data() {
    return {
      form: {
        categoryId: "",
        contact: "",
        content: "",
        realName: ""
      },
      pageData: {
        current: 1,
        size: 10,
        total: 0,
        pages: 0
      },
      suggestTypes: [], // 反馈类型
      mySuggets: [],
      committing: false,
      loadingMySuggets: true,
      roll: null
    };
  },
  computed: {
    ...mapGetters(["get_userInfo"])
  },
  methods: {
    // 获取反馈类型
    getSuggestType() {
      supportApi.getSuggestType().then(({ data }) => {
        this.suggestTypes = data;
      });
    },
    // 确定提交反馈数据
    async confirmSubmitSuggest() {
      let valid = await this.$validator.validate();
      if (!valid || this.committing) {
        return;
      }
      this.committing = true;
      supportApi
        .suggest(this.form)
        .then(res => {
          this.committing = false;
          if (res.errcode === 0) {
            this.$notify({
              title: this.$t('common.warmPrompt'), // 温馨提示
              message: this.$t('feedbackPage.feedbackDataCommitSuccessTip'), // 您的反馈已成功提交，请静待回复！
              type: "success"
            });
            tool.clearData(this.form);
            this.getUserSuggests();
          }
        })
        .catch(() => {
          this.committing = false;
        });
    },
    // 获取用户反馈记录
    getUserSuggests() {
      let pageData = this.pageData;
      supportApi
        .getUserSuggests({
          current: pageData.current,
          size: pageData.size
        })
        .then(({ data }) => {
          console.log("data", data);
          this.mySuggets = data.records;
          pageData.pages = data.pages;
          pageData.total = data.total;
          this.loadingMySuggets = false;
        })
        .catch(() => {
          this.loadingMySuggets = false;
        });
    },
    onCurrentPageChange() {
      this.getUserSuggests();
    }
  },
  created() {
    this.getSuggestType();
    this.getUserSuggests();
  },
  mounted() {
    let roll = new Roll({
      offsetTop: 10
    });
    let that = this;
    roll.push(this.$refs.message_list, function(context, done) {
      that.getUserSuggests();
      done(this, context);
    });
    this.roll = roll;
  },
  beforeDestroy() {
    this.roll.destroy();
  }
};
