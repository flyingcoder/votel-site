<template>
  <v-container>
    <v-layout wrap class="services-footer-container">
      <!-- Services -->
      <v-flex class="services">
        <h4 md6 xs12 class="service-title">Services complémentaires :</h4>
        <ul>
          <li v-for="(service, index) in services" :key="index">
            <nuxt-link :to="service.url">{{ service.title }}</nuxt-link>
          </li>
        </ul>
      </v-flex>

      <!-- Messenger info -->
      <v-flex md6 xs12 class="messenger-box">
        <p class="messenger-text">
          Service client disponible sur Messenger de 09h à 00h<br/>
          Pour toute demande d'informations complémentaires
        </p>

        <img class="messenger-icon" src="/icons/messenger_icon.png" alt="Logo Facebook Messenger" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'services-footer',
  data () {
    return {
      services: {
        assurance: { title: 'Assurance voyage', url: '/services/assurance' },
        telex: { title: `Réservation d'hôtel confirmée + Billet Telex`, url: '/services/telex' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.services-footer-container {
  padding: 4rem 1rem;
  display: flex;

  .services {
    margin: 1rem 0;

    .service-title {
      padding-bottom: 1.5rem;
      font-size: 24px;
      font-weight: normal;
      color: #242424;
      letter-spacing: 0.02em;
    }

    ul {
      padding-left: 1.5rem;

      & > li {
        font-family: 'Lucida Grande';
        font-size: 20px;
        color: #2ac1fe;
        text-align: left;
        letter-spacing: 0.03em;
        line-height: 42px;
      }

      & > li > a {
        font-family: 'Roboto';
        font-size: 20px;
        color: #242424;
        text-align: left;
        letter-spacing: 0.03em;
        text-decoration: none;
      }
    }
  }

  .messenger-box {
    margin: 1rem 0;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 1px 1px 0px rgba(100, 109, 130, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 959px) {
      flex-direction: column-reverse;
    }

    .messenger-text {
      margin: 0;
      padding: 0 2rem;
      flex: 1;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 300;
      color: #242424;
      line-height: 35px;
    }

    .messenger-icon {
      padding: 0 2rem;
      height: 70px;

      @media screen and (max-width: 600px) {
        margin: 2rem;
      }
    }
  }
}

</style>
