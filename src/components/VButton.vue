<template>
  <v-btn
    :block="block"
    :class="className"
    @click.prevent="onClick"
    :color="color"
    :dark="dark"
    :depressed="depressed"
    :disabled="disabled"
    :outlined="outlined"
    :type="type"
  >
    <slot v-if="isLeft">
      <v-icon
        v-if="iconContent"
        :class="iconClass"
      >
        {{ iconContent }}
      </v-icon>
      {{ buttonText }}
    </slot>
    <slot v-else>
      {{ buttonText }}
      <v-icon
        v-if="iconContent"
        :class="iconClass"
      >
        {{ iconContent }}
      </v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    block: {
      type: Boolean,
      default: false
    },

    buttonText: {
      type: String,
      default: ''
    },

    className: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: 'primary'
    },

    dark: {
      type: Boolean,
      default: false
    },

    depressed: {
      type: Boolean,
      default: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    iconClass: {
      type: String,
      default: ''
    },

    iconContent: {
      type: String,
      default: ''
    },

    isLeft: {
      type: Boolean,
      default: true
    },

    outlined: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'submit'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .v-btn {
    text-transform: none;
  }
</style>
