<template>
    <div class='yun-page'>
        <div class='yun-page-title'>Yun Silky</div>
        <div class='yun-page-doc'>Yun-Silky 增强前端特殊动态效果的UI组件库</div>
        <h3 class='yun-model-title'>安装方式</h3>
        <yun-code lang="javascript" :code="code1"></yun-code>
        <h3 class='yun-model-title'>引入方式</h3>
        <h4 class='yun-model-sbtitle'>全局引入</h4>
        <yun-code lang="javascript" :code="code2"></yun-code>
        <h4 class='yun-model-sbtitle'>局部引入</h4>
        <yun-code lang="javascript" :code="code3"></yun-code>
    </div>
</template>
<script>
import yunCode from "./components/yun-code.vue";
export default {
    components:{
        yunCode
    },
    data(){
        return {
            code1:`
    npm i yun-silky -S
            `,
            code2:`
    import Vue from 'vue';
    import YunUI from 'yun-silky'
    import 'yun-silky/lib/silky.css'
    import App from './App.vue';

    Vue.use(YunUI);

    new Vue({
        el: '#app',
        render: h => h(App)
    });
            `,
            code3:`
    import Vue from 'vue';
    import { Button } from 'yun-silky';
    import App from './App.vue';

    Vue.component(Button.name, Button);
    /* 或写为
    * Vue.use(Button)
    */

    new Vue({
        el: '#app',
        render: h => h(App)
    });
            `
        }
    }
}
</script>
<style lang='scss' scoped>
.yun-page-title{
    font-size:40px;

}
.yun-page-doc{
    font-size:18px;
    line-height: 40px;
}
.yun-model-title{
    font-size:28px;
    margin-top:20px;
}
.yun-model-sbtitle{
    font-size:24px;
    line-height: 60px;
    background: #efefef;
    padding-left:20px;
    border-left: 4px solid rgb(0, 225, 255);
    margin-top:30px;
}
</style>