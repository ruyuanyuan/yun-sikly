<template>
  <div class="yun-galaxy" :class='$attrs.class' :style="`width:${width}px;height:${height}px;`">
    <div class="yun-galaxy-conent">
      <div class="yun-galaxy-center">
        <slot name="center"></slot>
      </div>
      <div class="yun-galaxy-disc">
        <slot name="disc"></slot>
      </div>
      <ul class="yun-galaxy-track" ref="starsSet" :style="`width:${itemW}px;height:${itemH}px;`">
        <li
          class="yun-galaxy-star"
          :style="`width:${itemW}px;height:${itemH}px;`"
          v-for="(star, index) in stars"
          :key="index"
        >
        <a :href="star.url?star.url:'javascript:;'">
          <img v-if='star.img' :src="star.img" alt="">
        </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "yun-galaxy",
  props: {
    stars: {
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: [Number, String],
      default: 600,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    itemW: {
      type: [Number, String],
      default: 50,
    },
    itemH: {
      type: [Number, String],
      default: 50,
    },
  },
  data() {
    return {};
  },
  created(){
    this.$nextTick(()=>{
      let stars = this.$refs.starsSet.getElementsByClassName('yun-galaxy-star');
      let starLen = this.stars.length;
      let degUnit = 360/starLen;
      [...stars].forEach((dom,index)=>{
        dom.style.transform = `rotateY(${degUnit*(index+1)}deg) translateZ(150px)`
        let doma = dom.getElementsByTagName("a")[0];
        doma.animate([
            { transform: `rotateY(-${degUnit*(index+1)}deg) `}, 
            { transform: `rotateY(-${degUnit*(index+1)+360}deg) ` }
        ], { 
            duration: 12000,
            iterations: Infinity
        });
      })
    })
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.yun-galaxy {
  position: relative;
  transform-style: preserve-3d;
  perspective: 3000px;
  perspective-origin: center center;
  .yun-galaxy-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
  }
  .yun-galaxy-disc {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, -300px) rotateX(45deg);
    transform-style: preserve-3d;
  }
  .yun-galaxy-track {
    position: absolute;
    left: 0;
    top: 0;
    right:0;
    bottom:0;
    margin:auto;
    transform-origin:center center;
    transform-style: preserve-3d;
    transform: rotateX(45deg);
    animation: play 12s linear 0s infinite normal;
    .yun-galaxy-star{
      position: absolute;
      top:0;
      left:0;
      // transform-origin:center center;
      transform-style: preserve-3d;
      a{
        display: block;
        position: absolute;
        width:100%;
        height:100%;
        border:1px solid greenyellow;
        transform-origin:center center;
        transform-style: preserve-3d;
      }
    }
    
  }
}
@keyframes play {
  from {
    transform: rotateX(45deg) rotateY(0deg) translateZ(0);
  }
  to {
    transform: rotateX(45deg) rotateY(360deg) translateZ(0);
  }
}
</style>
