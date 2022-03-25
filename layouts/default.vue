<template>
  <v-app>
    <votel-menu secondary />
    <v-content>
      <nuxt />
    </v-content>
    <votel-footer />
  </v-app>
</template>

<script>
import VotelMenu from '@/components/VotelMenu'
import VotelFooter from '@/components/VotelFooter'

// Google material icons
import 'material-design-icons/iconfont/material-icons.css'
// Google Roboto font
import 'typeface-roboto/index.css'

export default {
  name: 'default',
  components: { VotelMenu, VotelFooter }
}
</script>

<style lang="scss">
.container {
  max-width: 1440px;
}
</style>
