import Button from './button'
import Tab from './tab'
import TabPlan from './tab-plan'
import Color from './color'
import Menu from './menu'
import MenuGroup from './menu-group'
import MenuItem from './menu-item'

const components = [
    Button,
    Tab,
    TabPlan,
    Color,
    Menu,
    MenuGroup,
    MenuItem,
]
const install = function(Vue){
    if(install.installed) return
    components.map(component=>Vue.component(component.name,component))
}
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
export default {
    install,
    Button,
    Tab,
    TabPlan,
    Color,
    Menu,
    MenuGroup,
    MenuItem,
}