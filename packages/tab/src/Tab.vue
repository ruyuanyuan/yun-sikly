<template>
  <div class='yun-tab' :class='"yun-tab-"+model'>
    <div class='yun-tab-nav'>
      <div class='yun-tab-nav-item' 
        v-for='(item) in navList'
        :key='item.tab'
        :class='{"active-tab":item.tab==value}'
        @click='changeTabEvent(item)'
      >
      {{item.label}}
      </div>
    </div>
    <div class='yun-tab-content'>
      <slot :active='value'></slot>
    </div>
  </div>
</template>

<script>
  import TabNav from './TabNav'
  export default {
    name: 'yun-tab',
    props: {
      value: "",
      active: '',
      model:{
        type:String,
        default:'inline'
      }
    },
    components: {
      TabNav
    },
    created () {
    },
    data() {
      return {
        navList: []
      };
    },
    mounted() {
      this.getNavList()
    },
    methods: {
      getNavList() {
        this.navList = []
        if (this.$slots.default) {
          console.log(this.$slots.default)
          this.$slots.default.forEach(item => {
            let navObj = {
              label: item.componentInstance.label,
              tab: item.componentInstance.tab
            }
            this.navList.push(navObj)
          });
        }
        
      },
      changeTabEvent(item){
        this.$emit('tab-click',item)
      }
    },
  };
</script>

<style lang='scss' scoped>
  .yun-tab {
    width: 100%;
    height: auto;
    .yun-tab-nav{
       display:flex;
       width:100%;
      .yun-tab-nav-item{
         min-width:80px;
         font-size:14px;
         padding:10px 15px 8px;
         border:1px solid #efefdf;
         border-right:0px solid #efefdf;
         text-align: center;
         color:#696969;
         cursor: pointer;
         background: #fff;
         position: relative;
         z-index: 2;
         &:last-child{
           border-right:1px solid #efefdf;
         }
         &.active-tab{
           color:#33CCFF;
           font-weight: 500;
           border-bottom:0px solid #efefdf;
           background: #f5fffc;
         }
       } 
      .yun-tab-content{
        width:100%;
      }
    }
    &.yun-tab-vline{
      display: flex;
      .yun-tab-nav{
        display: block;
        width:160px;
        .yun-tab-nav-item{
          width:100%;
        }
      }
      .yun-tab-content{
        flex:1;
        min-height: 300px;
      }
    }
  }
   
</style>