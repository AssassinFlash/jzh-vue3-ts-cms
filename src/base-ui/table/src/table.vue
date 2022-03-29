<template>
  <div class="hy-table">
    <el-table :data="listData" border stripe style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <!-- 通过 scope.row 获取某一行的内容，再通过.xxx获取行内某一个字段的值 -->
          <template #default="scope">
            <!-- 动态绑定 slot 的名字，这样父组件可根据作用域名修改指定 slot -->
            <!-- 返回该行数据给父组件 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
})
</script>

<style lang="less" scoped>
.hy-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
