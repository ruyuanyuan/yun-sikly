import Text from './src/Text.vue'
Text.install = function(Vue){
    Vue.component(Text.name,Text)
}
export default Text