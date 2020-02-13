import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    primary: '#008940',
    accent: '#0279D7',
    secondary: '#9F9F9F',
    info: '#0279D7',
    warning: '#B71C1C',
    error: '#B71C1C',
    success: '#4CAf50'
  },
  customProperties: true
})
