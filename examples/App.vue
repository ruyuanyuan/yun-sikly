<template>
  <div id="app">
    <yun-tab v-model="activeTab" @tab-click='tabchange' model='vline'>
      <yun-tab-plan label='Button' tab='button'>
        <yun-button>按钮</yun-button>
      </yun-tab-plan>
      <yun-tab-plan label='Color' tab='color'>
        <yun-color></yun-color>
      </yun-tab-plan>
       <yun-tab-plan label='Menu' tab='menu'>
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
      </yun-tab-plan>
      <yun-tab-plan label='Animation' tab='animation' class='yun-animation-list'>
        <yun-animation class='yun-ani' name='yun-shake' event='hover' count='infinite' duration='1'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-shake-inline' event='hover' count='infinite' duration='1'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-shake-vline' event='hover' count='infinite' duration='1'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-light' event='hover' count='infinite' duration='0.8'>
          <div class='yun-block'></div>
        </yun-animation>
         <yun-animation class='yun-ani' name='yun-jump' event='hover' count='infinite' duration='0.4'>
          <div class='yun-block'></div>
        </yun-animation>
         <yun-animation class='yun-ani' name='yun-stretch' event='hover' count='1' duration='0.4'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-hert' event='hover' count='infinite' duration='0.4'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-pulse' event='hover' count='1' duration='0.4'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-twinkle' event='hover' count='infinite' duration='1'>
          <div class='yun-block'></div>
        </yun-animation>
        <yun-animation class='yun-ani' name='yun-swing' event='hover' count='infinite' duration='0.4'>
          <div class='yun-block'></div>
        </yun-animation>
      </yun-tab-plan>
      <yun-tab-plan label='Thunderball' tab='thunder-ball'>
        <yun-thunder-ball width='100' height='100' :count='40' :long='500' :speed='1'></yun-thunder-ball>
      </yun-tab-plan>
      <yun-tab-plan label='Water' tab='water'>
        <yun-water width='100'  height='100' number='40' radius='30%'>
          <span class='water-number'>30%</span>
        </yun-water>
        <yun-water width='100'  height='100' number='40' >
          <span class='water-number'>30%</span>
        </yun-water>
        <yun-water width='100'  height='100' number='30' type='drop'>
          <span class='water-number'>30%</span>
        </yun-water>
      </yun-tab-plan>
      <yun-tab-plan label='border' tab='border'>
        <yun-border class='yunborder' width='2' color='blue' type='dashed'>
          <div class='yun-block yun-block-light'></div>
        </yun-border>
        <yun-border class='yunborder' width='2' name='outline' color='blue'>
          <div class='yun-block yun-block-light'></div>
        </yun-border>
         <yun-border class='yunborder' width='0' name='horn' color='blue'>
          <div class='yun-block yun-block-light'></div>
        </yun-border>
         <yun-border class='yunborder' width='0' name='light' color='blue'>
          <div class='yun-block yun-block-light'></div>
        </yun-border>
        <yun-border class='yunborder' width='2' name='circle' color='blue' radius='50%'>
          <div class='yun-block yun-block-light'></div>
        </yun-border>
      </yun-tab-plan>
      <yun-tab-plan label='Text' tab='text' class='yun-bg'>
        <yun-text class='yun-text-item' name='colour' size='24' >Are you ready?</yun-text>
        <yun-text class='yun-text-item' name='light' size='24' >Are you ready?</yun-text>
        <yun-text class='yun-text-item' name='animation-order'  size='24' >Are&nbsp; you &nbsp;ready?</yun-text>
        <yun-text class='yun-text-item' name='animation-beat'  size='40' skew='0'>Are&nbsp; you &nbsp;ready?</yun-text>
      </yun-tab-plan>
      <yun-tab-plan label='Scroll' tab='scroll'>
       <yun-scroll step='30' height='240' scrollId='myscrll1'>
         <ul>
            <li class='yun-li' v-for="i in 10" :key='i'>{{i}}</li>
        </ul>
       </yun-scroll>
        <yun-scroll step='30' height='240' direction='inline'>
         <ul class='inline'>
            <li class='yun-li' v-for="i in 10" :key='i'>{{i}}</li>
        </ul>
       </yun-scroll>
      </yun-tab-plan>
       <yun-tab-plan label='Galaxy' tab='galaxy' class="yun-bg">
         <yun-galaxy :stars='starList' itemW='60' itemH='60'>
          <div class='galaxy-center' slot="center">中心点</div>
          <div class='galaxy-disc' slot="disc"></div>
         </yun-galaxy>
      </yun-tab-plan>
    </yun-tab>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeTab:'button',
      starList:[1,2,3,4,5]
    }
  },
  methods: {
    tabchange(item){
      this.activeTab=item.tab
    }
  }
}
</script>

<style lang="scss">
.yun-bg{
  background:#202076;
}
.yun-text-item{
  margin:15px;
}
.yun-animation-list{
  display: flex;
  background: #000;
  .yun-ani{
    margin:15px;
  }
}
.yunborder{
  margin:15px;
}
  .yun-block{
    width:80px;
    height:80px;
    border:1px solid #dfdfdf;
    background: blueviolet;
    cursor: pointer;
    &.yun-block-light{
    //   width:200px;
    // height:200px;
      background: rgb(207, 173, 238);
    }
  }
  .water-number{
    color:rgb(7, 177, 245);
    font-size:20px;
  }
  .galaxy-center{
    width:80px;
    height:80px;
    line-height: 80px;
    text-align: center;
    font-size:18px;
    color:#fff;
    border:2px solid rgb(7, 177, 245);
    border-radius: 50%;
    
  }
  .galaxy-disc{
    width:300px;
    height:300px;
    border:1px solid rgb(7, 177, 245);
    border-radius: 50%;
  }
.yun-li{
    line-height: 40px;
    text-align: center;
    border:1px solid #dfdfdf;
}
.inline{
    display: flex;
    .yun-li{
        width:160px;
        height:300px;
        line-height: 300px;
        text-align: center;
        border:1px solid #dfdfdf;
    }
}
</style>
