<template>
  <div>
    <coming-soon />
    <visa-header>
      <template slot="title">
        Réservation d'hôtel confirmée + Billet Telex
      </template>
      <template slot="description">
        <div style="text-align: justify">
          <p>
            Nous assurons pour vous une réservation d'hôtel confirmée avec un billet
            Telex. Indispensable pour compléter votre dossier pour une demande de VISA.
          </p>
        </div>
      </template>
    </visa-header>

    <service-form type="telex" />

    <div class="footer-telex">
      <v-layout align-start wrap>
        <v-flex md6 class="service-container">
          <div class="service">
            <div class="icon-circle mx-auto">
              <img src="/icons/hotel.png" class="mx-auto" alt="Icone hotel">
            </div>

            <h4 class="service-title">
              La réservation d'hôtel confirmée vous sera communiqué avec:
            </h4>

            <ul>
              <li><span>Le nom et adresse complets de l'hôtel</span></li>
              <li><span>Le code de confirmation</span></li>
              <li><span>Le numéro de téléphone de l'hôtel</span></li>
            </ul>
          </div>
        </v-flex>

        <v-flex md6 class="service-container">
          <div class="service">
            <div class="icon-circle mx-auto">
              <img src="/icons/plane.png" class="mx-auto" alt="Icone avion">
            </div>

            <h4 class="service-title">
              Le billet d'avion Telex comporte votre plan de vol prévisionnel
              avec tout les détails:
            </h4>

            <ul>
              <li><span>Aéroport de départ / Aéroport d'arrivée</span></li>
              <li><span>Date de départ / Date d'arrivée</span></li>
              <li><span>Numéro de réservation chez la compagnie aérienne</span></li>
            </ul>
          </div>
        </v-flex>
      </v-layout>
    </div>

    <services-footer />
  </div>
</template>

<script>
import VisaHeader from '@/components/visa/VisaHeader'
import ServiceForm from '@/components/services/Form'
import ServicesFooter from '@/components/services/Footer'
import ComingSoon from '@/components/services/ComingSoon'

export default {
  name: 'assurance',
  components: { VisaHeader, ServiceForm, ServicesFooter, ComingSoon }
}
</script>

<style lang="scss" scoped>
.footer-telex {
  padding: 4rem 1rem;
  background: white;

  p {
    font-family: Roboto;
    font-size: 22px;
    color: #222;
  }

  .service-container {
    display: flex;
    flex-direction: column;

    .service {
      max-width: 470px;
      margin:auto;
    }

    .icon-circle {
      height: 150px;
      width: 150px;
      background-color: #f4f8fc;
      border-radius: 50%;
      display: flex;
      align-items: center;

      @media screen and (max-width: 360px){
        margin-top: 1rem;
        margin-bottom: 4rem;
      }

      img {
        -webkit-user-drag: none;
        user-select: none;
      }
    }

    .service-title {
      padding-top: 2rem;
      font-size: 24px;
      font-weight: normal;
      color: #242424;
      letter-spacing: 0.02em;
    }

    ul {
      padding-top: 2rem;
      padding-left: 1.5rem;

      & > li {
        font-family: 'Lucida Grande';
        font-size: 20px;
        color: #2ac1fe;
        text-align: left;
        letter-spacing: 0.03em;
        line-height: 42px;
      }

      & > li > span {
        font-family: 'Roboto';
        font-size: 20px;
        color: #242424;
        text-align: left;
        letter-spacing: 0.03em;
        text-decoration: none;
      }
    }
  }
}
</style>
