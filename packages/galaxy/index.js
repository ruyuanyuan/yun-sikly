import Galaxy from './src/Galaxy.vue'

Galaxy.install=function(Vue){
    Vue.component(Galaxy.name,Galaxy)
}
export default Galaxy