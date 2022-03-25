<template>
  <div class="partners">
    <h3 class="partners-title text-xs-center">Partenaires</h3>
    <p class="partners-description mx-auto">
      Nous sommes agent IATA agréé, nous représentons plus de 20 compagnies
      aériennes opérantes depuis l’Algérie; nous disposons d’une plateforme
      connecté à des dizaine de milliers d’hotels à travers le monde, nous
      assurons aussi des services complémentaires qui complètent nos offres tels
      que des Visa électroniques, des assurances voyages ou des services de
      transfert.
    </p>

    <v-layout wrap align-center justify-center class="airlines-container">
      <v-flex md4 sm6 v-for="(airline, index) in airlines" :key="index" class="airline">
        <img :src="`/images/airlines/${airline}.png`" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'a-props-partners',

  data () {
    return {
      airlines: {
        ah: 'AH',
        tu: 'TU',
        qr: 'QR',
        ek: 'EK',
        ms: 'MS',
        tk: 'TK',
        at: 'AT',
        zi: 'ZI',
        lh: 'LH',
        af: 'AF',
        az: 'AZ',
        bj: 'BJ',
        vy: 'VY',
        ba: 'BA',
        sv: 'SV'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding-top: 3rem;

  .partners-title {
    color: black;
    font-size: 32px;
    font-weight: normal;

    &::after {
      content: "";
      display: block;
      margin: auto;
      margin-top: 1rem;
      width: 100px;
      height: 2px;
      border: 1px solid #2ac1fe;
    }
  }

  .partners-description {
    font-family: Roboto;
    text-align: center;
    font-size: 16px;
    max-width: 1062px;
    color: #515151;
    line-height: 24px;
    padding: 3rem 0;

    @media screen and (max-width: 600px) {
      text-align: justify;
    }
  }

  .airlines-container {
    .airline {
      padding: 1rem;
      text-align: center;

      @media screen and (max-width: 600px) {
        padding: .7rem 0;
      }

      img {
        @media screen and (max-width: 600px) {
          zoom: 75%;
        }
      }
    }
  }
}
</style>
