<template>
  <div class="hy-table">
    <!-- 头部标题 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
      <slot name="headerHandler" />
    </div>

    <el-table
      :data="listData"
      border
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      />
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 尾部 -->
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array as PropType<any[]>,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array as PropType<any[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['selectionChange'])

const handleSelectionChange = (selection: any) => {
  emit('selectionChange', selection)
}
</script>

<style lang="less" scoped>
.header {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  .title {
    font-size: 20px;
    font-weight: 700;
  }
}

.footer {
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
