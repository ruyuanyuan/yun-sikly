<template>
<div>
  <div class='yun-text'>
      <yun-text color='#409EFF' size='24'>I Love You</yun-text>
       <yun-text color='#E6A23C' name='animation-order' size='24'>I&nbsp;Love&nbsp;You</yun-text>  
        <yun-text color='#F56C6C' name='animation-beat' size='24'>I&nbsp;Love&nbsp;You</yun-text>  
       <yun-text name='colour' skew='0' size='24'>I Love You</yun-text>
       <br/> 
       <br/> 
        <yun-text name='light' skew='0' size='24'>I Love You</yun-text>  
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
          <td>name</td>
          <td>String</td>
          <td>default</td>
          <td>default/colour/light/animation-order/animation-beat</td>
          <td>文本类型</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>#fff</td>
          <td>-</td>
          <td>文字颜色</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String/Number</td>
          <td>14</td>
          <td>-</td>
          <td>文字大小</td>
        </tr>
        <tr>
          <td>skew</td>
          <td>String/Number</td>
          <td>-20</td>
          <td>-</td>
          <td>文字倾斜</td>
        </tr>
    </tbody>
</table>
</div>
  
</template>

<script>
import yunCode from "./yun-code.vue";
export default {
    components: { yunCode },
    data(){
      return {
        code:`
    <yun-text color='#409EFF' size='24'>I Love You</yun-text>
    <yun-text color='#E6A23C' name='animation-order' size='24'>I&nbsp;Love&nbsp;You</yun-text>  
    <yun-text color='#F56C6C' name='animation-beat' size='24'>I&nbsp;Love&nbsp;You</yun-text>  
    <yun-text name='colour' skew='0' size='24'>I Love You</yun-text>
    <yun-text name='light' skew='0' size='24'>I Love You</yun-text> 
        `
      }
    }
}
</script>

<style lang='scss' scoped>
  .yun-text{
    padding:20px;
    background-image: linear-gradient(#9264e6, #0bf4fc);
    min-height: 300px;
    .yun-texts{
      margin-right:40px;
    }
  }
</style>