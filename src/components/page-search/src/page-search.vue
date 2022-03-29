<template>
  <div class="page-search">
    <HyForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">用户检索</h1>
      </template>
      <template #footer>
        <div class="btns">
          <el-button :icon="'Refresh'">重置</el-button>
          <el-button type="primary" :icon="'Search'">搜索</el-button>
        </div>
      </template>
    </HyForm>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { defineProps, ref } from 'vue'

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
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
