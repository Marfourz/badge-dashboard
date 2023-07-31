import './assets/main.css'
import './index.css'

import BaseIcon from './components/global/BaseIcon.vue'
import BaseButton from './components/global/BaseButton.vue'
import BaseInput from '@/components/global/BaseInput.vue'
import BaseTable from './components/global/BaseTable.vue'
import { defineRule } from 'vee-validate';
import { createApp } from 'vue'
import VCalendar from 'v-calendar';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'v-calendar/style.css';


import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


defineRule('required', (value:any) => {
    if (!value || !value.length) {
      return 'Ce champ est obligatoire';
    }
    return true;
  });
  defineRule('email', (value:any) => {
    // Field is empty, should pass
    if (!value || !value.length) {
      return true;
    }
    // Check if email
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
      return 'Mail invalide';
    }
    return true;
  });




const app = createApp(App)

//globals components

app.component('BaseButton', BaseButton)
app.component('BaseIcon', BaseIcon)
app.component('BaseInput',BaseInput)
app.component('BaseTable',BaseTable)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})
app.use(Toast, {});


app.mount('#app')
