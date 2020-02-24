<template>
  <div class="garden">
    <h1 class="garden__title">This is a playground page</h1>
    <v-window v-model="initStep">
      <transition name="fade">
        <component
          :is="wizardStep"
          :value="value"
          @stepForward="stepForward"
          @stepBackward="stepBackward"
        />
      </transition>
    </v-window>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import RegisterStep1 from '@/components/RegisterWizard/RegisterStep1.vue'
import RegisterStep2 from '@/components/RegisterWizard/RegisterStep2.vue'
import RegisterStep3 from '@/components/RegisterWizard/RegisterStep3.vue'
import RegisterStep4 from '@/components/RegisterWizard/RegisterStep4.vue'

export default {
  name: 'Garden',

  created () {
    this.initStep = this.value
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

  computed: {
    ...mapGetters(['getStep']),
    value () {
      return this.getStep
    },
    wizardStep () {
      return `register-step-${this.getStep}`
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

<style scoped>
   .fade-enter-active{
        transition: opacity 1.5s;
    }
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
