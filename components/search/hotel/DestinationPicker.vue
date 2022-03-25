<template>
  <v-select
    class="destination-picker"
    :search-input.sync="search"
    :items="items"
    v-model="destination"
    offset-y
    placeholder="Destination"
    autocomplete
    append-icon=""
    prepend-icon="place"
    clearable
    :loading="loading"
    @input="update"
    item-text="place"
    item-value="code"
  >
    <template slot="item" slot-scope="data">
      <v-list-tile-content v-if="data.item">
        <v-list-tile-title>
          <v-icon size="18">location_city</v-icon>
          <span class="location-name">
            {{ data.item.name }}, {{ data.item.country }}
          </span>
        </v-list-tile-title>
      </v-list-tile-content>
    </template>
  </v-select>
</template>

<script>
import { debounce } from 'lodash'
import axios from 'axios'

const API_URL = 'https://hotels.votel-dz.com/data/destinations.cfm?query='

export default {
  name: 'hotel-destination-picker',

  data () {
    return {
      search: null,
      items: [],
      loading: false,
      destination: null
    }
  },

  watch: {
    search (val) {
      const currentItemIndex = this.items.findIndex(el => el.place === val)

      val &&
      val.length >= 3 &&
      currentItemIndex === -1 &&
      this.debouncedSearch(val)
    }
  },

  created () {
    this.debouncedSearch = debounce(this.searchDestination, 500)
  },

  methods: {
    async searchDestination (q) {
      this.loading = true

      try {
        const { data } = await axios(`${API_URL}${q}`)
        this.items = data.map(el => ({
          ...el,
          place: `${el.name}, ${el.country}`
        }))
        this.loading = false
      } catch (err) {
        console.error(err)
      }
    },

    update (value) {
      this.$emit('input', value)
      const itemIndex = this.items.findIndex(el => el.code === value)
      this.$emit('source', this.items[itemIndex].source)
    }
  }
}
</script>
