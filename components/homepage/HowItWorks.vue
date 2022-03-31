<template>
  <div class="hiw-container">
    <!-- Section title -->
    <h1 class="text-xs-center section-title">Comment ça marche</h1>

    <!-- Steps -->
    <v-layout row wrap class="steps-container">
      <v-flex md4 class="text-xs-center step-container">
        <h2 class="hiw-step-title">Réservez en ligne</h2>
        <p class="hiw-step-subtitle mx-auto">
          Comparez plusieurs offres en quelques clics
        </p>
        <div class="icon-circle mx-auto">
          <img src="/icons/homepage/calendar.png" class="mx-auto" alt="Icone calendrier">
        </div>
      </v-flex>

      <v-flex md4 class="text-xs-center step-container">
        <h2 class="hiw-step-title">Confirmez par téléphone</h2>
        <p class="hiw-step-subtitle mx-auto">
          Nos agents vous confirment votre réservation
        </p>
        <div class="icon-circle mx-auto">
          <img src="/icons/homepage/phone.png" class="mx-auto" alt="Icone téléphone">
        </div>
      </v-flex>

      <v-flex md4 class="text-xs-center step-container">
        <h2 class="hiw-step-title">Payez à la livraison</h2>
        <p class="hiw-step-subtitle mx-auto">
          Recevez votre billet chez vous quand vous voulez
        </p>
        <div class="icon-circle mx-auto last-circle">
          <img src="/icons/homepage/shipped.png" class="mx-auto" alt="Icone livraison">
        </div>
      </v-flex>
      <div class="divider-c">
        <div class="divider-c-s"></div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'how-it-works'
}
</script>

<style lang="scss" scoped>

.hiw-container {
  background-color: #fff;
  padding: 4rem 0;

  @media screen and (min-width: 901px) {
      .flex.text-xs-center.step-container.md4 {
      position: relative;
      z-index: 1;
      }
      .divider-c-s {
          border: 8px dotted #e8edf2;
          border-top: 0px;
          width: 65%;
          margin: auto;
      }
      .divider-c {
        width: 100%;
        position: relative;
        bottom: 26px;
        top: -75px;
        left: 0;
        right: 0px;
        z-index: 0;
      }
  }
  @media screen and (max-width: 900px) {
    .divider-c {
      display: none !important;
    }
  }
  @media screen and (max-width: 960px) {
    padding-top: 160px;
  }

  @media screen and (max-width: 600px) {
    padding: 3rem 1rem;
    padding-top: 380px;
  }
}

.steps-container {
  padding-top: 3rem;

  @media screen and (max-width: 360px) {
    padding-top: 2rem;
  }
}

.step-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.hiw-step-title {
  font-family: Roboto;
  font-size: 28px;
  font-weight: 300;
  color: #0d253e;

  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
}

.hiw-step-subtitle {
  font-family: Roboto;
  font-size: 22px;
  font-weight: 300;
  color: #9ea8b2;
  max-width: 300px;

  @media screen and (max-width: 700px) {
    font-size: 20px;
    max-width: 95%;
  }
}

.icon-circle {
  height: 150px;
  width: 150px;
  background-color: #f4f8fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 700px){
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  img {
    -webkit-user-drag: none;
    user-select: none;
  }
}

.last-circle {
  @media screen and (max-width: 360px){
    margin-bottom: 0;
  }
}
</style>
