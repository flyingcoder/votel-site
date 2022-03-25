<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-bottom="45"
    :return-value.sync="date"
    lazy
    offset-y
    allow-overflow
    min-width="290px"
    class="datepicker"
  >
    <v-text-field
      slot="activator"
      v-model="formattedDate"
      :placeholder="placeholder"
      prepend-icon="event"
      readonly
    ></v-text-field>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      locale="fr-fr"
      :min="min"
      @input="updateDate(date)"
    />
  </v-menu>
</template>

<script>
import moment from 'moment'

export default {
  name: 'form-datepicker',
  props: {
    'value': String,
    'placeholder': String,
    'min': String,
    'hotel': {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      menu: false,
      date: null,
      formattedDate: null
    }
  },

  watch: {
    value (val) {
      this.updateDate(val)
    }
  },

  methods: {
    updateDate (date) {
      moment.locale('fr')
      this.formattedDate = moment(date).format('DD MMM')
      this.$refs.menu.save(date)
      this.$emit('input', date)
    }
  }
}
</script>
