<template>
  <div class="home">
    <HelloWorld :msg="$t('hello')"/>
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
