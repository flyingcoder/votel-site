<template>
  <header class="header">
    <v-container>
      <!-- Main menu -->
      <votel-menu />

      <!-- Slogan -->
      <div class="header-title">
        <h1 class="slogan">
          Trouvez des vols pas chèrs pour
          <span class="is-capitalized">{{ destination }}</span>
        </h1>
        <h2 class="subtitle">
          Les meilleur offres des vols pour
          <span class="is-capitalized">{{ destination }}</span>
        </h2>
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
  props: ['destination'],
  components: { VotelMenu, 'search-form': SearchForm }
}
</script>

<style lang="scss" scoped>
.header {
  background: url('/images/paris.jpg') no-repeat bottom;
  background-size: cover;
  min-height: 665px;
  padding-top: 20px;

  /deep/ .container {
    padding: 1rem 0;
  }

  .header-title {
    max-width: 1065px;
    margin: auto;
    padding-top: 6rem;

    @media screen and (max-width: 1065px) {
      padding: 6rem 1rem 0 1rem;
    }

    @media screen and (max-width: 750px) {
      padding: 3rem 1rem 0 1rem;
    }

    .slogan {
      font-size: 64px;
      color: white;
      font-weight: normal;
      text-shadow: 0px 4px 10px rgba(100, 109, 130, 0.14), 0px 0px 1px rgba(100, 109, 130, 0.1);
      letter-spacing: 0.03em;
      max-width: 650px;

      @media screen and (max-width: 750px) {
        font-size: 42px;
      }
    }

    .subtitle {
      font-size: 24px;
      color: white;
      font-weight: normal;
      letter-spacing: 0.03em;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
      padding-top: 1rem;

      @media screen and (max-width: 750px) {
        font-size: 14px;
      }
    }
  }

  .search-form-container {
    padding-top: 3rem;
    height: 1px;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }
}
</style>
