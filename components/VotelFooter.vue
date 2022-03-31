<template>
  <v-footer height="auto" class="votel-footer">
    <div class="footer-content-container">
      <!-- Footer logo -->
      <img src="/images/logox80white.png" class="mx-auto footer-logo" alt="Logo Votel Réservation" />
      <!-- Footer content -->
      <div class="footer-content">
        <v-layout wrap>
          <v-flex md layout column class="footer-section ">
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

          <v-flex md4 layout column class="footer-section ">
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
          </v-flex>

          <v-flex md6 layout column class="footer-section">
            <h5 class="footer-content-title">Contactez-nous</h5>

            <!-- Text -->
            <v-layout wrap column justify-center class="footer-content-text ">
              <v-flex class="footer-phone mt-2x">
                <v-icon size="26" dark>phone_android</v-icon>
                <a href="tel:+213671214301" class="contact-text">+213 671 214 301</a>
              </v-flex>

              <v-flex class="mt-2x">
                <v-icon size="28" dark>mail</v-icon>
                <a href="mailto:contact@votel-dz.com" class="contact-text">contact@votel-dz.com</a>
              </v-flex>
              <v-flex class="mt-2x">
                <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: sketchtool 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                    <title>F4099F5D-9960-4D1C-84AB-FD358274931D</title>
                    <desc>Created with sketchtool.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Votel-homepage---Multicity" transform="translate(-1106.000000, -4859.000000)">
                            <g id="footer" transform="translate(0.000000, 4505.000000)">
                                <g id="reach-us" transform="translate(1106.000000, 194.000000)">
                                    <g id="social-icons" transform="translate(0.000000, 160.000000)">
                                        <g id="Facebook">
                                            <path d="M0,19 C0,8.50658923 8.50658923,0 19,0 C29.4934108,0 38,8.50658923 38,19 C38,29.4934108 29.4934108,38 19,38 C8.50658923,38 0,29.4934108 0,19 Z" id="back" fill="#3B5998"></path>
                                            <path d="M20.3470644,29.5382524 L20.3470644,19.2012493 L23.2005294,19.2012493 L23.5786751,15.6390608 L20.3470644,15.6390608 L20.3519125,13.8561511 C20.3519125,12.9270775 20.4401869,12.4292586 21.7746049,12.4292586 L23.558475,12.4292586 L23.558475,8.86666667 L20.7046061,8.86666667 C17.2766505,8.86666667 16.070099,10.5947113 16.070099,13.5007391 L16.070099,15.6394642 L13.9333333,15.6394642 L13.9333333,19.2016527 L16.070099,19.2016527 L16.070099,29.5382524 L20.3470644,29.5382524 Z" id="Shape" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg width="39px" height="38px" viewBox="0 0 39 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: sketchtool 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                    <title>0DB74234-0C46-42AD-86EF-58CCBCCDB066</title>
                    <desc>Created with sketchtool.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Votel-homepage-2" transform="translate(-1179.000000, -4749.000000)">
                            <g id="footer" transform="translate(0.000000, 4395.000000)">
                                <g id="reach-us" transform="translate(1106.000000, 194.000000)">
                                    <g id="social-icons" transform="translate(0.000000, 160.000000)">
                                        <g id="LinkedIN" transform="translate(73.333333, 0.000000)">
                                            <path d="M0,19 C0,8.50658923 8.50658923,0 19,0 C29.4934108,0 38,8.50658923 38,19 C38,29.4934108 29.4934108,38 19,38 C8.50658923,38 0,29.4934108 0,19 Z" id="back" fill="#0077B5"></path>
                                            <path d="M13.4270957,15.7366299 L13.4270957,28.6738181 L9.12128023,28.6738181 L9.12128023,15.7366299 L13.4270957,15.7366299 Z M13.7106876,11.7346357 C13.7106876,12.9768441 12.7756427,13.9708169 11.274274,13.9708169 L11.2467575,13.9708169 C9.80119562,13.9708169 8.86666667,12.9768441 8.86666667,11.7346357 C8.86666667,10.4661526 9.82965799,9.5 11.3026504,9.5 C12.7756427,9.5 13.6827412,10.4661526 13.7106876,11.7346357 Z M28.9555136,21.2560298 L28.9553416,28.6738181 L24.6496981,28.6738181 L24.6496981,21.7524151 C24.6496981,20.0139072 24.0266215,18.8275969 22.467898,18.8275969 C21.2783256,18.8275969 20.5697758,19.6273432 20.2585815,20.3997844 C20.144732,20.676613 20.1167855,21.0623184 20.1167855,21.4489684 L20.1167855,28.6741616 L15.8104541,28.6741616 C15.8104541,28.6741616 15.8672069,16.9509322 15.8104541,15.7369734 L20.1167855,15.7369734 L20.1167855,17.5694176 C20.6882687,16.6885289 21.7117964,15.4328397 23.9979011,15.4328397 C26.8313262,15.4328397 28.9555136,17.2822851 28.9555136,21.2560298 Z" id="Shape" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <img src="/images/instagram.png" alt="">
                <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: sketchtool 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                    <title>7D14A7B5-1D2C-474E-9B60-27C143988615</title>
                    <desc>Created with sketchtool.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Votel-homepage-2" transform="translate(-1326.000000, -4749.000000)">
                            <g id="footer" transform="translate(0.000000, 4395.000000)">
                                <g id="reach-us" transform="translate(1106.000000, 194.000000)">
                                    <g id="social-icons" transform="translate(0.000000, 160.000000)">
                                        <g id="Twitter" transform="translate(220.000000, 0.000000)">
                                            <path d="M0,19 C0,8.50658923 8.50658923,0 19,0 C29.4934108,0 38,8.50658923 38,19 C38,29.4934108 29.4934108,38 19,38 C8.50658923,38 0,29.4934108 0,19 Z" id="back" fill="#55ACEE"></path>
                                            <path d="M18.9309521,15.043438 L18.9708224,15.7008809 L18.306317,15.6203777 C15.8875175,15.311782 13.7743905,14.2652403 11.980226,12.5075869 L11.1030789,11.6354689 L10.8771471,12.2794945 C10.3987032,13.7151351 10.7043757,15.2312788 11.7011337,16.2509861 C12.232738,16.8145086 12.1131271,16.8950118 11.1961097,16.5595817 C10.8771471,16.4522441 10.5980548,16.3717409 10.5714746,16.4119925 C10.4784439,16.5059129 10.7974064,17.7268783 11.0499185,18.2098975 C11.3954613,18.8807576 12.0998369,19.5382004 12.8706632,19.9272993 L13.5218784,20.2358949 L12.7510522,20.2493121 C12.0068062,20.2493121 11.980226,20.2627293 12.0599666,20.5444905 C12.3257688,21.4166086 13.3756872,22.3423955 14.5452167,22.7449116 L15.3692033,23.0266728 L14.6515375,23.4560232 C13.588329,24.0732145 12.3390589,24.4220617 11.0897888,24.4488961 C10.491734,24.4623133 10,24.5159821 10,24.5562337 C10,24.6904057 11.6213931,25.441769 12.5649907,25.7369474 C15.3957835,26.6090655 18.7581807,26.2333839 21.2833011,24.7440746 C23.0774655,23.6841156 24.87163,21.577615 25.7089068,19.5382004 C26.1607704,18.4514071 26.6126341,16.4656613 26.6126341,15.51304 C26.6126341,14.8958488 26.6525044,14.8153456 27.3967504,14.0773995 C27.8353239,13.6480491 28.2473173,13.178447 28.3270579,13.044275 C28.459959,12.7893482 28.4466689,12.7893482 27.7688734,13.0174406 C26.6392143,13.4199566 26.479733,13.3662878 27.0379175,12.7625138 C27.4499108,12.3331633 27.9416448,11.5549657 27.9416448,11.3268732 C27.9416448,11.2866216 27.7422932,11.3537076 27.5163614,11.4744624 C27.2771394,11.6086345 26.7455351,11.8098925 26.3468319,11.9306473 L25.6291661,12.1587397 L24.9779509,11.7159721 C24.619118,11.4744624 24.1140939,11.2061184 23.8482918,11.1256152 C23.1704963,10.9377744 22.1338679,10.9646088 21.522523,11.179284 C19.8612596,11.7830581 18.8113411,13.3394534 18.9309521,15.043438 Z" id="Shape" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
              </v-flex>

              <!-- <v-flex>
                <a href="https://facebook.com/messages/t/voteldz" target="_blank">
                  <img style="max-width: 100%" src="/images/contact_us_messenger.png" alt="Contactez-nous sur messenger">
                </a>
              </v-flex> -->
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
      <div xs12 py-3 text-xs-center class="footer-copyright">
      Copyright {{ currentYear }} Votel. All Rights Reserved.
      </div>
    </div>
    <!-- Footer copyright -->
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
.footer-content-text svg, 
.footer-content-text img {
    margin: 0px 30px 0 0;
}
.footer-content-text img {
    width: 40px;
}
.footer-content ul {
    padding-left: 0px !important;
}
.footer-content li,.mt-2x {
    margin: 20px 0px 0px 0px;
}
h5.footer-content-title {
    margin: 30px 0px;
}
.theme--light .footer {
  background: #2a2a2a;
  border-color: #2a2a2a;
  flex-direction: column;
}

.footer-content-container {
  display: block;
  padding: 5rem 1rem 0;
  width: 100%;
  text-align: center;
  background:#252525;

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
      margin-top:0px;
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

// .footer-phone {
//   padding: 1rem;
//   font-size: 26px;
//   border: 1px solid #2ac1fe;
//   border-radius: 7px;
//   margin: 1rem 0;

//   i, a {
//     vertical-align: middle;
//   }

//   i {
//     animation-name: trin;
//     animation-duration: 1.5s;
//     animation-iteration-count: infinite;
//     animation-timing-function: linear;
//   }
// }

.footer-copyright {
  width: 100%;
  text-align: center;
  padding: 7rem 0 2rem;
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
