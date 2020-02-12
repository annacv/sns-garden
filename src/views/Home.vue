<template>
  <div class="home">
    <img alt="SonoSuite logo" src="../assets/logo.png" class="app__brand">
    <HelloWorld :msg="$t('hello')"/>
    <h2>{{ $t('hello') }}</h2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LayoutHello from '@/layouts/LayoutHello.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  created () {
    this.$emit('update:layout', LayoutHello)
  }
}
</script>
