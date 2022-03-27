<template>
  <div class="user-info">
    <el-dropdown>
      <div class="avatar">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="user-name">{{ userName }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon>
              <Close />
            </el-icon>
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const userName = computed(() => store.state.login.userInfo.name)
</script>

<style lang="less" scoped>
.user-info {
  .avatar {
    display: flex;
    align-items: center;
  }

  .user-name {
    padding-left: 15px;
  }
}
</style>
