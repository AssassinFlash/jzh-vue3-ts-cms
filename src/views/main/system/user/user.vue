<template>
  <div class="user">
    <!-- 搜索表单 -->
    <PageSearch :search-form-config="formConfig" />

    <!-- 表格组件 -->
    <PageContent :content-table-config="contentTableConfig" page-name="user" />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import formConfig from './config/search.config'
import PageContent from '@/components/page-content'
import contentTableConfig from './config/content.config'
</script>

<style lang="less" scoped></style>
