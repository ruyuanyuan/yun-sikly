<template>
<div>
   <div class='view-galaxy'>
       <yun-galaxy :stars='starList' itemW='65' itemH='75'>
          <div class='galaxy-center' slot="center">
            <img src="../img/center1.png" alt="">
          </div>
          <div class='galaxy-disc' slot="disc">
            <img src="../img/run-pan.png" alt="">
          </div>
         </yun-galaxy>
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
          <td>width</td>
          <td>String/Number</td>
          <td>450</td>
          <td>-</td>
          <td>整体宽度</td>
        </tr>
        <tr>
          <td>height</td>
          <td>String/Number</td>
          <td>500</td>
          <td>-</td>
          <td>整体高度</td>
        </tr>
        <tr>
          <td>itemW</td>
          <td>String/Number</td>
          <td>50</td>
          <td>-</td>
          <td>宽度</td>
        </tr>
        <tr>
          <td>itemH</td>
          <td>String/Number</td>
          <td>50</td>
          <td>-</td>
          <td>高度</td>
        </tr>
        <tr>
          <td>stars</td>
          <td>Array</td>
          <td>[]</td>
          <td>[{img: imgUrl },{ img:imgUrl }]</td>
          <td>环绕渲染数据</td>
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
        <yun-galaxy :stars='starList' itemW='65' itemH='75'>
          <div class='galaxy-center' slot="center">
            <img src="../img/center1.png" alt="">
          </div>
          <div class='galaxy-disc' slot="disc">
            <img src="../img/run-pan.png" alt="">
          </div>
        </yun-galaxy>

        starList:[
          {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          }
        ],
        `,
        starList:[
          {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          },
           {
            img:require('../img/character.png')
          }
        ],
      }
    }
}
</script>

<style lang='scss' scoped>
    .view-galaxy{
      padding-left:200px;
         background-image: linear-gradient(#9264e6, #0bf4fc);
         .galaxy-center{
            width:80px;
            height:80px;
            cursor: pointer;
            img{
              width:100%;
            }
        }
        .galaxy-disc{
            width:450px;
            height:100px;
            // border:1px solid rgb(7, 177, 245);
            border-radius: 50%;
            img{
              width:100%;
            }
        }
    }
</style>