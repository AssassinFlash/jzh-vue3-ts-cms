<template>
  <div class="role">
    <PageSearch :search-form-config="searchFormConfig" title="角色检索" />

    <PageContent :content-table-config="contentTableConfig" page-name="role" />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import searchFormConfig from './config/search.config'
import PageContent from '@/components/page-content'
import contentTableConfig from './config/content.config'
</script>

<style scoped></style>
