<template>
  <v-layout class="coming-soon">
    <div>
      <p>Ce service sera<br/>très bientôt disponible</p>
      <nuxt-link to="/">Revenir à l'accueil</nuxt-link>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'coming-soon'
}
</script>

<style lang="scss" scoped>
.coming-soon {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(white, .95);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-size: 60px;

    @media screen and (max-width: 700px) {
      font-size: 28px;
    }
  }

  a {
    font-family: Roboto;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    color: #2ac1fe;
  }
}
</style>
