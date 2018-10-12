<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这件衣服值{{price}}</h2>
    <h1>hello,我是 {{name}} ,我今年 {{age}} 岁</h1>
    <h1>hello,我是 {{name1}} ,我今年 {{age1}} 岁</h1>
    <h1>{{other}}</h1>
    <button @click="setName('uzi')">mutation改变姓名</button>
    <button @click="setName1">state改变姓名</button>
    <button @click="setAge(20)">mutation改变年龄</button>
    <button @click="nameAsyn('iboy')">actions改变姓名</button>
    <button @click="ageAsyn(30)">actions改变年龄</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapState(['name','age']),
    ...mapGetters(["name1", "age1","other","price"])
  },
  methods: {
    ...mapMutations({
      setName: "SET_NAME",
      setAge: "SET_AGE"
    }),
    ...mapActions(['nameAsyn','ageAsyn']),
    setName1() {
      this.$store.state.name = "xiaogou";
      this.$store.state.age++;
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
