<template>
  <div class="a-propos">
    <v-container>
      <a-propos-title />
      <a-propos-infos />
      <a-props-numbers />
      <a-props-partners />
    </v-container>
  </div>
</template>

<script>
import AProposTitle from '@/components/apropos/Title'
import AProposInfos from '@/components/apropos/Infos'
import AProposNumbers from '@/components/apropos/Numbers'
import AProposPartners from '@/components/apropos/Partners'

export default {
  name: 'a-propos',
  components: {
    AProposTitle,
    AProposInfos,
    'a-props-numbers': AProposNumbers,
    'a-props-partners': AProposPartners
  }
}
</script>

<style lang="scss" scoped>
.a-propos {
  padding: 5rem 0;
  background-color: white;

  @media screen and (max-width: 960px) {
    padding: 1rem 0;
  }
}
</style>
