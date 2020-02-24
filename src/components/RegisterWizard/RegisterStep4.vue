<template>
  <div>
    <window-item
      :value="value"
      :user="this.$store.getters.getUser.email"
      :outsideCols="outsideCols"
      @stepBackward="stepBackward"
      @stepForward="stepForward"
    />
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import { mapGetters } from 'vuex'
import WindowItem from '@/components/RegisterWizard/WindowItem.vue'

export default {
  name: 'RegisterStep4',

  created () {
    this.value = 4
    this.outsideCols = [
      {
        hasRow: true,
        sm: '12',
        class: 'pt-12',
        col1: {
          md: '4',
          lg: '4',
          xl: '5',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '3',
          lg: '3',
          xl: '2',
          class: 'pt-0 ma-auto',
          icon: 'mdi-rocket',
          title: i18n.t('register.completed.title'),
          text: i18n.t('register.completed.text'),
          user: true,
          userStyle: 'text-center font-weight-bold d-block pa-8',
          stepButtons: [
            {
              type: 'button',
              key: 'stepBackward',
              text: i18n.t('user_actions.previous_step'),
              disabled: false,
              color: 'secondary'
            },
            {
              type: 'button',
              key: 'stepForward',
              text: i18n.t('user_actions.verify_email'),
              disabled: false,
              color: 'primary',
              outlined: true
            }
          ],
          caption: i18n.t('register.completed.caption')
        },
        col3: {
          md: '4',
          lg: '4',
          xl: '5',
          class: 'hidden-sm-and-down'
        }
      }
    ]
  },

  data: () => ({
    value: '',
    outsideCols: []
  }),

  computed: {
    ...mapGetters(['getUser'])
  },

  methods: {
    stepForward (e) {
      console.log('resend verification email')
    },
    stepBackward () {
      this.$emit('stepBackward')
    }
  },

  components: {
    'window-item': WindowItem
  }
}
</script>
