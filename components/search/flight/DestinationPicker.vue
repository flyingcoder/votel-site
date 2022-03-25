<template>
   <v-select
    class="destination-picker"
    :search-input.sync="search"
    :items="items"
    v-model="destination"
    offset-y
    placeholder="Ville ou aéroport"
    autocomplete
    browser-autocomplete="addr"
    append-icon=""
    :prepend-icon="type === 'dep' ? 'flight_takeoff' : 'flight_land'"
    clearable
    :loading="loading"
    @input="update"
    item-text="name"
    item-value="code"
  >
    <template slot="item" slot-scope="data">
      <v-list-tile-content>
        <v-list-tile-title>
          <v-icon size="18">flight</v-icon>
          <span class="location-name">{{ data.item.name }}</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </template>
  </v-select>
</template>

<script>
import { debounce } from 'lodash'
import axios from 'axios'
import DESTINATION_ALG from '~/assets/destinations-algeria.json'

const API_URL = '/api/airport-search'
const DEBOUNCE_RATE = 500

export default {
  name: 'flight-destination-picker',
  props: {
    type: String,
    value: String,
    alg: Boolean
  },

  data () {
    return {
      search: null,
      items: this.alg ? DESTINATION_ALG : [],
      loading: false,
      destination: null
    }
  },

  watch: {
    search (val) {
      const currentItemIndex =
        this.items.map(item => item.name).findIndex(el => el === val)

      val &&
      val.length >= 3 &&
      currentItemIndex === -1 &&
      !this.alg && this.debouncedSearch(val)
    }
  },

  created () {
    this.debouncedSearch = debounce(this.searchDestination, DEBOUNCE_RATE)
  },

  methods: {
    async searchDestination (q) {
      this.loading = true
      this.items = []

      const { data } = await axios(`${API_URL}?q=${q}`)
      this.loading = false

      this.items = data.map(item => {
        item.name = `${item.code} - ${item.city} - ${item.airport}`
        return item
      })
    },

    update (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .destination-picker {
    /deep/ .input-group__details {
      max-width: 100%;
    }
  }
</style>


<style lang="scss">
  .menu__content--autocomplete {
    border-radius: 4px;

    @media screen and (min-width: 960px) {
      // top: 579px !important;
    }

    .card {
      max-height: 300px;
      overflow-y: scroll;
    }

    .icon {
      color: #2ac1fe;
    }

    .location-name {
      padding-left: 1rem;
    }
  }
</style>
