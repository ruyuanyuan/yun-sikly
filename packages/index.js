import Button from './button'
import Tab from './tab'
import TabPlan from './tab-plan'
import Color from './color'
import Menu from './menu'
import MenuGroup from './menu-group'
import MenuItem from './menu-item'
import Animation from './animation'
import Thunderball from './thunder-ball'
import Water from './water'
import Border from './border'
import Text from './text'
import Scroll from './scroll'
import Galaxy from './galaxy'
const components = [
    Button,
    Tab,
    TabPlan,
    Color,
    Menu,
    MenuGroup,
    MenuItem,
    Animation,
    Thunderball,
    Water,
    Border,
    Text,
    Scroll,
    Galaxy
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
    Animation,
    Thunderball,
    Water,
    Border,
    Text,
    Scroll,
    Galaxy
}