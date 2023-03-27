import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { mock, mockEnv } from './appConfig'
import enableMock from '../mock'
import '@/styles/index.postcss' // 全局样式
import 'virtual:svg-icons-register'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css' // message样式
import 'element-plus/theme-chalk/el-message-box.css' // message样式
import { EnvType } from 'types/app'
import '@/assets/iconfont/iconfont.js'


mockEnv.includes(import.meta.env.MODE as EnvType) && mock === 'on' && enableMock()

createApp(App).use(createPinia()).use(router).mount('#app')
