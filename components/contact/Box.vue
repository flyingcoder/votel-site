<template>
  <div class="contact-box mx-auto">
    <contact-header />

    <v-layout class="box-content" row wrap align-start>
      <v-flex sm7 xs12 class="form-container"><contact-form /></v-flex>

      <v-flex sm5 xs12><contact-info /></v-flex>
    </v-layout>
  </div>
</template>

<script>
import ContactHeader from '@/components/contact/Header'
import ContactInfo from '@/components/contact/Info'
import ContactForm from '@/components/contact/Form'

export default {
  name: 'contact-box',
  components: { ContactHeader, ContactInfo, ContactForm }
}
</script>

<style lang="scss" scoped>
.contact-box {
  margin: 4.5rem 0;
  padding: 4rem 6rem;
  max-width: 1065px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 2px 13px 0px rgba(204, 204, 204, 0.5);


  @media screen and (max-width: 1065px) {
    margin: 4.5rem 1rem !important;
    padding: 1rem;
  }

  .box-content {
    padding-top: 3rem;

    .form-container {
      padding-right: 5rem;

      @media screen and (max-width: 600px) {
        padding-right: 0;
        padding-bottom: 3rem;
      }
    }
  }
}
</style>
