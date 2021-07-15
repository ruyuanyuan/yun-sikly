<template>
  <div
    class="yun-border"
    :class="[$attrs.class, 'yun-boder-' + name]"
    :style="`border-color:${color};border-width:${width}px;border-style:${type};border-radius:${radius};color:${color}`"
  >
    <div class="yun-border-line" :style="`border-radius:${radius};`"></div>
    <div class="yun-border-line" :style="`border-radius:${radius};`"></div>
    <div class="yun-border-line" :style="`border-radius:${radius};`"></div>
    <div class="yun-border-line" :style="`border-radius:${radius};`"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yun-border",
  props: {
    name: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "solid",
    },
    radius: {
      type: [Number, String],
      default: 0,
    },
    width: {
      type: [Number, String],
      default: 2,
    },
    color: {
      type: String,
      default: "#efefef",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.yun-border {
  display: inline-block;
  position: relative;
  .yun-border-line {
    display: none;
  }
  &.yun-boder-outline {
    position: relative;
    .yun-border-line {
      display: block;
      position: absolute;
       
      &:nth-child(1) {
        width:120%;
        border-top: 3px solid;
        left: -10%;
        top: -10%;
        animation: animation-border-t 4s linear infinite;
      }
      &:nth-child(2) {
        height:120%;
        width:0;
        border-right: 3px solid;
        right: -10%;
        top:-10%;
         animation: animation-border-l 4s linear infinite;
      }
      &:nth-child(3) {
        border-bottom: 3px solid;
        width:120%;
        bottom: -10%;
        right:-10%;
        animation: animation-border-t 4s linear infinite;
      }
      &:nth-child(4) {
        height:120%;
        width:0;
        border-left: 3px solid;
        left: -10%;
        bottom: -10%;
      animation: animation-border-l 4s linear infinite;
      }
    }
    
  }
  &.yun-boder-horn {
    .yun-border-line {
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      &:nth-child(1) {
        border-top: 3px solid;
        border-left: 3px solid;
        left: -3px;
        top: -3px;
      }
      &:nth-child(2) {
        border-top: 3px solid;
        border-right: 3px solid;
        right: -3px;
        top: -3px;
      }
      &:nth-child(3) {
        border-bottom: 3px solid;
        border-right: 3px solid;
        right: -3px;
        bottom: -3px;
      }
      &:nth-child(4) {
        border-bottom: 3px solid;
        border-left: 3px solid;
        left: -3px;
        bottom: -3px;
      }
      
    }
  }
  &.yun-boder-light{
    overflow: hidden;
    .yun-border-line {
      position: absolute;
      display: block;
      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, rgb(0, 250, 237));
        animation: animate1 4s linear infinite;
      }
      &:nth-child(2) {
        filter: hue-rotate(30deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, rgb(0, 250, 237));
        animation: animate2 4s linear infinite;
        animation-delay: 1s;
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;
        background: linear-gradient(270deg, transparent, rgb(0, 250, 237));
        animation: animate3 4s linear infinite;
        animation-delay: 2s;
      }
      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, rgb(0, 250, 237));
        animation: animate4 4s linear infinite;
        animation-delay: 3s;
      }
      
    }
  }
  &.yun-boder-circle{
    position: relative;
    overflow: hidden;
  }
}
@keyframes animation-border-t{
  0%,
  100% {
    width:90%;
  }
  25% {
    width:30%;
  }
  50% {
    width:60%;
  }
  75% {
    width:90%;
  }
}
@keyframes animation-border-l{
  0%,
  100% {
    height:90%;
  }
  25% {
    height:30%;
  }
  50% {
    height:60%;
  }
  75% {
    height:90%;
  }
}
@keyframes animate1 {
      0% {
        left: -100%;
      }

      50%,
      100% {
        left: 100%;
      }
    }
@keyframes animate2 {
      0% {
        top: -100%;
      }

      50%,
      100% {
        top: 100%;
      }
    }
@keyframes animate3 {
      0% {
        right: -100%;
        height: 3px;
      }

      50%,
      100% {
        height: 2px;
        right: 100%;
      }
    }
@keyframes animate4 {
      0% {
        bottom: -100%;
      }

      50%,
      100% {
        bottom: 100%;
      }
    }
</style>
