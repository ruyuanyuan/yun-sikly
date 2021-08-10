<template>
  <div class="yun-vcode">
    <h3 class='yun-code-title'>示例代码</h3>
    <pre class='yun-pre'><code class='yun-code' :class="lang" v-text="code"><slot></slot></code></pre>
  </div>
</template>

<script>
export default {
  name: "yun-vcode",
  props: {
      lang:{
          type:String,
          default:'javascript'
      },
      code:{
        type:String,
        default:''
      }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$slots.default)

    //主题css，可自选
    import("highlight.js/styles/paraiso-dark.css");
    import("highlight.js/lib/index.js").then((hljs) => {
      hljs.initHighlightingOnLoad();
    });
  },
};
</script>

<style lang='scss'>
.yun-vcode{
  line-height: 24px;
 .yun-pre{
   padding:0px;
 }
 .yun-code{
   font-size:14px;
   line-height: 24px;
   padding:0;
 }
 .yun-code-title{
   margin-top:20px;
 }
}
</style>