<template>
  <div class="yun-page">
    <div class="yun-borders">
      <yun-border color="#67C23A">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" color="#409EFF" type="dashed">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" color="#F56C6C" type="dashed" radius="30%">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border color="#409EFF" width="0" name="horn">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border color="#409EFF" width="0" name="light">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" name="outline" color="#409EFF">
        <div class="yun-block"></div>
      </yun-border>
    </div>
    <yun-code lang="vue" :code="code" > </yun-code>
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
          <td>default/horn/light/outline</td>
          <td>边框类型</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>#efefef</td>
          <td>-</td>
          <td>边框颜色</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String/Number</td>
          <td>2</td>
          <td>-</td>
          <td>边框宽度</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>solid</td>
          <td>dotted/solid/double/dashed</td>
          <td>边框样式</td>
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
      <yun-border color="#67C23A">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" color="#409EFF" type="dashed">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" color="#F56C6C" type="dashed" radius="30%">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border color="#409EFF" width="0" name="horn">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border color="#409EFF" width="0" name="light">
        <div class="yun-block"></div>
      </yun-border>
      <yun-border width="2" name="outline" color="#409EFF">
        <div class="yun-block"></div>
      </yun-border>        
            `
        }
    }
};
</script>

<style lang='scss' scoped>
.yun-borders {
  padding: 20px 0;
  background-image: linear-gradient(#a4b1eb44, #75ccff38);
  min-height: 300px;
}
.yun-border {
  margin: 0 10px;
}
.yun-block {
  width: 100px;
  height: 100px;
}
</style>