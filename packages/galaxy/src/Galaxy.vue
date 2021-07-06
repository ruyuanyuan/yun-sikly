<template>
  <div class="yun-galaxy" :style="`width:${width}px;height:${height}px;`">
    <div class="yun-galaxy-conent">
      <div class="yun-galaxy-center">
        <slot name="center"></slot>
      </div>
      <div class="yun-galaxy-disc">
        <slot name="disc"></slot>
      </div>
      <ul class="yun-galaxy-track" :style="`width:${itemW}px;height:${itemH}px;`">
        <li
          class="yun-galaxy-star"
          :style="`width:${itemW}px;height:${itemH}px;`"
          v-for="(star, index) in stars"
          :key="index"
        ></li>
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
    border:1px solid red;
    // background: red;
    transform-origin:center center;
    transform-style: preserve-3d;
    animation: play 12s linear 0s infinite normal;
    .yun-galaxy-star{
      position: absolute;
      top:0;
      left:0;
      border:1px solid greenyellow;
      &:nth-child(1) {
        transform: rotateY(72deg) translateZ(150px) translateY(0);
      }
      &:nth-child(2) {
        transform: rotateY(144deg) translateZ(150px) translateY(0);
      }
      &:nth-child(3) {
        transform: rotateY(216deg) translateZ(150px) translateY(0);
      }
      &:nth-child(4) {
        transform: rotateY(288deg) translateZ(150px) translateY(0);
      }
      &:nth-child(5) {
        transform: rotateY(360deg) translateZ(150px) translateY(0);
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
