<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldChange">
      <component :is="isFold ? 'Expand' : 'Fold'" />
    </el-icon>

    <div class="content">
      <div>
        <HyBreadCrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HyBreadCrumb from '@/base-ui/breadcrumb'
import UserInfo from './cpns/user-info'
import type { IBreadCrumb } from '@/base-ui/breadcrumb'
import { _recursePathMapBreadCrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { ref, defineEmits, watch, computed } from 'vue'

const route = useRoute()
const store = useStore()

// 导出事件，通知父组件 main.vue 处理左侧菜单的收缩折叠
const emit = defineEmits(['foldChange'])

// 左侧菜单收缩状态
const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

// 面包屑数据：[{name: xxx, path: xxx}]
const userMenus = computed(() => store.state.login.userMenus)
const breadcrumbs = ref<IBreadCrumb[]>([])
const setBreadCrumbs = () => {
  breadcrumbs.value = _recursePathMapBreadCrumbs(userMenus.value, route.path)
}

watch(
  () => route.path,
  () => {
    setBreadCrumbs()
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
