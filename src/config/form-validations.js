import i18n from '../plugins/i18n'

export const emailRules = [
  v => !!v || i18n.t('form.validations.errors.email_required'),
  v => /.+@.+/.test(v) || i18n.t('form.validations.errors.email_valid')
]

export const passwordRules = [
  v => !!v || i18n.t('form.validations.errors.password_required'),
  v => v.length >= 5 || i18n.t('form.validations.errors.password_min_length'),
  v => v.length <= 10 || i18n.t('form.validations.errors.password_max_length')
]

export const passwordMatchRules = (param) => [
  v => !!v || i18n.t('form.validations.errors.confirm_password'),
  v => v === param || i18n.t('form.validations.errors.password_not_match')
]
export const stringRules = [
  v => !v.match(/[0-9\W]+/g) || i18n.t('form.validations.errors.only_letters')
]
