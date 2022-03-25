<template>
  <v-container>
    <v-layout wrap class="about" justify-center align-center>
      <v-flex md6 sm12>
        <div class="about-votel mx-auto">
          <h3 class="about-title">À propos de Votel</h3>

          <div class="about-description">
            <p>
              La première OTA (agence de voyage en ligne) en Algérie avec une
              livraison à domicile. Votel Réservation permet à ses utilisateurs une
              comparaison des vols et chambres d’hotels en lignes et faire la
              réservation sans prendre la peine de se déplacer chez une agence
              physique.
            </p>
            <p>
              Notre équipe reprendra contact avec vous une fois la réservation
              faite pour organiser tout les détails de livraison & paiement.
            </p>
            <p>
              Nous offrons des services complémentaires ainsi qu’un support
              client en ligne sur la plateforme Messenger (Facebook) de 09h à 00h
              afin de rester proches de notre clientèlle.
            </p>

            <nuxt-link to="/apropos" class="more-info">En savoir plus</nuxt-link>
          </div>
        </div>
      </v-flex>

      <v-flex md6 sm12 class="about-image-container">
        <img src="/images/grande_poste.png" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'homepage-about'
}
</script>

<style lang="scss" scoped>
.about {
  .about-votel {
    padding: 3rem;
    max-width: 660px;
    background-color: white;
    box-shadow: 0px 4px 10px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1);

    @media screen and (max-width: 600px){
      padding: 1.5rem;
    }
  }

  .about-title {
    font-size: 34px;
    color: #6b6b6b;
    letter-spacing: 0.03em;

    @media screen and (max-width: 600px){
      font-size: 26px;
      font-weight: normal;
      text-align: center;
    }
  }

  .about-description {
    padding: 2rem 4rem 0 0;

    @media screen and (max-width: 960px) {
      padding: 2rem 0 0 0;
    }

    p {
      padding-bottom: 1rem;
      font-family: Roboto;
      text-align: justify;
      color: #6b6b6b;
      font-size: 16px;
      line-height: 25px;

      @media screen and (max-width: 600px){
        font-size: 18px;
      }
    }

    .more-info {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      color: #2ac1fe;
      text-transform: uppercase;
    }
  }

  .about-image-container {
    text-align: center;
    padding: 1rem 0;
    display: flex;
    justify-items: center;

    img {
      zoom: 110%;
      margin-left: -5rem;
      max-width: 100%;

      @media screen and (max-width: 700px) {
        width: 100%
      }

      @media screen and (max-width: 960px) {
        margin-left: 0;
        margin: auto;
      }
    }
  }
}
</style>
