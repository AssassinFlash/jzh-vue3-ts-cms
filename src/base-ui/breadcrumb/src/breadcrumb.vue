<template>
  <div>
    <el-breadcrumb :separator-icon="'ArrowRight'">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <el-breadcrumb-item
          v-if="breadcrumb.path"
          :to="{ path: breadcrumb.path }"
        >
          {{ breadcrumb.name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>
          {{ breadcrumb.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IBreadCrumb } from '../types'

defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadCrumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
:deep(.el-breadcrumb__inner) {
  color: black !important;
}
</style>
