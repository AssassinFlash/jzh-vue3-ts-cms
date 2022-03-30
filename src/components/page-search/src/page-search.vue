<template>
  <div class="page-search">
    <HyForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">{{ title }}</h1>
      </template>
      <template #footer>
        <div class="btns">
          <el-button :icon="'Refresh'" @click="handleResetClick">
            重置
          </el-button>
          <el-button type="primary" :icon="'Search'">搜索</el-button>
        </div>
      </template>
    </HyForm>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '用户检索'
  },
  searchFormConfig: {
    type: Object,
    required: true
  }
})

// 双向绑定的属性应该要由配置文件的field来决定
const formData = ref({})
const formItems = computed<any[]>(() => props.searchFormConfig.formItems)

const setFormKey = () => {
  const formKey: any = {}
  formItems.value.forEach((item) => {
    formKey[`${item.field}`] = ''
  })
  formData.value = formKey
}

// 点击重置按钮
const handleResetClick = () => {
  console.log('重置')
  setFormKey()
}

onMounted(() => setFormKey())
</script>

<style lang="less" scoped>
.header {
  color: #4d89db;
}

.btns {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  padding-bottom: 20px;

  .el-button {
    margin-right: 10px;
  }
}
</style>
