import { createApp } from 'vue'
import App from './App'
import components from '@/components/imports.js'
import router from '@/router/router.js'
import store from '@/store/store.js'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .mount('#app');