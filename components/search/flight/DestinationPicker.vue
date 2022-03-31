<template>
   <v-select
    class="destination-picker"
    outlined
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
  .search-inputs .v-input__icon.v-input__icon-- {
      display: none;
  }
  .search-form .datepicker {
      max-width: 100% !important;
  }
  .search-form {
    max-width: 86% !important;
    margin: auto !important;
  }
  .search-container input[type="text"]::placeholder {
      color: #3c5065 !important;
  }
  .search-container font {
      color: #a6b1c2 !important;
  }
  .search-form .search-inputs-container .datepicker[data-v-64233180] input,
  .classpicker input {
      margin-left: 0rem !important;
  }
  .search-inputs .v-input__slot::before {
      border-style: none !important;
  }
  .search-inputs .v-input--is-focused .v-input__slot::before {
      width: 0px !important;
  }
    .search-container .submit-button-container {
    background: #2ac1fe;
    border-radius: 3.5px;
    height: 44px;
    margin: 6px 0px !important;
  }
  .search-inputs .v-input.destination-picker.destination-input.v-text-field.v-text-field--placeholder.v-select.v-autocomplete.theme--light,
  .search-inputs .datepicker-container .v-input.v-text-field.v-text-field--placeholder.v-input--is-readonly.theme--light,
  .search-inputs .v-menu .v-input.v-text-field.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light {
      display: flex;
      border: solid #dce1ea;
      border-radius: 3.5px;
      border-width: thin;
      padding: 5px 20px;
      margin-top: 0px;
  }
  .search-inputs .v-text-field__details {
    display: none;
  }
  .search-inputs .v-input__slot {
    margin: 0px;
  }
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
