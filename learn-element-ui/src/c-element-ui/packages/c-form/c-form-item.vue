<template>
  <div>
    {{this.prop}} |
    <span>{{label}}</span>
    <slot></slot>
    {{errorMsg}}
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  name: 'c-form-item',
  inject: ['CForm'],
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    },
    rules: {
      type: Array
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelWidth: {
      type: String
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    inlineMessage: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  computed: {
    model () {
      return this.CForm.model
    },
    formRules () {
      return this.CForm.rules
    },
    fullRules () {
      console.log(this.prop, 'this.prop')
      if (!this.prop) return null

      const rules = []
      if (this.rules) {
        rules.push(...this.rules)
      }
      const rules2 = this.formRules[this.prop]
      if (Array.isArray(rules2)) {
        rules.push(...rules2)
      } else if (typeof rules === 'object') {
        rules.push(rules2)
      }
      return {
        [this.prop]: rules
      }
    }
  },
  methods: {
    async validate () {
      this.errorMsg = ''
      console.log(this.fullRules, 'this.fullRules')
      if (!this.prop) return

      if (!this.validator) {
        this.validator = new Schema(this.fullRules)
      } else {
        this.validator.define(this.fullRules)
      }
      return this.validator.validate(this.model).catch((error) => {
        this.errorMsg = error.errors[0].message
        return Promise.reject(this.errorMsg)
      })
    },
    resetField () {

    },
    clearValidate () {

    },
    getRules () {

    }
  },
  created () {
    console.log(this.CForm, 'this.CForm')
    this.CForm?.registerField(this)
  },
  beforeDestroy () {
    this.CForm?.unregisterField(this)
  }
}
</script>

<style lang='less' scoped>
</style>
