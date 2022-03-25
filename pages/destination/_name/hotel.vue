<template>
  <div>
    <page-header destination="paris" />
    <page-infos />
    <hotel-list />
    <change-type type="vol" destination="Paris" />
  </div>
</template>

<script>
import PageHeader from '@/components/destination/Header'
import PageInfos from '@/components/destination/Infos'
import HotelList from '@/components/destination/HotelList'
import ChangeType from '@/components/destination/ChangeType'

export default {
  layout: 'homepage',
  name: 'destination',
  components: { PageHeader, PageInfos, HotelList, ChangeType }
}
</script>

<style lang="scss">
.is-capitalized {
  text-transform: capitalize;
}
</style>
