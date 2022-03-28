<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <el-col
          v-for="(item, index) in formItems"
          :key="index"
          v-bind="colWidth"
        >
          <el-form-item :label="item.label" :style="itemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" style="width: 100%">
                <el-option
                  v-for="(option, i) in item.options"
                  :key="i"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <template v-else>
              <el-date-picker v-bind="item.otherOptions" style="width: 100%" />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { IFormItem } from '../types'
import { defineProps, PropType } from 'vue'

defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colWidth: {
    type: Object,
    default: () => ({
      xg: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
</script>

<style lang="less" scoped>
.hy-form {
  padding-top: 20px;
}
</style>
