<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'c-form',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
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
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      CForm: this
    }
  },
  created () {
    this.fields = new Set()
  },
  methods: {
    onSubmit () {
      this.validate().then(() => {
        this.$emit('finish', this.model)
      }).catch((err) => {
        this.$emit('fail', err)
      })
    },
    registerField (field) {
      this.fields.add(field)
      return () => {
        this.unregisterField(field)
      }
    },
    unregisterField (field) {
      this.fields.delete(field)
    },
    validate (callback) {
      return this._validateFields(Array.from(this.fields), callback)
    },
    validateField (names, callback) {
      const targetFields = this.findFields(names)
      return this._validateFields(targetFields, callback)
    },
    _validateFields (fields, callback) {
      const promisesToRun = []
      fields.forEach(item => {
        promisesToRun.push(item.validate())
      })
      return Promise.all(promisesToRun).then(() => {
        callback && callback(true)
        return true
      }).catch((err) => {
        callback && callback(false)
        throw err
      })
    },
    resetFields () {
      for (const field of this.fields) {
        field.resetField()
      }
    },
    clearValidate (names) {
      const targetFields = typeof names === 'undefined' ? this.findFields(names) : Array.from(this.fields)
      targetFields.forEach(field => {
        field.clearValidate()
      })
    },
    findFields (names) {
      const result = []
      if (typeof names === 'string') {
        const field = this.fields.get(names)
        if (field) {
          result = [field]
        }
      } else if (Array.isArray(names)) {
        for (const field of this.fields) {
          if (names.indexCludes(field.prop)) {
            result.push(field)
          }
        }
      }
      return result
    }
  }
}
</script>

<style lang='less' scoped>
</style>
