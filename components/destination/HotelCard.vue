<template>
  <div class="hotel-card">
    <div class="hotel-image" :style="`background-image: url(${image})`"></div>
    <v-layout wrap class="hotel-info">
      <v-flex class="hotel-name">{{ name }}</v-flex>
      <div class="hotel-score">
        <v-icon size="14" v-for="i in score" :key="'s'+i">star</v-icon>
        <v-icon size="14" v-for="i in 5 - score" :key="i" class="empty">star</v-icon>
      </div>
      <v-flex class="hotel-price">{{ price }} DA / Nuit</v-flex>
      <div class="hotel-book"><a @click.prevent="() => {}">Réserver</a></div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'destination-hotel-card',
  props: ['image', 'name', 'score', 'price']
}
</script>

<style lang="scss" scoped>
.hotel-card {
  width: 295px;
  margin: auto;

  .hotel-image {
    height: 200px;
    background-size: cover;
    border-radius: 4px;
    box-shadow: 0px 4px 10px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1);
  }

  .hotel-info {
    padding-top: .7rem;

    .hotel-name {
      font-size: 14px;
      color: #303030;
      letter-spacing: 0.03em;
    }

    .hotel-score {
      i:not(.empty) {
        color: #ffa040;
      }
    }

    .hotel-price {
      padding-top: .8rem;
      @extend .hotel-name;
      font-weight: bold;
    }

    .hotel-book {
      @extend .hotel-price;
      text-transform: uppercase;

      a {
        color: #2ac1fe;
      }
    }
  }
}
</style>
