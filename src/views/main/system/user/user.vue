<template>
  <div class="user">
    <div class="search">
      <HyForm v-bind="searchformConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import searchformConfig from './config/search.config'
</script>

<style scoped></style>
