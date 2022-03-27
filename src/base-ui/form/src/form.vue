<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colWidth">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input :placeholder="item.placeholder" show-password />
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                />
              </template>
              <template v-else>
                <el-select
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(option, i) in item.options"
                    :key="i"
                    :label="option.title"
                    :value="option.value"
                  />
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { IFormItem } from '@/base-ui/form/types'
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
      xl: 6, // > 1920: 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
</script>

<style scoped>
.hy-form {
  padding-top: 20px;
}
</style>
