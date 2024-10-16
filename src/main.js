import { createApp } from 'vue'
import './style/style.css'
import './style/Partials/_globalRule.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,faPenToSquare,faClipboard)




const app = createApp(App);
const pinia = createPinia();


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(pinia);
app.mount('#app')
