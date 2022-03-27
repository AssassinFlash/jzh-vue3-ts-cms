<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapsed ? '60px' : '210px'">
        <NavMenu :is-collapsed="isCollapsed" />
      </el-aside>

      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { ref } from 'vue'

// 处理菜单折叠
const isCollapsed = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapsed.value = isFold
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-content {
    height: 100%;

    .page {
      .page-header {
        height: 48px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #333;
      }

      .page-content {
        height: calc(100% - 48px);
        background-color: #f0f2f5;
        text-align: center;
        color: #333;

        .page {
          background: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}

.el-aside {
  background-color: #001529;
  text-align: left;
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 0.3s linear;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
