<template>
  <v-footer height="auto" class="votel-footer">
    <div class="footer-content-container">
      <!-- Footer logo -->
      <img src="/images/logox80white.png" class="mx-auto footer-logo" alt="Logo Votel Réservation" />

      <!-- Footer content -->
      <div class="footer-content">
        <v-layout wrap>
          <v-flex md6 layout column class="footer-section hidden-md-and-down">
            <h5 class="footer-content-title">À propos de Votel</h5>

            <!-- Text -->
            <v-layout wrap class="footer-content-text">
              <v-flex md6>
                <ul>
                  <li v-for="(item, index) in menu.slice(0,3)" :key="index">
                    <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                  </li>
                </ul>
              </v-flex>

              <v-flex md6>
                <ul>
                  <li v-for="(item, index) in menu.slice(3,6)" :key="index">
                    <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
                  </li>
                </ul>
              </v-flex>
            </v-layout>
          </v-flex>

          <!-- <v-flex md4 layout column class="footer-section hidden-md-and-down">
            <h5 class="footer-content-title">Top déstinations</h5>

            <v-layout wrap justify-center class="footer-content-text">
              <v-flex md6>
                <ul>
                  <li>Paris</li>
                  <li>Dubaï</li>
                  <li>Berlin</li>
                </ul>
              </v-flex>

              <v-flex md6>
                <ul>
                  <li>Istanbul</li>
                  <li>New York</li>
                  <li>London</li>
                </ul>
              </v-flex>
            </v-layout>
          </v-flex> -->

          <v-flex md6 layout column class="footer-section">
            <!-- <h5 class="footer-content-title">Contactez-nous</h5> -->

            <!-- Text -->
            <v-layout wrap column justify-center class="footer-content-text">
              <v-flex class="footer-phone hidden-lg-and-up">
                <v-icon size="36" dark>phone_android</v-icon>
                <a href="tel:+213671214301" class="contact-text">+213 671 214 301</a>
              </v-flex>

              <!-- <v-flex style="padding: .5rem 0">
                <v-icon size="28" dark>email</v-icon>
                <a href="mailto:contact@votel-dz.com" class="contact-text">contact@votel-dz.com</a>
              </v-flex> -->

              <v-flex>
                <a href="https://facebook.com/messages/t/voteldz" target="_blank">
                  <img style="max-width: 100%" src="/images/contact_us_messenger.png" alt="Contactez-nous sur messenger">
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <!-- Footer copyright -->
    <div xs12 py-3 text-xs-center class="footer-copyright">
      Copyright {{ currentYear }} Votel. All Rights Reserved.
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'votel-footer',

  data () {
    return {
      menu: [
        {
          title: 'À propos',
          url: 'apropos'
        },
        {
          title: 'Contact',
          url: 'contact'
        },
        {
          title: 'FAQ',
          url: 'faq'
        },
        {
          title: 'Visa Dubaï',
          url: 'visa/dubai'
        },
        {
          title: 'Visa Turquie',
          url: 'visa/turquie'
        },
        {
          title: 'Visa Égypte',
          url: 'visa/egypte'
        }
      ]
    }
  },

  computed: {
    currentYear () { return (new Date()).getFullYear() }
  }
}
</script>

<style lang="scss" scoped>
.theme--light .footer {
  background: #2a2a2a;
  border-color: #2a2a2a;
  flex-direction: column;
}

.footer-content-container {
  display: block;
  padding: 5rem 1rem;
  width: 100%;
  text-align: center;

  .footer-logo {
    -webkit-user-drag: none;
    user-select: none;
  }

  .footer-content {
    .footer-section {
      padding-top: 3rem;
      max-width: 300px;
      text-align: left;
      margin: auto;
    }

    .footer-content-title {
      color: white;
      font-size: 23px;
    }

    .footer-content-text {
      // padding-top: 2rem;
      font-family: Roboto;
      font-size: 22px;
      color: #fafbfd;

      .contact-text {
        padding-left: 1rem;
      }

      a {
        color: #fafbfd;
        text-decoration: none;
      }

      ul {
        list-style-type: none;
        text-align: left;
      }
    }
  }
}

@keyframes trin {
  from {
      transform:rotate3d(0, 0, 1, 0deg);
  }
  20%, 32%, 44%, 56%, 68% {
      transform: rotate3d(0, 0, 1, 0deg);
  }
  23%, 35%, 47%, 59%, 71% {
      transform: rotate3d(0,0,1,15deg);
  }
  26%, 38%, 50%, 62%, 74% {
      transform: rotate3d(0,0,1,0deg);
  }
  29%, 41%, 53%, 65%, 77% {
      transform: rotate3d(0,0,1,-15deg);
  }
  80% {
      transform:rotate3d(0, 0, 1, 0deg);
  }
}

.footer-phone {
  padding: 1rem;
  font-size: 26px;
  border: 1px solid #2ac1fe;
  border-radius: 7px;
  margin: 1rem 0;

  i, a {
    vertical-align: middle;
  }

  i {
    animation-name: trin;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

.footer-copyright {
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  background-color: #252525;
  font-family: Roboto;
  font-size: 20px;
  color: #8f8f8f;
  letter-spacing: 0.01em;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
}
</style>
