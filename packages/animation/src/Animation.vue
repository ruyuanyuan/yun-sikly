<template>
  <div class="yun-animation" :class="$attrs.class">
    <div
      class="yun-animation-block"
      v-if="event == 'hover'"
      :style="animationFlag ? animationStyle : ''"
      @mouseover="mouseoverEvent"
      @mouseleave="mouseleaveEvent"
    >
      <slot></slot>
    </div>
    <div
      class="yun-animation-block"
      v-else-if="event == 'click'"
      :style="animationFlag ? animationStyle : ''"
      @click="clickEvet"
    >
      <slot></slot>
    </div>
    <div class="yun-animation-block" v-else :style="animationStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "yun-animation",
  props: {
    name: {
      type: String,
      default: "",
    },
    event: {
      type: String,
      default: "",
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: [String, Number],
      default: 2,
    },
    delay: {
      type: [String, Number],
      default: 0,
    },
    count: {
      type: [String, Number],
      default: 2,
    },
    animationType: {
      type: [String],
      default: "ease-in-out",
    },
  },
  computed: {
    animationStyle: function () {
      let animateStyle = `animation-name: yun-${this.name};animation-duration: ${this.duration}s;animation-delay: ${this.delay}s;animation-iteration-count: ${this.count};animation-timing-function: ${this.animationType};`;
      return animateStyle;
    },
  },
  data() {
    return {
      animationFlag: false,
    };
  },
  methods: {
    mouseoverEvent() {
      this.animationFlag = true;
    },
    mouseleaveEvent() {
      this.animationFlag = false;
    },
    clickEvet() {
      this.animationFlag = !this.animationFlag;
    },
  },
};
</script>

<style lang='scss'>
.yun-animation {
  display:block;
  .yun-animation-block {
    &.yun-animation-shake {
      animation-name: yun-shake-inline; // 原生
      animation-duration: 4s; // 动画执行时间
      animation-delay: 0s; // 动画等待时间
      animation-iteration-count: infinite; // 动画执行次数，infinite为一直执行
      animation-timing-function: ease-in-out; // 动画执行速度
      animation-play-state: running; // 动画执行状态，一般没必要parse
    }
  }
}
@keyframes yun-shake {
  /* 水平抖动，核心代码 */
  10%,
  90% {
    transform: translate3d(-2px, -2px, 0px);
  }
  20%,
  80% {
    transform: translate3d(+2px, +2px, 0px);
  }
  30%,
  70% {
    transform: translate3d(-4px, -4px, 0px);
  }
  40%,
  60% {
    transform: translate3d(+4px, +4px, 0px);
  }
  50% {
    transform: translate3d(-4px, -4px, 0px);
  }
}
@keyframes yun-shake-inline {
  /* 水平抖动，核心代码 */
  10%,
  90% {
    transform: translate3d(-2px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(+2px, 0, 0);
  }
  30%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(+4px, 0, 0);
  }
  50% {
    transform: translate3d(-4px, 0, 0);
  }
}
@keyframes yun-shake-vline {
  /* 水平抖动，核心代码 */
  10%,
  90% {
    transform: translate3d(0, -2px, 0);
  }
  20%,
  80% {
    transform: translate3d(0, +2px, 0);
  }
  30%,
  70% {
    transform: translate3d(0, -4px, 0);
  }
  40%,
  60% {
    transform: translate3d(0, +4px, 0);
  }
  50% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes yun-light {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}
@keyframes yun-jump {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(5px) scale(1.1, 0.9);
  }
  75% {
    ransform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes yun-stretch {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform:  scale(1.2, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes yun-hert {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
@keyframes yun-pulse {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  50% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  100% {
    transform: scale(1); /*放大1.1倍*/
  }
}
@keyframes yun-twinkle {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
     opacity: 0.5;
  }
}
@keyframes yun-swing {
  0%, 100%{
    -webkit-transform: rotate(-10deg);
  }
  25%, 75%{
    -webkit-transform: rotate(-8deg);
  }
  50%{
    -webkit-transform: rotate(10deg);
  }
}
</style>