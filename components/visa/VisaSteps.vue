<template>
  <div class="steps-container">
    <v-container>
      <p class="description text-xs-center">
        Avec Votel réservation, la procédure de visa électronique pour {{ destination }}
        est décrite ci-dessous en quatre étapes :
      </p>

      <!-- Steps -->
      <v-layout class="steps" wrap>
        <!-- First step -->
        <v-flex xs12 sm3 class="step">
          <div class="step-badge">1</div>
          <div class="step-icon icons icon-note"></div>
          <div class="step-text">Remplissage du formulaire</div>
        </v-flex>

        <!-- Second step -->
        <v-flex xs12 sm3 class="step">
          <div class="step-badge">2</div>
          <div class="step-icon icons icon-phone"></div>
          <div class="step-text">Confirmation des données</div>
        </v-flex>

        <!-- Third step -->
        <v-flex xs12 sm3 class="step">
          <div class="step-badge">3</div>
          <div class="step-icon icons icon-credit-card"></div>
          <div class="step-text">Paiement</div>
        </v-flex>

        <!-- Fourth step -->
        <v-flex xs12 sm3 class="step">
          <div class="step-badge">4</div>
          <div class="step-icon icons icon-envelope-letter"></div>
          <div class="step-text">Recevez votre visa électronique</div>
        </v-flex>
      </v-layout>

      <!-- Advantages -->
      <div class="advantages">
        <!-- Advantage title -->
        <h2 class="advantage-title text-xs-center">Avantages</h2>

        <v-layout wrap class="advantages-container">
          <!-- First Advantage -->
          <v-flex sm4 xs12 class="advantage">
            <div class="advantage-icon icons icon-docs"></div>
            <div class="advantage-text">0 Papier (Aucun dossier demandé)</div>
          </v-flex>

          <!-- Second advantage -->
          <v-flex sm4 xs12 class="advantage">
            <div class="advantage-icon icons icon-compass"></div>
            <div class="advantage-text">Demande à distance et sans RDV</div>
          </v-flex>

          <!-- Third advantage -->
          <v-flex sm4 xs12 class="advantage">
            <div class="advantage-icon icons icon-energy"></div>
            <div class="advantage-text">Délais de traitement rapide (3 à 7 jours MAX)</div>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import 'simple-line-icons/css/simple-line-icons.css'

export default {
  name: 'visa-steps',
  props: {
    destination: String
  }
}
</script>

<style lang="scss" scoped>
.steps-container {
  background: white;
  padding: 5rem 0 5rem 0;
}

.description {
  font-family: Roboto;
  font-size: 20px;
  color: #242424;
  letter-spacing: 0.03em;

  @media screen and(max-width: 360px) {
    font-size: 16px;
    line-height: 38px;
  }
}

.steps {
  .step {
    position: relative;
    margin: 4rem 0;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

    .step-badge {
      margin: auto;
      margin-bottom: 1rem;
      position: relative;
      right: 60px;
      background: #2ac1fe;
      color: white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    }

    .step-icon {
      font-size: 60px;
      color: #2ac1fe;
    }

    .step-text {
      padding-top: 3rem;
      font-family: Roboto;
      color: #242424;
      font-size: 22px;

      @media screen and (max-width: 600px) {
        font-weight: 300;
      }
    }
  }
}

.advantages {
  .advantage-title {
    font-size: 40px;
    font-weight: normal;
    color: #040e28;
    padding: 7rem 0 4rem 0;
  }

  .advantages-container {
    display: flex;

    .advantage {
      text-align: center;
      padding: 1rem 0;

      .advantage-icon {
        font-size: 60px;
        color: #2ac1fe;
      }

      .advantage-text {
        padding-top: 3rem;
        font-family: Roboto;
        color: #242424;
        font-size: 22px;

        @media screen and (max-width: 600px) {
          font-weight: 300;
        }
      }
    }
  }
}
</style>
