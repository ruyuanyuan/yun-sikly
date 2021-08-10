<template>
  <div id="app">
    <yun-tab v-model="activeTab" @tab-click='tabchange' model='vline'>
      <yun-tab-plan label='Button' tab='button'>
        <Ybutton></Ybutton>
      </yun-tab-plan>
      <yun-tab-plan label='border' tab='border'>
        <Yborder></Yborder>
      </yun-tab-plan>
      <yun-tab-plan label='Text' tab='text' class='yun-bg'>
        <Ytext></Ytext>
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
      <yun-tab-plan label='Scroll' tab='scroll'>
       <Yscroll></Yscroll>
      </yun-tab-plan>
      <yun-tab-plan label='Animation' tab='animation' class='yun-animation-list'>
        <Yanimation></Yanimation>
      </yun-tab-plan>
      <yun-tab-plan label='Thunderball' tab='thunder-ball'>
        <Ythunderball></Ythunderball>
      </yun-tab-plan>
      <yun-tab-plan label='Water' tab='water'>
        <Ywater></Ywater>
      </yun-tab-plan>
       <yun-tab-plan label='Galaxy' tab='galaxy' class="yun-bg">
        <Ygalaxy></Ygalaxy>
      </yun-tab-plan>
    </yun-tab>
  </div>
</template>

<script>
import Ybutton from './components/button.vue'
import Yanimation from './components/animation.vue'
import Yborder from './components/border.vue'
import Ygalaxy from './components/galaxy.vue'
import Yscroll from './components/scroll.vue'
import Ytext from './components/text.vue'
import Ythunderball from './components/thunderball.vue'
import Ywater from './components/water.vue'
export default {
  name: 'App',
  components:{
    Ybutton,
    Yanimation,
    Yborder,
    Ygalaxy,
    Yscroll,
    Ytext,
    Ythunderball,
    Ywater
  },
  data () {
    return {
      activeTab:'button',
      starList:[
        {
          img:require('./img/character1.png')
        },
        {
          img:require('./img/character2.png')
        },{
          img:require('./img/character3.png')
        },
        {
          img:require('./img/character4.png')
        },
        {
          img:require('./img/character5.png')
        }

      ]
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
#app{
   
}
</style>
