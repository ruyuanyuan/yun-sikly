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
    </yun-tab>
  </div>
</template>

<script>
import YuniMenuGroup from '../../yun-ui/src/plugin/components/YuniMenu/YuniMenuGroup.vue'

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      activeTab:'button'
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

</style>
