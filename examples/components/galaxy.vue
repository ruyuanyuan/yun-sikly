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
            img:require('../img/character1.png')
          },
           {
            img:require('../img/character2.png')
          },
           {
            img:require('../img/character3.png')
          },
           {
            img:require('../img/character4.png')
          },
           {
            img:require('../img/character5.png')
          }
        ],
        `,
        starList:[
          {
            img:require('../img/character1.png')
          },
           {
            img:require('../img/character2.png')
          },
           {
            img:require('../img/character3.png')
          },
           {
            img:require('../img/character4.png')
          },
           {
            img:require('../img/character5.png')
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