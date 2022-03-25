<template>
  <div class="destination-info">
    <h2 class="section-title text-xs-center">Infos pratiques</h2>

    <v-container>
      <v-layout wrap align-center justify-center>
        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <time-card />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <weather-card />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <airport-distance-card />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <currency-card />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <food-card type="sandwitch" price="4.0" />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <food-card type="cafe" price="2.5" />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <exchange-rate-card type="official" rate="137" />
        </v-flex>

        <v-flex lg3 md4 sm6 xs12 class="info-card-container">
          <exchange-rate-card type="alternative" rate="210" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TimeCard from '@/components/destination/info-cards/TimeCard'
import WeatherCard from '@/components/destination/info-cards/WeatherCard'
import AirportDistanceCard from '@/components/destination/info-cards/AirportDistanceCard'
import CurrencyCard from '@/components/destination/info-cards/CurrencyCard'
import FoodCard from '@/components/destination/info-cards/FoodCard'
import ExchangeRateCard from '@/components/destination/info-cards/ExchangeRateCard'

export default {
  name: 'destionation-info',
  components: {
    TimeCard,
    WeatherCard,
    AirportDistanceCard,
    CurrencyCard,
    FoodCard,
    ExchangeRateCard
  }
}
</script>

<style lang="scss" scoped>
.destination-info {
  background-image: linear-gradient(-180deg, rgba(245, 245, 245, 1) 0%, rgba(255, 255, 255, 1) 100%);
  padding: 3rem 0;

  @media screen and (max-width: 960px) {
    padding-top: 150px;
  }

  @media screen and (max-width: 750px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 435px) {
    padding-top: 160px;
  }

  .section-title {
    color: #4d4d4d;
    font-size: 48px;
    font-weight: normal;

    @media screen and (max-width: 600px) {
      font-size: 38px;
    }
  }

  .info-card-container {
    padding: 0 1rem;

    @media screen and (max-width: 600px) {
      padding: 0;
    }
  }
}
</style>
