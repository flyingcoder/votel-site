<template>
  <div>
    <page-header />
    <page-infos />
  </div>
</template>

<script>
import PageHeader from '@/components/destination/Header'
import PageInfos from '@/components/destination/Infos'

export default {
  layout: 'homepage',
  name: 'destination',
  components: { PageHeader, PageInfos }
}
</script>

<style lang="scss" scoped>

</style>
