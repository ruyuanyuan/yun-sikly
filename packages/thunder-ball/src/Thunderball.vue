<template>
  <div
    class="yun-thunder-ball"
    :style="`width:${width}px;height:${height}px;box-shadow: 0 0 20px ${shadowColor} inset;`"
  >
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
export default {
  name:'yun-thunder-ball',
  props: {
    width:{
        type:[String,Number],
        default:200
    },
    height:{
        type:[String,Number],
        default:200
    },
    lineWidth:{
        type:[String,Number],
        default:2
    },
    count:{
        type:Number,
        default:100
    },
    shadowColor:{
        type:String,
        default:'#1cf3f3'
    },
    linecolor:{
      type:String,
      default:'#1cf3f3'
    },
    lineHeight:{
      type:Number,
      default:1000
    },
    speed:{
      type:Number,
      default:2
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvas()
    });
  },
  methods: {
    initCanvas() {
      var canvas = this.$refs.canvas;
      var ctx = canvas.getContext("2d");
      let _this =this;
      var RAF = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000);
          }
        );
      })();
      // 鼠标活动时，获取鼠标坐标
      var warea = { x: null, y: null, max: 2000 };
      // 添加粒子
      // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
      var dots = [];
      for (var i = 0; i < this.count; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var xa = Math.random() * this.speed - 1;
        var ya = Math.random() * this.speed - 1;
        dots.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya,
          max: this.lineHeight,
        });
      }
      // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
      setTimeout(function () {
        animate();
      }, 100);
      // 每一帧循环的逻辑
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots = [warea].concat(dots);
        dots.forEach((dot) =>{
          // 粒子位移
          dot.x += dot.xa;
          dot.y += dot.ya;
          // 遇到边界将加速度反向
          dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
          dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;
          // 绘制点
          ctx.fillRect(dot.x - 0.2, dot.y - 0.2, 0, 0);
          // 循环比对粒子间的距离
          for (var i = 0; i < ndots.length; i++) {
            var d2 = ndots[i];
            if (dot === d2 || d2.x === null || d2.y === null) continue;
            var xc = dot.x - d2.x;
            var yc = dot.y - d2.y;
            // 两个粒子之间的距离
            var dis = xc * xc + yc * yc;
            // 距离比
            var ratio;
            // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
            if (dis < d2.max) {
              // 如果是鼠标，则让粒子向鼠标的位置移动
              if (d2 === warea && dis > d2.max / 2) {
                dot.x -= xc * 0.03;
                dot.y -= yc * 0.03;
              }
              // 计算距离比
              ratio = (d2.max - dis) / d2.max;
              // 画线
              ctx.beginPath();
              ctx.lineWidth = ratio / _this.lineWidth;
              ctx.strokeStyle = "rgba("+_this.setcolor(_this.linecolor)+"," + (ratio + 0.1) + ")";
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.stroke();
            }
          }
          // 将已经计算过的粒子从数组中删除
          ndots.splice(ndots.indexOf(dot), 1);
        });
        RAF(animate);
      }
    },
    setcolor(sColor){
      
      sColor = sColor.toLowerCase();
      //十六进制颜色值的正则表达式
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是16进制颜色
      if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
              var sColorNew = "#";
              for (var i=1; i<4; i+=1) {
                  sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
              }
              sColor = sColorNew;
          }
          //处理六位的颜色值
          var sColorChange = [];
          for (var i=1; i<7; i+=2) {
              sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
          }
          return sColorChange.join(",");
      }
      return sColor;
  }
  },
};
</script>

<style scoped>
.yun-thunder-ball {
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(44, 253, 253, 0.849) inset;
}
</style>
