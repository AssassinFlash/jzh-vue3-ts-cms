<template>
  <div class="user">
    <!-- 搜索表单 -->
    <PageSearch :search-form-config="formConfig" />

    <!-- 表格组件 -->
    <HyTable :list-data="userList" :prop-list="propList">
      <!-- 拿到子组件返回的某一行的内容，再通过.xxx 获取行内某一个字段的值 -->
      <template #status="scope">
        <el-button :type="scope.row.enable === 1 ? 'success' : 'danger'">
          {{ scope.row.enable === 1 ? '启用' : '禁用' }}
        </el-button>
      </template>
    </HyTable>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import formConfig from './config/search.config'
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)

const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '姓名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '150' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' }
]
</script>

<style lang="less" scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
