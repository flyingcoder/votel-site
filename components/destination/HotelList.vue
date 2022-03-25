<template>
  <div class="hotel-list">
    <v-container>
      <h3 class="hotel-list-title text-md-left text-xs-center">Hotels pas chèrs à Paris</h3>

      <v-layout wrap class="hotel-cards" align-center>
        <v-flex  lg3 md4 sm6 xs12 class="hotel-card-container" v-for="i in 12" :key="i">
          <hotel-card
            image="/images/hotel.jpg"
            name="Hotel Signature St Germain"
            :score="4"
            :price="10900"
          ></hotel-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HotelCard from '@/components/destination/HotelCard'

export default {
  name: 'hotel-list',
  components: { HotelCard }
}
</script>

<style lang="scss" scoped>
.hotel-list {
  background-color: white;
  .hotel-list-title {
    padding-left: 2rem;
    font-size: 26px;
    font-weight: normal;
    color: #303030;
    letter-spacing: 0.03em;

    @media screen and (max-width: 960px) {
      padding-left: 0;
    }
  }

  .hotel-cards {
    padding: 1rem 0;

    .hotel-card-container {
      padding: 1rem 0;
    }
  }
}
</style>
