<template>
   <div class='yun-texts' :class="[$attrs.class]">
        
        <div v-if="name=='animation-order'"
            class='yun-text'
            :class="['yun-text-'+name]"
            :style="`transform: skew(${skew}deg);`"
        >
        <span class='yun-text-span'
        :style='`color:${color};font-size:${size}px;`' 
        v-for='(word,index) in text' :key='index'
        
        >{{word}}</span>
        </div>
        <div v-else-if="name=='animation-beat'"
            class='yun-text'
            :class="['yun-text-'+name]"
            :style="`transform: skew(${skew}deg);`"
        >
        <span class='yun-text-span'
        :style='`color:${color};font-size:${size}px;`' 
        v-for='(word,index) in text' :key='index'
        
        >{{word}}</span>
        </div>
        <div v-else class='yun-text'
            :class="['yun-text-'+name]"  
            :style='`color:${color};font-size:${size}px;transform: skew(${skew}deg);`'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'yun-text',
    props:{
        name:{
            type:String,
            default:"default"
        },
        color:{
            type:String,
            default:"#fff"
        },
        size:{
            type:[String,Number],
            default:14
        },
        skew:{
            type:[String,Number],
            default:-20
        }
    },
    computed:{
        textStyle:function(){

        }
    },
    data() {
        return {
            text:''
        };
    },
    created() {
        if(this.$slots.default){
            this.text=this.$slots.default[0].text
        }
    },
    mounted() {
        this.$nextTick(()=>{
           if(this.name=='animation-order'){
               let words = document.querySelectorAll('.yun-text-animation-order .yun-text-span');
               console.log(words);
                [...words].forEach((word,index)=>{
                    setTimeout(()=>{
                        word.style.bottom= 0;
                        word.style.opacity= 1;
                        word.style.visibility= 'visible';
                    },index*200)
                    
                })
           }
           
        })
    },
    methods: {

    }
};
</script>

<style scoped lang="scss">
    .yun-texts{ display: inline-block;}
    .yun-text{
        display: inline-block;
        &.yun-text-colour{
            background-image: linear-gradient(#032d50 25%, #00a1ef 35%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
            -webkit-text-stroke: 0.01em #94a0b9;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        &.yun-text-light{
            text-shadow: 0 0 8.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
        }
        &.yun-text-animation-order{
           .yun-text-span{
               display: inline-block;
               overflow: hidden;
               letter-spacing: 2px;
               position: relative;
               bottom:-2rem;
               opacity: 0;
               visibility: hidden;
               transition: all 0.4s linear;
           }
        }
        &.yun-text-animation-beat{
           .yun-text-span{
               display: inline-block;
               overflow: hidden;
               letter-spacing: 2px;
               position: relative;
               transition: all 0.4s linear;
               cursor: pointer;
               &:hover{
                   transform: translate(0,-1rem) scale(0.8,1.2);
               }
           }
        }
    }
</style>
