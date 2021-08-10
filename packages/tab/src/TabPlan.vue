<template>
    <div class='yun-tab-plan' :class='$attrs.class' v-if='active'>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'yun-tab-plan',
  props: {
    tab:String,
    label:String
  },
  data() {
    return {
    };
  },
  created () {
  },
  computed:{
    active:function(){
      const active = this.$parent.value === this.tab
      return active;
    }
  },
  watch:{
  },
  methods: {
    
  },
  
};
</script>

<style lang='scss' scoped>
  .yun-tab-plan{
    width:100%;
    min-height: 300px;
    max-height: 100vh;
    overflow-y:auto;
    padding:10px;
    position: relative;
    top:-1px;
  }
</style>
