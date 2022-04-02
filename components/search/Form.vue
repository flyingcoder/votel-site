<template>
  <div class="search-form">
    <form :action="searchType === 'flight' ? volsUrl : hotelsUrl" method="GET" @submit.prevent="submitForm">
      <v-layout wrap class="header">
        <!-- Search type -->
        <v-flex sm5 xs12 class="search-type">
          <!-- Flight -->
          <v-btn
            flat @click="toggleSearchType('flight')"
            :class="{'is-active': searchType === 'flight'}"
          >
            <v-icon size="16">flight</v-icon>
            Vols
          </v-btn>

          <!-- Hotel -->
          <v-btn
            flat @click="toggleSearchType('hotel')"
            :class="{'is-active': searchType === 'hotel'}"
          >
            <v-icon size="16">local_hotel</v-icon>
            Hôtels
          </v-btn>
        </v-flex>

        <v-flex sm7 xs12 class="search-params" v-if="searchType === 'flight'">
          <v-tabs right v-model="flightType">
            <v-tab>Aller/Retour</v-tab>
            <v-tab>Aller simple</v-tab>
            <v-tab>Multi Dest.</v-tab>
          </v-tabs>
        </v-flex>
      </v-layout>

      <!-- Flight parameters -->
      <template v-if="searchType === 'flight'">
        <input type="hidden" name="TypeSearch" :value="flightTypeCode">
        <input type="hidden" name="RefundableFares" :value="'N'">
        <!-- <input type="hidden" name="GdsType" :value="'ALL'"> -->
        <input type="hidden" name="GdsType" :value="'AMA'">
        <input type="hidden" name="Airline" :value="''">
        <input type="hidden" name="CabinClass" :value="classType.cabinClass">
        <input type="hidden" name="nbADT" :value="classType.ADT">
        <input type="hidden" name="nbCHD" :value="classType.INF">
        <input type="hidden" name="nbINF" :value="classType.CHD">
        <input type="hidden" name="nbSTU" :value="classType.YTH">
        <input type="hidden" name="nbSRC" :value="classType.YCD">
        <input type="hidden" name="nbSEA" :value="0">
      </template>

      <div class="search-container" :class="{'hotel': searchType === 'hotel'}">
        <template v-if="searchType === 'flight'">
          <!-- Return flight -->
          <v-layout v-if="flightType === '0'" class="search-inputs-container" align-center>
            <div class="search-inputs">
              <!-- Destination départ -->
              <flight-destination-picker
                alg
                type="dep"
                class="destination-input"
                v-model="flights[0].origin"
                @input="updateReturnFlightDestination"
              />
              <input type="hidden" :name="`DepartureAirport1`" :value="flights[0].origin" />
              <input type="hidden" :name="`ArrivalAirport2`" :value="flights[1].destination" />

              <v-icon class="swap-icon hidden-sm-and-down" size="18">swap_horiz</v-icon>

              <!-- Destination arrivée -->
              <flight-destination-picker
                alg
                type="arr"
                class="destination-input"
                v-model="flights[0].destination"
                @input="updateReturnFlightOrigin"
              />
              <input type="hidden" :name="`ArrivalAirport1`" :value="flights[0].destination" />
              <input type="hidden" :name="`DepartureAirport2`" :value="flights[1].origin" />

              <!-- Dates -->
              <div class="datepicker-container">
                <!-- Date départ -->
                <date-picker placeholder="Date départ" v-model="flights[0].departureDate" class="date-picker" :min="minDate"/>
                <input type="hidden" name="DepartureDateFlight1" :value="flights[0].departureDate">

                <!-- Date retour -->
                <date-picker
                  placeholder="Date retour"
                  v-model="flights[1].departureDate"
                  class="date-picker"
                  :value="addWeek(flights[0].departureDate)"
                  :min="addDay(flights[0].departureDate)"
                />
                <input type="hidden" name="DepartureDateFlight2" :value="flights[1].departureDate">
              </div>
              <flight-class-picker v-model="classType" />
            </div>

            <!-- Search button -->
            <div class="submit-button-container">
              <v-btn type="submit" class="submit-button" flat dark>
                <v-icon size="16">search</v-icon>
                Chercher
              </v-btn>
            </div>
          </v-layout>

          <!-- Single/Multi Flight -->
          <v-layout v-else class="search-inputs-container" align-center v-for="(flight, index) in flights" :key="index">
            <div class="search-inputs">
              <flight-destination-picker :alg="index === 0" type="dep" class="destination-input" v-model="flights[index].origin" />
              <input type="hidden" :name="`DepartureAirport${index + 1}`" :value="flights[index].origin">
              <v-icon class="swap-icon hidden-sm-and-down" size="18">swap_horiz</v-icon>
              <flight-destination-picker type="arr" class="destination-input" v-model="flights[index].destination" />
              <input type="hidden" :name="`ArrivalAirport${index + 1}`" :value="flights[index].destination">

              <div class="datepicker-container datepicker-single">
                <date-picker
                  placeholder="Date départ"
                  v-model="flights[index].departureDate"
                  palaceholder="Date départ"
                  class="date-picker"
                  :min="index === 0 ? minDate : addDay(flights[index-1].departureDate)"
                />
                <input type="hidden" :name="`DepartureDateFlight${index + 1}`" :value="flights[0].departureDate">

                <v-btn class="close-button" v-if="index !== 0" flat @click="removeDestination(index)">
                  <v-icon size="18">close</v-icon>
                </v-btn>
              </div>

              <flight-class-picker v-model="classType" v-if="index === 0" />
            </div>

            <!-- Search button -->
            <div class="submit-button-container" :class="{'multi-desktop': flightType === '2'}">
              <v-btn type="submit" class="submit-button" flat dark v-if="index === 0">
                <v-icon size="16">search</v-icon>
                Chercher
              </v-btn>
            </div>

            <div class="divider" v-if="flightType === '2' && flights.length > 1 && index !== flights.length - 1"></div>
          </v-layout>

          <div class="submit-button-container multi-mobile" v-if="flightType === '2'">
            <v-btn type="submit" class="submit-button" flat dark>
              <v-icon size="16">search</v-icon>
              Chercher
            </v-btn>
          </div>

          <div class="multi-options" v-if="flightType === '2'">
            <v-btn flat @click="addDestination">
              <v-icon size="18">add</v-icon>
              Ajouter un vol
            </v-btn>

            <v-btn flat @click="clearDestinations">
              <v-icon size="18">clear_all</v-icon>
              Vider tout
            </v-btn>
          </div>
        </template>

        <!-- Hotel search -->
        <template v-if="searchType === 'hotel'">
          <input name="rooms" type="hidden" :value="hotel.class.length">
          <input name="zoneId" type="hidden" value="">
          <input name="source" type="hidden" :value="hotel.source">

          <v-layout class="search-inputs-container hotel" align-center>
            <div class="search-inputs">
              <hotel-destination-picker
                class="destination-input hotel"
                v-model="hotel.destination"
                @source="updateHotelSource"
              />
              <input type="hidden" name="destinationId" :value="hotel.destination">

              <div class="datepicker-container">
                <date-picker
                  hotel
                  placeholder="Date arrivée"
                  v-model="hotel.arrivalDate"
                  class="date-picker hotel"
                  :min="minDate"
                />
                <input type="hidden" name="arrDate" :value="hotel.arrivalDate">

                <date-picker
                  hotel
                  placeholder="Date retour"
                  v-model="hotel.departureDate"
                  class="date-picker hotel"
                  :value="addWeek(hotel.arrivalDate)"
                  :min="addDay(hotel.arrivalDate)"
                />
                <input type="hidden" name="depDate" :value="hotel.departureDate">
              </div>

              <hotel-class-picker v-model="hotel.class" />

              <div v-if="hotel.class.length" v-for="(room, index) in hotel.class" :key="'r' + index">
                <input type="hidden" :name="`adults${index + 1}`" :value="room.adults">
                <input type="hidden" :name="`roomType${index + 1}`" :value="room.type">
                <input type="hidden" :name="`children${index + 1}`" :value="room.kidsCount">
                <input type="hidden" :name="`infant${index + 1}`" :value="room.babies">
                <template v-if="room.kids.length">
                  <input type="hidden" :name="`age1_${index + 1}`" :value="room.kids[0].age">
                  <input v-if="room.kidsCount === 2" type="hidden" :name="`age2_1${index + 1}`" :value="room.kids[1].age">
                </template>
                <input type="hidden" :name="`extrabed${index + 1}`" :value="room.extraBed ? 'YES' : 'NO'">
              </div>

              <!-- Search button -->
              <div class="submit-button-container">
                <v-btn type="submit" class="submit-button" flat dark>
                  <v-icon size="16">search</v-icon>
                  Chercher
                </v-btn>
              </div>
            </div>
          </v-layout>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from '@/components/search/DatePicker'
import FlightDestinationPicker from '@/components/search/flight/DestinationPicker'
import FlightClassPicker from '@/components/search/flight/ClassPicker'
import HotelDestinationPicker from '@/components/search/hotel/DestinationPicker'
import HotelClassPicker from '@/components/search/hotel/ClassPicker'
import moment from 'moment'
import axios from 'axios'

const MAX_FLIGHTS = 3
const FLIGHTS_SEARCH_URL = 'https://vols.votel-dz.com/search-bc/index.html'
const HOTELS_SEARCH_URL = 'https://hotels.votel-dz.com/search'

export default {
  name: 'search-form',
  components: { DatePicker, FlightDestinationPicker, FlightClassPicker, HotelDestinationPicker, HotelClassPicker },

  data () {
    return {
      volsUrl: FLIGHTS_SEARCH_URL,
      hotelsUrl: HOTELS_SEARCH_URL,
      searchType: 'flight',
      flightType: '0',
      flightTypeCode: '2',
      message: '',
      classType: {
        cabinClass: 'Y',
        ADT: 1,
        INF: 0,
        CHD: 0,
        YTH: 0,
        YCD: 0
      },

      flights: [
        {
          departureDate: null,
          origin: null,
          destination: null
        },
        {
          departureDate: null,
          origin: null,
          destination: null
        }
      ],

      hotel: {
        destination: '',
        source: '',
        arrivalDate: null,
        departureDate: null,
        class: [{
          adults: 2,
          type: 'Double',
          kidsCount: 0,
          kids: [],
          babies: 0,
          extraBed: false
        }]
      }
    }
  },

  watch: {
    flightType (value) {
      switch (value) {
        case '0':
          this.flightTypeCode = 2
          break

        case '1':
          this.flightTypeCode = 1
          break

        case '2':
          this.flightTypeCode = 3
          break
      }

      if (value > 0) {
        this.flights = [{
          departureDate: null,
          origin: null,
          destination: null
        }]
      } else {
        this.flights = [
          {
            departureDate: null,
            origin: null,
            destination: null
          },
          {
            departureDate: null,
            origin: null,
            destination: null
          }
        ]
      }
    }
  },

  computed: {
    minDate: () => moment().add(1, 'day').format('YYYY-MM-DD')
  },

  methods: {
    submitForm (e) {
      var arrInput = e.target.getElementsByTagName('input')
      this.message = 'New Reservation from Votel dz\r\n'
      for (var i = 0; i < arrInput.length; i++) {
        var nam = arrInput[i].name
        var val = arrInput[i].value
        if (nam !== '') {
          this.message += '\r\n ' + nam + ' : ' + val
        }
      }
      axios.post('/mail/send', {
        from: 'Votel DZ',
        subject: 'Reservation Form',
        text: this.message,
        to: 'aepacot2016@gmail.com'
      })
    },
    toggleSearchType (type) {
      this.searchType = type
    },

    updateReturnFlightDestination (destination) {
      this.flights[1].destination = destination
    },

    updateReturnFlightOrigin (origin) {
      this.flights[1].origin = origin
    },

    addDay: (date) => moment(date).add(1, 'day').format('YYYY-MM-DD'),
    addWeek: (date) => moment(date).add(1, 'week').format('YYY-MM-DD'),

    addDestination () {
      if (this.flights.length < MAX_FLIGHTS) {
        this.flights.push({
          departureDate: null,
          origin: null,
          destination: null
        })
      }
    },

    removeDestination (index) {
      this.flights.splice(index, 1)
    },

    clearDestinations () {
      this.flights = this.flights.splice(0, 1)
    },

    updateHotelSource (source) {
      this.hotel.source = source
    }
  }
}
</script>

<style lang="scss" scoped>
.submit-button-container font {
    color: white !important;
}
.search-form button.v-btn.v-btn--flat.theme--light.is-active {
    background-color: #2ac1fe;
    padding: 24px;
    margin: 0px;
    color: white;
}
.search-form button.v-btn.v-btn--flat.theme--light{
  padding: 24px;
  margin: 0px;
}
.search-form {
  position: relative;
  min-height: 150px;
  max-width: 1065px;
  margin: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1065px) {
    margin: 0 1rem;
  }

  .header {
    min-height: 55px;
    border-bottom: 1px solid rgba(#e6e6e6, .14);
  }

  .search-type {
    /deep/ .btn {
      margin: 0;
      height: 55px;
      width: 115px;
      border-radius: 0;

      &:first-child {
        border-radius: 4px 0 0 0;
      }

      .btn__content {
        color: #9ea8b2;
        text-transform: none;
      }

      i {
        padding: 0 .4rem 0 0;
      }
    }

    /deep/ .is-active {
      .btn__content {
        background-color: #2ac1fe;
        color: white;
      }
    }
  }

  .search-params {
    /deep/ .tabs {
      height: 55px;
      padding-right: 3.5rem;

      @media screen and (max-width: 960px) {
        margin: .5rem 0;
        padding-right: 0;
      }

      .tabs__container {
        height: 55px;
        padding: 0 1rem;
      }

      .tabs__div {
        @media screen and (max-width: 960px) {
          padding: 0 .2rem;
          margin: auto;
          width: 100%;
        }
      }

      .tabs__item {
        color: #9ea8b2;
        // text-transform: none;

        @media screen and (max-width: 960px) {
          font-size: 12px;
          text-transform: none;
          border-radius: 4px;
          border: 1px solid #dce1ea;
          height: 42px;
        }
      }

      .tabs__item--active {
        color: #3c5065;

        @media screen and (max-width: 960px) {
          border: 1px solid #2ac1fe;
          background-color: #2ac1fe;
          color: white;
        }
      }

      .tabs__slider {
        background-color: #2ac1fe !important;
        border-color: #2ac1fe !important;

        @media screen and (max-width: 960px) {
          background-color: transparent !important;
          border-color: transparent !important;
        }
      }
    }
  }

  .search-container {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;

    &.hotel {
      min-height: 95px;
    }

    @media screen and (max-width: 960px) {
      display: block;
    }
  }

  .search-inputs-container {
    padding: 0;
    padding-top: 1rem;

    &.hotel {
      padding-top: 0;
    }

    &:first-child {
      padding-top: 0;
    }

    @media screen and (max-width: 960px) {
      padding: 0 .3rem;
      flex-wrap: wrap;
    }

    .search-inputs {
      display: flex;
      align-items: center;
      width: 100%;

      @media screen and (max-width: 960px) {
        display: block;
        padding: 0;
      }
    }


    .destination-input {
      display: inline-block;
      max-width: 200px;

      &.hotel {
        max-width: 400px;
      }

      /deep/ .input-group__selections {
        margin-left: -1rem;
        max-height: 2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      @media screen and (max-width: 960px) {
        display: block;
        max-width: initial;
        margin-bottom: .5rem;
        width: 100%;
      }
    }

    .swap-icon {
      padding: 0 1rem;
      color: #2ac1fe;
    }

    /deep/ .input-group {
      border: 1px solid rgba(#a6b1c2, .5);

      border-radius: 3px;
      height: 46px;
      padding: .5rem 1rem;

      i {
        font-size: 18px;
        color: #2ac1fe;
      }

      input {
        color: #3c5065;
        font-size: 16px;
      }
    }

    /deep/ .input-group--focused {
      border: 1px solid #2ac1fe;
    }

    /deep/ .input-group__details {
      &::before, &::after {
        background: none !important;
        border: none !important;
      }
    }

    .datepicker {
      max-width: 120px;
      margin-left: 1rem;

      &.hotel {
        max-width: 140px;
        @media screen and (max-width: 960px) {
          max-width: 100%;
        }
      }

      @media screen and (max-width: 960px) {
        display: block;
        max-width: initial;
        width: 100%;
        margin: 0 0 .5rem 0;
      }

      /deep/ input {
        margin-left: -1rem;
      }
    }

    .datepicker-container {
      display: flex;

      @media screen and (max-width: 960px) {
        .datepicker:first-child {
          padding-right: .5rem;
        }

        .datepicker:last-child {
          padding-left: .5rem;
        }
      }
    }

    .datepicker-single {
      .datepicker {
        max-width: 240px;
      }

      @media screen and (max-width: 960px) {
        .datepicker {
          padding: 0;
          max-width: 100%;
        }

        .datepicker:first-child {
          padding: 0;
        }
      }
    }

    .classpicker {
      margin-left: 1rem;
      max-width: 190px;
      margin-right: .5rem;

      @media screen and (max-width: 960px) {
        margin: 0;
        max-width: 100%;
        width: 100%;
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      border: 1px solid #dadada;
      margin: 1rem 0;
    }

    .close-button {
      @media screen and (max-width: 960px) {
        border: 1px solid #dce1ea;
        border-radius: 3px;
        width: 80px;
        height: 46px;
        margin: 0;
        margin-left: 1rem;
      }
    }
  }

  .submit-button-container {
    @media screen and (max-width: 960px) {
      width: 100%;
    }

    .submit-button {
      height: 46px;
      margin: 0;
      border-radius: 3px;

      @media screen and (max-width: 960px) {
        width: 100%;
        margin: .5rem 0;
      }

      /deep/ .btn__content {
        background-color: #2ac1fe;
        font-size: 16px;
        text-transform: none;
      }

    }

    &.multi-mobile {
      padding: 0 .3rem;

      @media screen and (min-width: 961px) {
        display: none;
      }
    }

    &.multi-desktop {
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
  }

  .multi-options {
    display: flex;
    width: 100%;
    padding: 0 1rem;

    @media screen and (max-width: 960px) {
      padding: 0 1rem;
    }

    .btn {
      margin: 0;
      margin-top: .5rem;

      .icon {
        padding-right: .6rem;
      }

      /deep/ .btn__content {
        padding: 0;
        padding-right: 1rem;
        text-transform: none;
        color: #2ac1fe;
      }
    }
  }
}
</style>
