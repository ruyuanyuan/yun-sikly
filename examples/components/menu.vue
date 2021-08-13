<template>
  <div class="yun-page">
    <div class="yun-menus">
        <yun-menu :width='200' bgColor='#77DDFF' :route='false'>
          <yun-menu-item >
            菜单一
          </yun-menu-item>
          <yun-menu-group>
            <template slot="title">
              菜单组件
            </template>
            <yun-menu-item >菜单二</yun-menu-item>
            <yun-menu-item >菜单三</yun-menu-item>
          </yun-menu-group>
        </yun-menu>
    </div>
    <yun-code lang="vue" :code="code" > </yun-code>
    <br>
    <h1>yun-menu</h1>
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
          <td>width</td>
          <td>String/Number</td>
          <td>200</td>
          <td>-</td>
          <td>宽度</td>
        </tr>
        <tr>
          <td>bgColor</td>
          <td>String</td>
          <td>#1976d2</td>
          <td>-</td>
          <td>背景颜色</td>
        </tr>
        <tr>
          <td>route</td>
          <td>Boolean</td>
          <td>false</td>
          <td>-</td>
          <td>开启路由</td>
        </tr>
        
    </tbody>
</table>
<br>
 <h1>yun-menu-item</h1>
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
          <td>menuColor</td>
          <td>String</td>
          <td>#33CCFF</td>
          <td>-</td>
          <td>背景颜色</td>
        </tr>
        <tr>
          <td>path</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
          <td>开启路由</td>
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
        <yun-menu :width='200' bgColor='#77DDFF' :route='false'>
          <yun-menu-item >
            菜单一
          </yun-menu-item>
          <yun-menu-group>
            <template slot="title">
              菜单组件
            </template>
            <yun-menu-item >菜单二</yun-menu-item>
            <yun-menu-item >菜单三</yun-menu-item>
          </yun-menu-group>
        </yun-menu>        
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
.yun-menus{
    min-height:300px;
}
</style>