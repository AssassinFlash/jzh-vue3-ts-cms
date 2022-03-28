<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapsed" class="title">Vue3+TS员工后台</span>
    </div>

    <el-menu
      :collapse="isCollapsed"
      :default-active="activeIndex"
      class="el-menu-vertical"
      unique-opened
      router
      background-color="#001529"
      text-color="#d2d5da"
      active-text-color="#f8d263"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <el-sub-menu
          v-if="item.children && item.children.length > 0"
          :index="item.url"
        >
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.url">
              <template #title>
                <span>{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <el-menu-item v-else :index="item.url">
          <template #title>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { ref, computed, defineProps, watchEffect } from 'vue'

defineProps(['isCollapsed'])

const store = useStore()
const route = useRoute()

// 菜单默认激活项：解决刷新时丢失菜单激活项的问题
// 值为当前路由
const activeIndex = ref('')
const setActiveIndex = () => {
  activeIndex.value = route.path
}

// 获取用户菜单
const userMenus = computed(() => {
  return store.state.login.userMenus.map((item: { icon: string }) => {
    // 处理图标
    item.icon = item.icon.replace(/^el-icon/, '')
    return item
  })
})

watchEffect(() => setActiveIndex())
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    height: 28px;
    padding: 12px 10px 8px 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      line-height: 28px;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 二级菜单背景
  .el-sub-menu {
    background-color: #001529 !important;
    // 一级菜单背景
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  // 二级菜单字体
  :deep(.el-sub-menu__title) {
    color: #d2d5da;
    background-color: #001529 !important;
  }

  // 一级菜单字体
  .el-menu-item {
    color: #d2d5da;
  }

  // 一级菜单高亮字体
  .el-menu-item:hover {
    color: #f8d263 !important;
    background-color: #4d89db !important;
  }

  // 一级菜单激活背景和字体
  .el-menu-item.is-active {
    color: #f8d263 !important;
    background-color: #4d89db !important;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
