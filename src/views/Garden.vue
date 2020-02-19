<template>
  <div class="garden">
    <h1 class="garden__title">This is a playground page</h1>
    <v-window v-model="initStep">
      <register-step-1 @stepForward="stepForward"/>
      <register-step-2 @stepForward="stepForward"/>
      <register-step-3 @stepForward="stepForward"/>
      <register-step-4/>
    </v-window>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import RegisterStep1 from '@/components/RegisterWizard/RegisterStep1.vue'
import RegisterStep2 from '@/components/RegisterWizard/RegisterStep2.vue'
import RegisterStep3 from '@/components/RegisterWizard/RegisterStep3.vue'
import RegisterStep4 from '@/components/RegisterWizard/RegisterStep4.vue'

export default {
  name: 'Garden',

  created () {
    this.$emit('update:layout', LayoutDefault)
  },

  data: () => ({
    initStep: 1
  }),

  methods: {
    stepForward () {
      this.$store.commit('setStep', ++this.initStep)
    },
    stepBackward () {
      this.$store.commit('setStep', --this.initStep)
    }
  },

  components: {
    'register-step-1': RegisterStep1,
    'register-step-2': RegisterStep2,
    'register-step-3': RegisterStep3,
    'register-step-4': RegisterStep4
  }
}
</script>
