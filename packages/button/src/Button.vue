<template>
  <div class='yun-buttons'>
    <div
      v-if="type == 'colorliner'"
      class="yun-button yun-button-linear"
      :class="`yun-animate-${animate}`"
      :style="`background-image: linear-gradient(to ${direction}, ${colors.join(
        ','
      )});border:1px solid ${borderColor};color:${fontColor};border-radius:${radius}px;`"
      @mouseenter="btnMouseEvent"
      @mouseleave="btnMouseEvent"
    >
      <slot></slot>
    </div>
    <div 
    v-if="type == 'color'"
    class='yun-button yun-button-color' 
    :class="`yun-animate-${animate}`"
    :style='`background:${color};border:1px solid ${borderColor};color:${fontColor};border-radius:${radius}px`'
    @mouseenter="btnMouseEvent"
    @mouseleave="btnMouseEvent"
    >
    <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "yun-button",
  props: {
    color:{
      type:String,
      default:'#fff'
    },
    fontColor:{
      type:String,
      default:'#666'
    },
    borderColor:{
      type:String,
      default:'#efefef'
    },
    radius:{
      type:[Number,String],
      default:4
    },
    colors: {
      type: Array,
      default: () => ["#667eea", "#bf8bf5", " #667eea"],
    },
    direction: {
      type: String,
      default: "right",
    },
    animate: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: "color",
    },
  },
  data() {
    return {
      animateFlag: false,
    };
  },
  methods: {
    btnMouseEvent() {
      if (this.animate) {
        this.animateFlag = !this.animateFlag;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.yun-buttons{
  display: inline-block;
  
}
.yun-button{
  display: inline-block;
  padding: 6px 20px;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 1px;
  font-size: 14px;
  cursor: pointer;
}
.yun-button-linear {
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  background-image: linear-gradient(to right, #667eea, #bf8bf5, #667eea);
  border: 0;
  outline: none;
  color: #fff;
}
.yun-buttons + * {
  margin-left: 10px;
}
.yun-button-linear:hover {
  background-position: right center;
}
.yun-animate-shake {
  &:hover{
     -webkit-animation: shake 0.5s 1;
     animation: shake 0.5s 1;
  }
}
.yun-animate-border {
  position: relative;
  transition: color 0.25s;
  border:0;
  &::before{
    box-sizing: border-box;
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 0;
    height: 0;
    border: 2px solid transparent;

  }
  &::after{
    box-sizing: border-box;
    content: '';
    position: absolute;
    bottom:0;
    right:0;
    width: 0;
    height: 0;
    border: 2px solid transparent;
  }
  &:hover{
     &::before{
       width: 100%;
       height: 100%;
       border-top-color: #667eea;
       border-right-color: #667eea;
       transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
     }
     &::after{
       border-bottom-color: #667eea;
       border-left-color: #667eea;
       width: 100%;
       height: 100%;
       transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
     }
  }
}
.yun-button-color{
  border:1px solid #efefef;
    color:#666;
}
@keyframes shake {
  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }

  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
}
</style>
