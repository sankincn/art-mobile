import TabPanel from '../tab-panels/tab-panel.vue'

TabPanel.install = Vue => {
  Vue.component(TabPanel.name, TabPanel)
}

export default TabPanel
