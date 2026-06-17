import { createApp } from 'vue'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import './assets/main.css'

// Gold / bronze brand palette derived from the MAGIC photo logo
const MagicPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fbf6e9',
      100: '#f4e7c3',
      200: '#ecd699',
      300: '#e0c56e',
      400: '#d2af4c',
      500: '#c29a30',
      600: '#a87f22',
      700: '#8a6519',
      800: '#6e4f13',
      900: '#523a0e',
      950: '#3a2909',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.600}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.700}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.800}',
          focusColor: '{primary.900}',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MagicPreset,
    options: {
      darkModeSelector: '.app-dark',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
app.use(ToastService)
app.use(ConfirmationService)

app.mount('#app')
