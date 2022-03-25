<template>
  <div>
    <form @submit.prevent="submit" class="contact-form">
      <v-text-field
        name="name"
        autocomplete="nom"
        v-model="request.name"
        placeholder="Nom"
        required
      />

      <v-text-field
        name="email"
        autocomplete="email"
        v-model="request.email"
        placeholder="Email"
        required
      />

      <v-text-field
        name="phone"
        type="tel"
        autocomplete="phone"
        v-model="request.phone"
        placeholder="Téléphone"
        required
      />

      <v-text-field
        name="message"
        autocomplete="message"
        v-model="request.message"
        placeholder="Message"
        required
        textarea
      />

      <v-btn type="submit" depressed class="contact-form-submit">Envoyer message</v-btn>
    </form>

    <!-- Success snackbar -->
      <v-snackbar
        :timeout="6000"
        bottom
        multi-line
        v-model="success"
        color="success"
      >
        Votre message a été envoyé avec succès.<br />
        Un de nos opérateur vous contactera dès que possible.
        <v-btn flat @click.native="success = false" >Fermer</v-btn>
      </v-snackbar>

      <!-- Error snackbar -->
      <v-snackbar
        :timeout="6000"
        bottom
        multi-line
        v-model="error"
        color="error"
      >
        Une érreur s'est produite lors de l'envoie de votre message.<br />
        Veuillez réessayer plus tard, merci.
        <v-btn flat @click.native="error = false" >Fermer</v-btn>
      </v-snackbar>
  </div>
</template>

<script>
const SUBMIT_LINK = 'https://formspree.io/contact@votel-dz.com'

export default {
  name: 'contact-form',

  data () {
    return {
      success: false,
      error: false,
      request: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },

  methods: {
    async submit () {
      try {
        await fetch(SUBMIT_LINK, {
          method: 'POST',
          body: JSON.stringify({
            name: this.request.name,
            _language: 'fr',
            _subject: `Contact sur votel-dz.com <${this.request.email}>`,
            _replyto: this.request.email,
            phone: this.request.phone,
            message: this.request.message
          })
        })

        this.success = true
      } catch (e) {
        this.error = true
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  /deep/ label {
    color: #040e28;
    font-family: Roboto;
    font-size: 18px;
    top: 10px;

    &::after {
      font-size: 22px;
      font-weight: bold;
      color: #ff5e32;
      padding-left: .3rem;
    }
  }

  .input-group:first-child {
    padding: 0;
  }

  /deep/ input {
    width: 100%;
    height: 46px;
    padding: 0 1rem;
    border: 1px solid #dce1ea;
    border-radius: 3px;
    color: #3c5065;
    font-size: 15px;

    &:focus {
      outline: 1px auto #2ac1fe;
    }

    &::placeholder {
      font-family: Roboto;
      color: #a6b1c2;
    }
  }

  /deep/ textarea {
    font-size: 15px;
    color: #3c5065;

    &::placeholder {
      font-family: Roboto;
      color: #a6b1c2;
    }
  }

  /deep/ .input-group--textarea {
    /deep/ .input-group__input {
      padding: 1rem;
      border: 1px solid #dce1ea !important;
    }
  }

  /deep/ .input-group__details {
    &::before, &::after {
      background: none !important;
      border: none !important;
    }
  }

  .contact-form-submit {
    font-family: Roboto;
    margin: 1rem 0 0 0;
    padding: 0 2rem;
    height: 52px;
    color: white;
    font-weight: bold;
    letter-spacing: 0.07em;
    border-radius: 4px;
    background-color: #2ac1fe !important;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
}
</style>
