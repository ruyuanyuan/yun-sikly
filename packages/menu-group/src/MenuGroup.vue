<template>
  <div class="yun-menu-group">
    <div class="yun-menu-group-title" @click.stop='showMenuGroup'>
      <slot name='title'></slot>
    </div>
    <div
      class="yun-menu-group-content"
      :class='{"show-group":showflag}'
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "yun-menu-group",
  data() {
    return {
        showflag:false
    };
  },
  methods:{
      showMenuGroup(){
        this.showflag = !this.showflag
      }
  }
};
</script>
<style lang="scss" scoped>
.yun-menu-group {
  .yun-menu-group-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 15px;
    cursor: pointer;
    border-bottom:1px solid  #d4fff7;
    color: #fff;
    .yun-menu-group-icon {
      max-height: 20px;
      max-width: 20px;
    }
    .yun-menu-group-name {
      margin-left: 10px;
      font-size: 14px;
      color:#fff;
    }
  }
  .yun-menu-group-content {
    height:0;
    overflow: hidden;
    transition: all 1s linear;
    &.show-group{
        height:auto;
    }
  }
}
</style>