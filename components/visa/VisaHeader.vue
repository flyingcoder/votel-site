<template>
  <div class="visa-header text-xs-center">
    <!-- Image destination -->
    <img v-if="image" :src="image" :alt="`Image ${destination}`" class="visa-image"/>

    <!-- Titre page -->
    <h1 class="visa-title">
      <slot name="title">E-Visa {{ destination }}</slot>
    </h1>

    <!-- Description destination -->
    <div class="description">
      <v-container>
        <slot name="description"></slot>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'visa-header',
  props: {
    image: String,
    destination: String
  }
}
</script>

<style lang="scss" scoped>
  .visa-header {
    padding: 4rem 0 3rem 0;
  }

  .visa-image {
    -webkit-user-drag: none;
    user-select: none;

    max-width: 100%;
    height: auto;
  }

  .visa-title {
    font-size: 64px;
    padding-top: 1rem;
    font-weight: normal;
    color: #0d253e;
    letter-spacing: 0.03em;

    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
  }

  .description {
    padding: 2rem;
    padding-bottom: 0;
    font-family: Roboto;
    font-size: 20px;
    color: #242424;
    letter-spacing: 0.03em;
    line-height: 32px;

    @media screen and (max-width: 600px) {
      padding: 0 1rem;
      text-align: justify;
      font-size: 18px;
      color: rgba(black, .6);
    }
  }
</style>
