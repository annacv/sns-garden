<template>
  <component :is="layout" id="app" class="app">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
import '@/assets/scss/app.scss'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
  name: 'App',

  data () {
    return {
      layout: 'layout-default'
    }
  },

  components: {
    'layout-default': LayoutDefault
  }
}
</script>
