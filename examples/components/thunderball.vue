<template>
<div>
  <div class='yun-thunderball'>
       <yun-thunder-ball width='100' height='100' :count='40' :long='500' :speed='1'></yun-thunder-ball>
  </div>
  <yun-code lang="vue" :code="code"> </yun-code>
  <table class='yun-table' cellspacing='0' style='width:100%;'>
    <thead>
        <tr>
          <th>属性</th>
          <th>类型</th>
          <th>默认值</th>
          <th>可选值</th>
          <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>rgba(17,255,255,0.8)</td>
          <td>-</td>
          <td>待开发-颜色</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String/Number</td>
          <td>100</td>
          <td>-</td>
          <td>宽度</td>
        </tr>
        <tr>
          <td>height</td>
          <td>String/Number</td>
          <td>100</td>
          <td>-</td>
          <td>高度</td>
        </tr>
        <tr>
          <td>shadowColor</td>
          <td>String</td>
          <td>#1cf3f3</td>
          <td>-</td>
          <td>边框投影颜色</td>
        </tr>
        <tr>
          <td>lineWidth</td>
          <td>String/Number</td>
          <td>2</td>
          <td>-</td>
          <td>线条宽度</td>
        </tr>
        <tr>
          <td>linecolor</td>
          <td>String</td>
          <td>#1cf3f3</td>
          <td>-</td>
          <td>线条颜色</td>
        </tr>
        <tr>
          <td>lineHeight</td>
          <td>Number</td>
          <td>1000</td>
          <td>-</td>
          <td>线条长度</td>
        </tr>
        <tr>
          <td>count</td>
          <td>Number</td>
          <td>100</td>
          <td>-</td>
          <td>粒子数量</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>Number</td>
          <td>2</td>
          <td>-</td>
          <td>运动速度</td>
        </tr>
    </tbody>
</table>
  </div>
  
</template>

<script>
import yunCode from "./yun-code.vue";
export default {
  components: { yunCode },
  data() {
    return {
      code: `
  <yun-thunder-ball width='100' height='100' :count='40' :long='500' :speed='1'></yun-thunder-ball>
  `,
    };
  },
}
</script>

<style lang='scss' scoped>
.yun-thunderball{
    padding:20px;
    background-image: linear-gradient(#9264e6, #370bfc);
    min-height: 300px;
    /deep/.yun-thunder-ball{
        position: relative;
    }
}
</style>