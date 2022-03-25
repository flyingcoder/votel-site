<template>
  <div class="service-form-container">
    <form class="service-form mx-auto" @submit.prevent="submit" ref="form">
      <h2 class="service-form-title text-xs-center">Remplir le Formulaire</h2>
      <div class="service-spacer"></div>
      <p class="service-form-description text-xs-center">
        Merci de remplir le formulaire ci-dessous.<br />
        Un conseiller client prendra contact avec vous sous 24 heures.
      </p>

      <div class="form-fields">
        <v-text-field
          v-if="type !== 'visa'"
          name="destination"
          v-validate="'required|alpha_spaces'"
          data-vv-name="destination"
          :error-messages="errors.collect('destination')"
          autocomplete="destination"
          label="Pays de destination"
          v-model="request.destination"
          placeholder="Entrez votre destination de voyage"
          required
        />

        <v-text-field
          name="name"
          v-validate="'required|alpha_spaces'"
          data-vv-name="name"
          :error-messages="errors.collect('name')"
          autocomplete="nom"
          label="Nom et prénom"
          v-model="request.name"
          placeholder="Entrez votre nom complet"
          required
        />

        <v-text-field
          name="phone"
          mask="#### ## ## ##"
          v-validate="'required'"
          data-vv-name="phone"
          :error-messages="errors.collect('phone')"
          autocomplete="phone"
          type="tel"
          label="Numéro de téléphone"
          v-model="request.phone"
          placeholder="Entrez votre numéro de téléphone"
          required
        />

        <!-- Wilaya menu -->
        <wilaya-picker v-model="request.wilaya"/>

        <v-text-field
          name="email"
          v-validate="'required|email'"
          data-vv-name="email"
          :error-messages="errors.collect('email')"
          autocomplete="email"
          type="email"
          label="Email"
          v-model="request.email"
          placeholder="Entrez votre adresse email"
          required
        />

        <v-menu
          ref="dateMenu"
          v-model="dateMenu"
          :nudge-bottom="30"
          :return-value.sync="date"
          lazy
          offset-y
          style="width: 100%"
          min-width="290px"
        >
          <v-text-field
            name="date"
            v-validate="'required'"
            data-vv-name="date"
            :error-messages="errors.collect('date')"
            slot="activator"
            v-model="formattedDate"
            placeholder="Entrez votre date de départ"
            label="Date de départ"
            required
            readonly
          ></v-text-field>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            locale="fr-fr"
            :min="minDate"
            @input="updateDate(date)"
          />
        </v-menu>

        <!-- Duration menu -->
        <v-menu
          v-if="type === 'visa' && durations"
          ref="dateMenu"
          lazy
          style="width: 100%"
          min-width="300px"
        >
          <v-text-field
            name="duration"
            v-validate="'required|integer'"
            data-vv-name="duration"
            :error-messages="errors.collect('duration')"
            slot="activator"
            v-model="request.duration"
            placeholder="Sélectionner la durée de votre visa"
            label="Type de visa"
            required
            readonly
          ></v-text-field>
          <v-list>
            <v-list-tile
              v-for="(item, index) in durations"
              :key="index"
              @click="updateDuration(item)"
            >
              <v-list-tile-title>{{ item }} jours</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-text-field
          v-if="!durations"
          name="duration"
          type="number"
          min="1"
          v-validate="'required|integer'"
          data-vv-name="duration"
          :error-messages="errors.collect('duration')"
          autocomplete="duration"
          label="Durée de voyage"
          v-model="request.duration"
          placeholder="Entrez la durée prévue de votre voyage"
          required
        />

        <!-- Submit button -->
        <v-btn type="submit" :loading="loading" :disabled="done" depressed class="service-form-submit" block>
          {{ done ? 'Demande envoyée' : 'Envoyer' }}
        </v-btn>
      </div>
    </form>

    <!-- Success snackbar -->
    <v-snackbar
      :timeout="6000"
      bottom
      multi-line
      v-model="success"
      color="success"
    >
      Votre demande a été envoyé avec succès.<br />
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
      Une érreur s'est produite lors de l'envoie de votre demande.<br />
      Veuillez réessayer plus tard, merci.
      <v-btn flat @click.native="error = false" >Fermer</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import moment from 'moment'
import REQUEST_VISA_MUTATION from '~/apollo/mutations/requestVisa'
import REQUEST_ASSURANCE_MUTATION from '~/apollo/mutations/requestAssurance'
import REQUEST_TELEX_MUTATION from '~/apollo/mutations/requestTelex'
import WilayaPicker from '~/components/search/WilayaPicker'
import wilayas from '~/assets/wilayas.json'

const EMPTY_REQUEST = {
  name: null,
  phone: null,
  email: null,
  date: null,
  duration: null,
  wilaya: null
}

export default {
  name: 'service-form',
  props: ['type', 'destination', 'durations'],
  components: { WilayaPicker },

  $_veeValidate: {
    validator: 'new'
  },

  data () {
    return {
      dateMenu: false,
      durationMenu: false,
      date: null,
      formattedDate: null,
      minDate: moment().format('YYYY-MM-DD'),
      success: false,
      error: false,
      loading: false,
      done: false,
      wilayas,

      request: {
        ...EMPTY_REQUEST,
        destination: this.destination
      },

      validationDictionary: {
        custom: {
          name: {
            required: 'Le champ nom est requis',
            alpha_spaces: 'Le champ nom ne peut contenir que des lettres et espaces'
          },
          phone: {
            required: 'Le champ numéro de téléphone est requis'
          },
          email: {
            required: 'Le champ email est requis',
            email: 'Vous devez entrer une adresse email valide'
          },
          date: {
            required: 'Le champ date est requis'
          },
          duration: {
            required: 'Le champ durée de voyage est requis',
            integer: 'Le champ duréer de voyage doit être un nombre correct'
          },
          destination: {
            required: 'Le champ destination est requis',
            alpha_spaces: 'Le champ destination ne peut contenir que des lettres et espaces'
          },
          wilaya: {
            required: 'Le champ Wilaya est requis',
            integer: 'Le champ Wilaya doit être sélectionné correctement'
          }
        }
      }
    }
  },

  methods: {
    updateDate (date) {
      moment.locale('fr')
      this.formattedDate = moment(date).format('DD MMM YYYY')
      this.$refs.dateMenu.save(date)
      this.request.date = date
    },

    updateDuration (duration) {
      this.request.duration = duration
    },

    updateWilaya (id) {
      this.request.wilaya = parseInt(id, 10)
    },

    clear () {
      this.request = {
        ...EMPTY_REQUEST,
        destination: this.type !== 'visa' ? null : this.destination
      }
      this.formattedDate = null

      // Clearing errors directly doesn't work for some reason
      setTimeout(() => {
        this.errors.clear()
      }, 50)
    },

    async submit () {
      const check = await this.$validator.validateAll()
      if (!check) return
      this.loading = true

      if (this.type === 'visa') {
        try {
          await this.$apollo.mutate({
            mutation: REQUEST_VISA_MUTATION,
            variables: { ...this.request, destination: `${this.destination}${this.request.duration}` }
          })

          // this.clear()
          this.loading = false
          this.success = true
          this.done = true
        } catch (error) {
          this.loading = false
          this.error = true
        }
      }

      if (this.type !== 'visa') {
        try {
          await this.$apollo.mutate({
            mutation: this.type === 'assurance'
              ? REQUEST_ASSURANCE_MUTATION : REQUEST_TELEX_MUTATION,
            variables: this.request
          })

          this.clear()
          this.loading = false
          this.success = true
          this.done = true
        } catch (error) {
          this.loading = false
          this.error = true
        }
      }
    }
  },

  mounted () {
    this.$validator.localize('fr', this.validationDictionary)
  }
}
</script>

<style lang="scss" scoped>
.service-form-container {
  background: url('/images/contact_map.png') center no-repeat;
  padding: 0 0 5rem 0;

  @media screen and(max-width: 600px) {
    margin: 0 1rem;
  }
}

.service-form {
  max-width: 690px;
  padding: 5rem 6.5rem;

  @media screen and(max-width: 600px) {
    padding: 5rem 1rem;
    margin: 1rem;
  }

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1);

  .service-form-title {
    font-size: 40px;
    font-weight: normal;
    color: #040e28;
    padding: 0 0 2rem 0;

    @media screen and (max-width: 360px) {
      font-size: 26px;
    }
  }

  .service-spacer {
    margin: auto;
    width: 120px;
    height: 2px;
    border: 1px solid #2ac1fe;
  }

  .service-form-description {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    color: #3c5065;
    line-height: 30px;
    padding: 1.5rem 0 0 0;
  }

  .form-fields {
    padding-top: 1rem;

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

    /deep/ .input-group__details {
      &::before, &::after {
        background: none !important;
        border: none !important;
      }
    }

    .service-form-submit {
      font-family: Roboto;
      margin: 1rem 0 0 0;
      height: 52px;
      color: white;
      font-weight: bold;
      letter-spacing: 0.07em;
      border-radius: 4px;
      background-color: #2ac1fe;
    }
  }
}
</style>