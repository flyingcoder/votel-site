<template>
  <v-container class="top-destinations">
    <!-- Section title -->
    <h1 class="text-xs-center section-title">Top déstinations</h1>

    <!-- Destinations -->
    <v-layout row wrap class="destinations-container">
      <!-- First row -->
      <v-flex d-flex md12 xs12>
        <v-layout row wrap>
          <v-flex md8 xs12 class="destination-container">
            <destination-flip-card :destination="destinations.paris" class="destination-big"/>
          </v-flex>

          <v-flex>
            <v-layout column wrap>
              <v-flex d-flex md6 xs12 class="destination-container">
                <destination-flip-card :destination="destinations.london" small class="destination-small"/>
              </v-flex>

              <v-flex d-flex md6 xs12 class="destination-container">
                <destination-flip-card :destination="destinations.berlin" small class="destination-small"/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Second row -->
      <v-flex d-flex md12 xs12>
        <v-layout row wrap>
          <v-flex>
            <v-layout column wrap>
              <v-flex d-flex md6 class="destination-container">
                <destination-flip-card :destination="destinations.dubai" small class="destination-small"/>
              </v-flex>

              <v-flex d-flex md6 class="destination-container">
                <destination-flip-card :destination="destinations.newyork" small class="destination-small"/>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md8 xs12 class="destination-container">
            <destination-flip-card :destination="destinations.istanbul" class="destination-big"/>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- More rows -->
      <v-flex d-flex md12>
        <v-layout row wrap>
          <v-flex d-flex md4 xs12 class="destination-container">
            <destination-flip-card :destination="destinations.bangkok" small class="destination-small"/>
          </v-flex>

          <v-flex d-flex md4 xs12 class="destination-container">
            <destination-flip-card :destination="destinations.kuala" small class="destination-small"/>
          </v-flex>

          <v-flex d-flex md4 xs12 class="destination-container">
            <destination-flip-card :destination="destinations.singapore" small class="destination-small"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DestinationFlipCard from '@/components/homepage/DestinationFlipCard'

export default {
  name: 'top-destinations',
  components: { DestinationFlipCard },

  data () {
    return {
      destinations: {
        paris: { title: 'Paris', image: 'paris.png' },
        london: { title: 'Londres', image: 'london.png' },
        berlin: { title: 'Berlin', image: 'berlin.png' },
        dubai: { title: 'Dubaï', image: 'dubai.png' },
        newyork: { title: 'New york', image: 'newyork.png' },
        istanbul: { title: 'Istanbul', image: 'istanbul.png' },
        bangkok: { title: 'Bangkok', image: 'bangkok.png' },
        kuala: { title: 'Kuala Lumpur', image: 'kuala.png' },
        singapore: { title: 'Singapour', image: 'singapore.png' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-destinations {
  padding: 4rem 1rem;
}

.section-title {
  margin: 0;
  padding: 0;
}

.destinations-container {
  max-width: 1060px;
  margin: auto;
  padding-top: 2rem;
}

.destination-container {
  padding: .6rem;
}

.destination-big {
  height: 390px;
}

.destination-small {
  height: 187px;
}
</style>
