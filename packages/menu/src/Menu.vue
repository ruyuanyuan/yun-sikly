<template>
    <div class='yun-menu' :style='`width:${width}px;background:${bgColor}`'>
        <slot></slot>
    </div>
</template>
<script>

export default {
    name:'yun-menu',
    props:{
        width:{
            type:[String,Number],
            default:200
        },
        bgColor:{
            type:String,
            default:'#1976d2'
        },
        route:{
            type:Boolean,
            default:false
        },
    },
    provide(){
        return {
            route: this.route
        }
    },
    
}
</script>