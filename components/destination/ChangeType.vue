<template>
  <div class="change-type">
    <h4 class="change-type-title text-xs-center">
      Trouvez des {{ type }}s pas chère à {{ destination }}
    </h4>

    <div class="switch-button-container">
      <nuxt-link to="">
        <img src="/icons/plane_round.png" alt="Icon avion">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'destination-change-type',
  props: ['type', 'destination']
}
</script>

<style lang="scss" scoped>
.change-type {
  padding: 4rem 0;

  .change-type-title {
    font-size: 46px;
    font-weight: normal;
    color: #4d4d4d;

    @media screen and (max-width: 700px) {
      font-size: 32px;
    }
  }

  .switch-button-container {
    text-align: center;
    padding-top: 1rem;

    @media screen and (max-width: 700px) {
      padding-top: 2rem;

      img {
        width: 150px;
      }
    }
  }
}
</style>
