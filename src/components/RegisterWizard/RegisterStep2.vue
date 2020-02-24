<template>
  <div>
    <window-item
      :value="value"
      :user="this.$store.getters.getUser.email"
      :outsideCols="outsideCols"
      :rules="passwordMatch"
      @stepForward="stepForward"
      @stepBackward="stepBackward"
    />
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import { mapGetters } from 'vuex'
import bcrypt from 'bcryptjs'
import { stringRules, passwordRules, passwordMatchRules } from '@/config/form-validations.js'
import WindowItem from '@/components/RegisterWizard/WindowItem.vue'

export default {
  name: 'RegisterStep2',

  created () {
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
          stepCount: i18n.t('wizard_steps.step') + '\t' + (this.value - 1) + '\t' + i18n.t('wizard_steps.step_of') + '\t' + this.value,
          title: i18n.t('register.title'),
          text: i18n.t('register.sign_up_for'),
          user: true,
          userStyle: 'text-center ml-1',
          form_field: [
            {
              value: '',
              id: 'first-name',
              label: i18n.t('form.input.first_name'),
              type: 'text',
              rules: stringRules
            },
            {
              value: '',
              id: 'last-name',
              label: i18n.t('form.input.last_name'),
              type: 'text',
              rules: stringRules
            },
            {
              value: '',
              id: 'password',
              label: i18n.t('form.input.password'),
              type: 'password',
              rules: passwordRules
            },
            {
              value: '',
              id: 'confirm',
              label: i18n.t('form.input.repeat_password'),
              type: 'password',
              rules: [
                v => !!v || i18n.t('form.validations.errors.confirm_password'),
                v => v === this.outsideCols[0].col2.form_field[2].value || i18n.t('form.validations.errors.password_not_match')
              ]
            }
          ],
          stepButtons: [
            {
              type: 'button',
              key: 'stepBackward',
              text: i18n.t('user_actions.previous_step'),
              disabled: false,
              color: 'secondary'
            },
            {
              type: 'submit',
              key: 'stepForward',
              text: i18n.t('user_actions.next_step'),
              color: 'primary'
            }
          ]
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
    value: 2,
    outsideCols: [],
    user: {
      password: '',
      hashedPassword: ''
    }
  }),

  computed: {
    ...mapGetters(['getUser']),
    passwordMatch () {
      let rules = []
      rules = passwordMatchRules(this.outsideCols[0].col2.form_field[2].value)
      return rules
    }
  },

  methods: {
    async hashPassword () {
      const saltRounds = 10
      this.user.password = this.outsideCols[0].col2.form_field[2].value
      await bcrypt
        .hash(this.user.password, saltRounds)
        .then(hash => {
          this.user.hashedPassword = hash
        })
        .catch(err => console.error(err.message))
    },
    async stepForward () {
      await this.hashPassword()
      const firstName = this.outsideCols[0].col2.form_field[0].value
      const lastName = this.outsideCols[0].col2.form_field[1].value
      const password = this.user.password
      const hashedPassword = this.user.hashedPassword
      this.$store.commit('setUserData', { firstName: firstName, lastName: lastName, password: password, hashedPassword: hashedPassword })
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
