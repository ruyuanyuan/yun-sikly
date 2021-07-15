<template>
  <div class="yun-water" :class='["yun-water-"+type,$attrs.class]' 
  :style='`width:${width}px;height:${height}px; border-radius:${waterRadius};box-shadow: 0 0 8px ${shadowColor} inset;`'>
    <div class='yun-water-number'>
        <slot></slot>
    </div>
    <div class="yun-water-content" :style='`border-radius:${radius}`'>
        <div class="yun-water-heavy" :style='`top:${90-number}%;background:${waterColor&&waterColor[0]}`'></div>
        <div class="yun-water-light" :style='`top:${100-number}%;background:${waterColor&&waterColor[1]}`'></div>
    </div>
  </div>
</template>
<script>
export default {
    name:'yun-water',
    props:{
      width:{
          type:[Number,String],
          default:20
      },
      height:{
          type:[Number,String],
          default:20
      },
      number:{
          type:[Number,String],
          default:50
      },
      radius:{
           type:[Number,String],
          default:'50%'
      },
      shadowColor:{
        type:String,
        default:'#0cffff'
      },
      waterColor:{
        type:String,
        default:()=>{
          return ['#1cf3f3','#0cffffee']
        }
      },
      type:{
          type:String,
          default:'default'
      }
    },
    computed:{
        waterRadius:function(){
            let wraduis = this.radius
            if(this.type=='drop'){
                wraduis = `6px ${this.width*1.5}px ${this.width}px ${this.width*1.5}px`
            }
            return wraduis
        }
    },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
   
  },
};
</script>
<style lang="scss" scoped>
.yun-water {
  position: relative;
  overflow: hidden;
  // box-shadow: 0 0 8px #0cffff inset;
  display: inline-block;
  margin-top:15px;
  &+*{
      margin-left:10px;
  }
  &.yun-water-drop{
      border-radius: 0px 18px 31px 18px;
      transform: rotate(45deg);
      .yun-water-content{
          transform: rotate(-45deg);
      }
      .yun-water-number{
          transform:translate(-50%,-50%) rotate(-45deg);
      }
  }
  .yun-water-number{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      z-index:4;
  }
  .yun-water-content {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      border-radius: 50%;
      animation: water-wave linear infinite;
      .yun-water-heavy {
        position: absolute;
        top: 54%;
        left: -25%;
        background: #1cf3f3;
        opacity: 1;
        width: 200%;
        height: 200%;
        border-radius: 32%;
        animation: inherit;
        animation-duration: 5s;
      }
      .yun-water-light {
        position: absolute;
        top: 42%;
        left: -35%;
        background: #0cffffee;
        opacity: 0.6;
        width: 200%;
        height: 200%;
        border-radius: 36%;
        animation: inherit;
        animation-duration: 7s;
      }
    }
}
@keyframes water-wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>