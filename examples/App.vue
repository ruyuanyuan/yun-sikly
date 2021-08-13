<template>
  <div id="app">
    <yun-tab v-model="activeTab" @tab-click='tabchange' model='vline'>
      <yun-tab-plan label='介绍 | 安装' tab='Project'>
        <Yproject></Yproject>
      </yun-tab-plan>
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
        <Ymenu></Ymenu>
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
import Ymenu from './components/menu.vue'
import Yproject from './project.vue'
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
    Ywater,
    Ymenu,
    Yproject
  },
  data () {
    return {
      activeTab:'Project',
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
