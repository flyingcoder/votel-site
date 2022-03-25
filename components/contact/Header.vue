<template>
  <div class="text-xs-center">
    <h2 class="contact-header-title">Contactez-nous</h2>
    <div class="contact-spacer"></div>
    <p class="contact-form-description">
      Merci de nous transmettre vos demandes,<br/>
      réclamations ou tout autres demandes de renseignement.<br/>
      Un conseiller client vous répondras dès que
      possible.
    </p>
  </div>
</template>

<script>
export default {
  name: 'contact-header'
}
</script>

<style lang="scss" scoped>
.contact-header-title {
  font-size: 32px;
  color: #6b6b6b;
  font-weight: normal
}

.contact-spacer {
  margin: auto;
  margin-top: 1rem;
  width: 120px;
  height: 2px;
  border: 1px solid #2ac1fe;
}

.contact-form-description {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  color: #3c5065;
  line-height: 30px;
  padding: 1.5rem 0 0 0;
}
</style>
