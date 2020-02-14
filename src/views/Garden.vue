<template>
  <div class="garden">
    <h1 class="garden__title">This is a playground page</h1>
    <v-window>
      <window-item :value="value" :outsideCols="outsideCols"/>
    </v-window>
  </div>
</template>

<script>
import i18n from '../plugins/i18n'
// import { emailRules } from '@/config/form-validations.js'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import WindowItem from '@/components/RegisterWizard/WindowItem.vue'

export default {
  name: 'Garden',

  created () {
    this.$emit('update:layout', LayoutDefault)
  },

  data: () => ({
    value: 1,
    outsideCols: [
      {
        hasRow: true,
        sm: '6',
        class: 'pt-12',
        col1: {
          md: '2',
          lg: '3',
          class: 'hidden-sm-and-down'
        },
        col2: {
          md: '8',
          lg: '6',
          class: 'pt-0',
          title: i18n.t('register.title'),
          subtitle: i18n.t('register.subtitle'),
          text: i18n.t('register.have_account'),
          link_to_url: i18n.t('register.link_to_url'),
          link_to_text: i18n.t('register.link_to'),
          form_field: [
            {
              value: '',
              id: 'email',
              label: i18n.t('form.input.email'),
              type: 'email',
              rules: 'emailRules'
            }
          ],
          button: i18n.t('user_actions.next_step'),
          other_options: 'OR',
          social_form: [
            {
              type: 'button',
              text: i18n.t('user_actions.register_with'),
              name: 'Facebook',
              color: '#4267B2',
              isDark: true,
              outlined: false,
              iconClass: 'mr-2',
              iconContent: 'mdi-facebook',
              left: true
            },
            {
              type: 'button',
              text: i18n.t('user_actions.register_with'),
              name: 'Google',
              color: '#4a4a4a',
              isDark: false,
              outlined: true,
              iconClass: 'mr-2',
              iconContent: 'mdi-google'
            },
            {
              type: 'button',
              text: i18n.t('user_actions.register_with'),
              name: 'Spotify',
              color: '#1DB954',
              isDark: true,
              outlined: false,
              iconClass: 'ml-2',
              iconContent: 'mdi-spotify',
              left: false
            }
          ]
        },
        col3: {
          md: '2',
          lg: '3',
          class: 'hidden-sm-and-down'
        }
      },
      {
        hasRow: false,
        sm: '6',
        class: 'hidden-xs-only',
        image: {
          src: 'https://images.unsplash.com/photo-1528079544986-379ac624aba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
      }
    ]
  }),

  components: {
    'window-item': WindowItem
  }
}
</script>
