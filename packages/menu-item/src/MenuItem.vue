<template>
    <div class='yun-menu-item' :style='`background:${menuColor}`'>
        <template v-if='route'>
            <router-link :to='path'>
                <slot></slot>
            </router-link>
        </template>
        <template v-else>
           <slot></slot>
        </template>
    </div>
</template>
<script>
export default {
    name:"yun-menu-item",
    inject: [ "route" ],
    props:{
        path:{
            type:String,
            default:null
        },
        menuColor:{
            type:String,
            default:'#33CCFF'
        },
    }
}
</script>
<style lang="scss" scoped>
    .yun-menu-item{
        width:100%;
        height:40px;
        position: relative;
        border-bottom:1px solid  #d4fff7;
        color:#fff;
        display: flex;
        align-items: center;
        padding:0 15px;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            top:0;
            left:0;
            z-index: 0;
            width:0;
            height:100%;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.091), rgba(127, 253, 243, 0.21));
            transition: all 0.2s linear;
        }
        &:hover{
            &::before{
                position: absolute;
                top:0;
                left:0;
                width:100%
            }
        }
        a{
            display: flex;
            align-items: center;
            width:100%;
            height:100%;
            padding:5px 15px;
            color:#fff;
            position: absolute;
            z-index:2;
        }
        .yun-menu-icon{
            max-height:20px;
            max-width: 20px;
        }
        .yun-menu-name{
            margin-left:10px;
            font-size:14px;
        }
    }
</style>