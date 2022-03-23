<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { ref } from 'vue'

// LoginAccount 组件的ref，对ts来说，指定它为该组件的类型
const accountRef = ref<InstanceType<typeof LoginAccount>>()

// 绑定记住密码
const isKeepPassword = ref(true)

// 点击登录
const handleLoginClick = () => {
  accountRef.value?.loginAction()
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-top: -200px;
  width: 350px;

  .title {
    text-align: center;
  }

  :deep(.el-icon) {
    vertical-align: -0.15em;
    margin-right: 10px;
  }

  .account-control {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    padding-right: 20px;
  }

  .login-btn {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
}
</style>
