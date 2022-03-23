<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" type="text" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import rules from '../config/account-config'
import { ElForm } from 'element-plus'
import { ref, reactive, defineExpose } from 'vue'

// form 表单的 ref
const formRef = ref<InstanceType<typeof ElForm>>()

// 数据源
const account = reactive({
  name: '',
  password: ''
})

// 登录
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('account 开始登录')
    }
  })
}

// 导出登录方法供父组件调用
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 10px;
  }
}
:deep(.el-form-item--default .el-form-item__error) {
  margin-top: 5px;
}
</style>
