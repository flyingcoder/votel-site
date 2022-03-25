<template>
  <header class="header">
    <v-container>
      <!-- Main menu -->
      <votel-menu />

      <!-- Slogan -->
      <div class="text-xs-center header-title">
        <h1 class="slogan">Réservez à domicile</h1>
        <h2 class="subtitle">Voyager n’a jamais été aussi facile !</h2>
      </div>

      <div class="search-form-container">
        <search-form />
      </div>
    </v-container>
  </header>
</template>

<script>
import VotelMenu from '@/components/VotelMenu'
import SearchForm from '@/components/search/Form'

export default {
  name: 'home-page-header',
  components: { VotelMenu, 'search-form': SearchForm }
}
</script>

<style lang="scss" scoped>
.header {
  background: url('/images/header_background.png') center bottom no-repeat, linear-gradient(#1ebfff 1.3%, #5acefb 56.1%, #61cefa 56.1%, #5bcefb 58.3%, #61cefa 58.3%, #9ddef7 87.6%, rgba(179, 227, 246, 239));
  background-size: auto;
  min-height: 615px;
  padding-top: 20px;

  @media screen and (max-width: 600px) {
    padding-top: 0;
    min-height: 313px;
    background-size: cover;
  }

  /deep/ .container {
    padding: 1rem 0;
  }
}

.header-title {
  color: white;
}

.slogan {
  font-size: 64px;
  text-shadow: 0px 4px 10px rgba(#646d82, 0.14), 0px 0px 1px rgba(#646d82, 0.14);
  padding-top: 6.5rem;
  font-weight: normal;
  letter-spacing: 0.03em;

  @media screen and (max-width: 600px) {
    padding-top: 2rem;
    font-size: 32px;
  }
}

.subtitle {
  font-family: Roboto;
  text-shadow: 0px 2px 4px rgba(#000000, .14);
  font-weight: 300;
  letter-spacing: 0.04em;
  font-size: 12px;

  @media screen and (min-width: 601px) {
    line-height: 0;
    font-size: 22px;
    letter-spacing: 0.03em;
  }
}

.search-form-container {
  height: 1px;
  margin-top: 9.5rem;

  @media screen and (max-width: 600px) {
    margin-top: 6.5rem;
  }
}
</style>
