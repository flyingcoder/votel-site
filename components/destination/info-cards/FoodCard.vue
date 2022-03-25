<template>
  <div class="info-card">
    <div class="info-card-header">
      <p>
        <v-icon size="18" v-if="type === 'sandwitch'">restaurant</v-icon>
        <v-icon size="18" v-if="type === 'cafe'">local_cafe</v-icon>
        {{ type === 'sandwitch' ? 'Sandwitch' : 'Café' }}
      </p>
      <p>
        Le prix d'un {{ type === 'sandwitch' ? 'sandwitch' : 'café' }} à paris
      </p>
    </div>

    <v-layout class="info-card-content" column>
      <v-flex d-flex>
        <span style="flex: 1; width: 25%">{{ price }}</span>
        <span class="currency">&euro;</span>
      </v-flex>

      <v-flex d-flex>
        <span style="flex: 1; width: 25%">{{ price * 210 }}</span>
        <span class="currency">DZD</span>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'food-card',
  props: ['type', 'price']
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
    font-size: 24px;
    font-weight: 300;

    .currency {
      width: 50px;
      color:#2ac1fe;
      font-family: Monaco;
    }
  }
}
</style>
