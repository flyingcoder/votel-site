<template>
  <div>
    <visa-header
      :image="image"
      :destination="destination"
    >
      <template slot="description">
        Le visa électronique est une autorisation de voyage obligatoire pour les visiteurs arrivant à {{ destination }}
        par voie maritime ou aérienne pour des visites de tourisme, de transit ou d'affaires d'une duréer de moins de 90 jours.
      </template>
    </visa-header>

    <service-form destination="eg" type="visa" :durations="[30]" />
    <visa-steps />
    <services-footer />
  </div>
</template>

<script>
import VisaHeader from '@/components/visa/VisaHeader'
import ServiceForm from '@/components/services/Form'
import VisaSteps from '@/components/visa/VisaSteps'
import ServicesFooter from '@/components/services/Footer'

export default {
  name: 'visa-dubai',
  components: { VisaHeader, ServiceForm, VisaSteps, ServicesFooter },
  data () {
    return {
      destination: 'Égypte',
      image: '/images/visa/egypt.png'
    }
  }
}
</script>
