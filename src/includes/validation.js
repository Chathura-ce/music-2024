import {
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
  configure
} from 'vee-validate'
import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  max,
  max_value as maxValue,
  min,
  min_value as minValue,
  not_one_of as excluded,
  required
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          password_mismatch: `The password don't match.`,
          tos: `You must accept the terms of service.`
        }
        return messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
