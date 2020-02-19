<template>
  <div>
    <window-item
      :value="value"
      :user="this.$store.state.userData.email"
      :outsideCols="outsideCols"
      @stepForward="stepForward"
    />
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import { mapState } from 'vuex'
import WindowItem from '@/components/RegisterWizard/WindowItem.vue'

export default {
  name: 'RegisterStep3',

  created () {
    this.value = 3
    this.outsideCols = [
      {
        hasRow: true,
        sm: '12',
        class: 'pt-12',
        col1: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '3',
          lg: '3',
          class: 'pt-0 ma-auto',
          stepCount: i18n.t('wizard_steps.step') + '\t' + (this.value - 1) + '\t' + i18n.t('wizard_steps.step_of') + '\t' + (this.value - 1),
          title: i18n.t('register.title'),
          text: i18n.t('register.sign_up_for') + '\t',
          user: true,
          userStyle: 'text-center ml-1'
        },
        col3: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        }
      },
      {
        hasRow: true,
        sm: '12',
        class: 'pt-6',
        col1: {
          md: '2',
          lg: '3',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '8',
          lg: '6',
          class: 'pt-0 ma-auto',
          hasTabs: true
        },
        col3: {
          md: '2',
          lg: '3',
          class: 'hidden-sm-and-down'
        }
      },
      {
        hasRow: true,
        sm: '12',
        class: 'pt-0',
        col1: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '3',
          lg: '3',
          class: 'pt-0 ma-auto',
          form_checkbox: [
            {
              model: false,
              label: i18n.t('register.terms_of_use.checkbox'),
              disabled: false,
              mandatory: true
            },
            {
              model: false,
              label: i18n.t('register.privacy_policy.checkbox'),
              disabled: false,
              mandatory: true
            },
            {
              model: false,
              label: i18n.t('register.newsletter.checkbox'),
              disabled: false,
              mandatory: false
            }
          ]
        },
        col3: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        }
      },
      {
        hasRow: true,
        sm: '12',
        class: 'pt-0',
        col1: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '3',
          lg: '3',
          class: 'pt-0 ma-auto',
          text: 'Rechapta will go here'
        },
        col3: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        }
      },
      {
        hasRow: true,
        sm: '12',
        class: 'pt-0',
        col1: {
          md: '4',
          lg: '4',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '3',
          lg: '3',
          class: 'pt-0 ma-auto',
          stepButtons: [
            {
              type: 'button',
              text: i18n.t('user_actions.previous_step'),
              disabled: false,
              color: 'secondary'
            },
            {
              type: 'submit',
              text: i18n.t('user_actions.next_step'),
              color: 'primary'
            }
          ]
        },
        col3: {
          md: '4',
          lg: '4',
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
    ...mapState(['userData'])
  },

  methods: {
    stepForward () {
      this.$emit('stepForward')
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
