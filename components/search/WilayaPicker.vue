<template>
   <v-select
    class="wilaya-picker"
    :items="items"
    v-model="wilaya"
    offset-y
    label="Wilaya de résidence"
    required
    placeholder="Sélectionner votre Wilaya de résidence"
    autocomplete
    browser-autocomplete="wilaya"
    append-icon=""
    :loading="loading"
    @input="update"
    item-text="name"
    item-value="id"
  >
    <template slot="item" slot-scope="data">
      <v-list-tile-content>
        <v-list-tile-title>
          <v-icon size="18">location_city</v-icon>
          <span class="location-name">{{ data.item.name }}</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </template>
  </v-select>
</template>

<script>
import WILAYAS from '~/assets/wilayas.json'

export default {
  name: 'wilaya-picker',
  props: {
    value: String
  },

  data () {
    return {
      items: WILAYAS,
      loading: false,
      wilaya: null
    }
  },

  methods: {
    update (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wilaya-picker {
    /deep/ .input-group__input {
      border: 1px solid #dce1ea;
      border-radius: 3px;
      padding: 0 1rem;
    }
  }

  /deep/ .input-group--select__autocomplete {
    padding: 0 !important;
    border: none !important;

    &:focus {
      font-size: 16px !important;
      outline: none !important;
    }
  }
</style>

<style lang="scss">
  .menu__content--autocomplete {
    border-radius: 4px;

    .icon {
      color: #2ac1fe;
    }

    .location-name {
      padding-left: 1rem;
    }
  }
</style>
