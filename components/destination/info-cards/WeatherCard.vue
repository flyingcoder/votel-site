<template>
  <div class="info-card">
    <div class="info-card-header">
      <p>
        <v-icon size="18">ac_unit</v-icon>
        Météo
      </p>
      <p class="is-capitalized">{{ date }}, Paris</p>
    </div>

    <div class="info-card-content">
      <span v-if="weather" style="flex: 1">{{ weather.main.temp }}&deg;</span>
      <span v-else>??&deg;</span>
      <span class="weather-icon-container">
        <img
          v-if="weather"
          class="weather-icon"
          :src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`"
          alt="Icon météo"
        />
      </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import axios from 'axios'

export default {
  name: 'weather-card',

  data () {
    return {
      weather: null
    }
  },

  computed: {
    date () {
      const now = moment()
      return now.locale('fr').tz('Europe/Paris').format('dddd DD MMMM YYYY')
    }
  },

  methods: {
    async getWeather () {
      const q = 'Paris,fr'
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=89809bba50d0c9f5a4e168834db04811&units=metric&lang=fr`

      try {
        const { data } = await axios.get(API_URL)
        this.weather = data
      } catch (e) {
        console.error(e)
        return 'erreur'
      }
    }
  },

  created () {
    this.getWeather()
  }
}
</script>

<style lang="scss" scoped>
.info-card {
  box-shadow: 0px 4px 10px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1);
  background-color: white;
  border-radius: 4px;
  max-height: 150px;
  padding: 1rem 1.5rem;

  margin: 1rem auto;

  .info-card-header {
    p {
      font-family: Roboto;
      font-size: 14px;
      color: #7b7b7b;
      margin-bottom: .3rem;
    }
    i {
      color: #2ac1fe;
    }
  }

  .info-card-content {
    display: flex;
    font-family: Roboto;
    color: #212121;
    font-size: 52px;
    font-weight: 300;

    .weather-icon-container {
      display: flex;
      align-items: center;

      .weather-icon {
        width: 64px;
        height: 64px;
      }
    }
  }
}
</style>
