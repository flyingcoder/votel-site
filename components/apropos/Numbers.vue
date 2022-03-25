<template>
  <div class="numbers">
    <h3 class="numbers-title text-xs-center">Quelques chiffres</h3>
    <p class="numbers-description mx-auto">
      Chaque jours nous aidons des centaines de voyageurs à travers toute
      l'Algérie pour trouver les meilleurs offres pour leurs voyages. Une équipe
      de professionnel pour moderniser le service de la réservation de voyage en
      Algérie.
    </p>

    <v-layout wrap class="numbers-icons" justify-center="">
      <v-flex md3 sm4 xs6 v-for="(item, index) in numbers" :key="index">
        <div class="numbers-icon-container">
          <img :src="`/icons/${ item.icon }.png`" />
        </div>

        <p class="icon-text">{{ item.text }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'a-propos-numbers',

  data () {
    return {
      numbers: {
        travel: {
          icon: 'travel',
          text: `Comparateur de vol et d'hôtel en ligne`
        },

        plane: {
          icon: 'plane',
          text: `+20 Compagnie aériennes`
        },

        hotel: {
          icon: 'hotel',
          text: `+20.000 Hôtels dans le monde`
        },

        visa: {
          icon: 'visa',
          text: `Services complémentaires (Visa électronique, Assurance, Transfert)`
        },

        group: {
          icon: 'group',
          text: `Service commercial Joignable de 08h à 17h`
        },

        messenger: {
          icon: 'messenger',
          text: `Un service client sur messenger de 8h à 00h`
        },

        shipped: {
          icon: 'shipped',
          text: `Livraison à domicile et paiement à la livraison`
        },

        checked: {
          icon: 'checked',
          text: `Possibilité de paiement par CCP & Virement`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.numbers {
  .numbers-title {
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

  .numbers-description {
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

  .numbers-icons {
    .numbers-icon-container {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 160px;
      border: 1px dashed #a1a1a1;
      border-radius: 50%;

      @media screen and (max-width: 600px){
        width: 90px;
        height: 90px;
      }

      img {
        @media screen and (max-width: 600px){
          zoom: 50%;
        }
      }
    }

    .icon-text {
      padding: 3rem 0;
      max-width: 300px;
      margin: auto;
      font-family: Roboto;
      font-size: 16px;
      line-break: 24px;
      color: #515151;
      text-align: center;
    }
  }
}
</style>
