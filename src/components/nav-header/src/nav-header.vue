<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldChange">
      <component :is="isFold ? 'Expand' : 'Fold'" />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

// 导出事件，通知父组件 main.vue 处理左侧菜单的收缩折叠
const emit = defineEmits(['foldChange'])

const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
