<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" type="text" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
// 整个组件导出的只是一个组件的描述，可以看做是一个类似于 类 这样的一个概念，但不是一个类
// 另一个vue文件中，使用了该组件<demo /> 是根据这些描述创建出来一个组件的实例
// 在ts文件中，如果另一个文件想要使用该组件实例的某些方法，就需要传入这个类的类型
// 比如：const p = ref<Person>()
// 因此，对于组件描述来说，获取这个组件描述的类型，就要考虑到 typeof 关键字
// 而 对于组件描述，只使用 typeof 关键字是不够的，
// 因为实际上，ref<Person>这里表示的是 拥有构造函数的实例，因此要配合InstanceType<>来使用
// 即 const p = ref<Person>()可以等价于下面：
// type Bar = InstanceType<typeof Person>; const p = ref<Bar>()
// 牢记：const p = ref<Person>() <=> const p = ref<InstanceType<typeof Person>>()
// 所以，对于组件描述而言，想要获取这个组件描述对应的拥有构造函数的实例，就通过 InstanceType<typeof xxx>获取
import rules from '../config/account-config'
import localCache from '@/utils/cache'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { ref, reactive, defineExpose } from 'vue'

const store = useStore()

// form 表单的 ref
const formRef = ref<InstanceType<typeof ElForm>>()

// 数据源
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 登录
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1. 判断是否需要记住密码
      if (isKeepPassword) {
        // 进行本地缓存
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
      // 2. 开始进行登录验证
      store.dispatch('login/accountLoginAction', { ...account })
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
