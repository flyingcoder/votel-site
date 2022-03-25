<template>
  <div>
    <coming-soon />
    <visa-header>
      <template slot="title">
        Assurance de voyage
      </template>
      <template slot="description">
        <div style="text-align: justify">
          <p>
            Que vous partiez en voyage d'affaire ou en vacances, MACIR VIE vous
            couvre en cas d'accidents, de maladies inopinée, d'un retard de vol ou
            même d'une perte de bagages, et ce, tout au long de votre séjour à l'étranger.
          </p>
          <p>
            L'assurance voyage est obligatoire si vous voyagez vers un pays de
            l'état Schengen.
            Celle de MACIR VIE est acceptée par toutes les chancelleries européennes.
          </p>
        </div>
      </template>
    </visa-header>

    <service-form type="assurance" />

    <div class="footer-assurance">
      <v-layout align-center wrap>
        <v-flex offset-md6 md2 text-xs-center>
          <p>En savoir plus sur</p>
        </v-flex>

        <v-flex md4>
          <a href="https://www.macirvie.com/" target="_blank">
            <img src="/images/macirvielogo.png" alt="Logo Macir Vie">
          </a>
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
.footer-assurance {
  padding: 4rem 1rem;
  background: white;

  p {
    font-family: Roboto;
    font-size: 22px;
    color: black;
    margin: 0;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  img {
    @media screen and (max-width: 600px) {
      zoom: 60%;
    }
  }
}
</style>
