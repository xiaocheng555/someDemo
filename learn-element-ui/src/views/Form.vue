<template>
  <c-form :rules="rules" :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" @finish="submitForm('numberValidateForm')">
    <c-form-item
      label="年龄"
      prop="age"
    >
      <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
    </c-form-item>
    <c-form-item>
      <c-button nativeType="submit">提交</c-button>
      <c-button @click="resetForm('numberValidateForm')">重置</c-button>
    </c-form-item>
  </c-form>
</template>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        },
        rules: {
          age: [
            { required: true, message: '年龄不能为空'},
            { type: 'number', message: '年龄必须为数字值'}
          ]
        }
      };
    },
    methods: {
      submitForm () {
        console.log('submit')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
