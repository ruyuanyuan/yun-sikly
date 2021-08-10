<template>
    <div class='yun-tabs'>
        <yun-tab v-model="activeTab" @tab-click='tabchange' model='vline'>
            <!-- <yun-tab-plan label='tab1' tab='1'>
                tab1
            </yun-tab-plan>
             <yun-tab-plan label='tab2' tab='2'>
                tab2
            </yun-tab-plan>
            <yun-tab-plan label='tab3' tab='3'>
                tab3
            </yun-tab-plan> -->
        </yun-tab>
    </div>
</template>
<script>
export default {
    data(){
        return {
            activeTab:'2',
        }
    },
    methods: {
        tabchange(item){
            this.activeTab=item.tab
        }
    }
}
</script>