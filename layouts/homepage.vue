<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <votel-footer />
  </v-app>
</template>

<script>
import VotelFooter from '@/components/VotelFooter'

// Google material icons
import 'material-design-icons/iconfont/material-icons.css'
// Google Roboto font
import 'typeface-roboto/index.css'

export default {
  name: 'homepage',
  components: { VotelFooter }
}
</script>

<style lang="scss">
.container {
  max-width: 1440px;
}
</style>
