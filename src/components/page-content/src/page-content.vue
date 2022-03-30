<template>
  <div class="page-content">
    <hy-table v-bind="contentTableConfig" :list-data="listData">
      <template #headerHandler>
        <el-button type="primary">
          {{ '新建 ' + pageName.toUpperCase() }}
        </el-button>
      </template>

      <template #status="scope">
        <el-button
          :type="scope.row.enable === 1 ? 'success' : 'danger'"
          plain
          size="small"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>

      <template #createAt="scope">
        {{ $filters.formatUtcString(scope.row.createAt) }}
      </template>

      <template #updateAt="scope">
        {{ $filters.formatUtcString(scope.row.updateAt) }}
      </template>

      <template #handler>
        <div class="handler-btns">
          <el-button type="text" :icon="'Edit'">编辑</el-button>
          <el-button type="text" :icon="'Delete'">删除</el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts" setup>
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'
import { defineProps, computed, PropType } from 'vue'

const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<any>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const listData = computed(() =>
  store.getters['system/pageListData'](props.pageName)
)
</script>

<style lang="less" scoped>
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
