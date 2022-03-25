<template>
  <div>
    <header>
      <h1>Comment pouvons-nous vous aider ?</h1>
    </header>

    <v-container class="content" d-block>
      <h1 class="faq-title">Foire au Questions</h1>

      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item, i) in faq" :key="i">
          <div slot="header">{{ item.title }}</div>
          <v-card>
            <v-card-text v-html="item.description" />
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'faq',

  data () {
    return {
      faq: [
        {
          title: `Qui êtes-vous ?`,
          description: `Nous sommes un site de réservation en ligne, une branche
          de TIMGAD VOYAGES basée sur Alger qui propose la livraison des
          réservations à domicile couvrant plusieurs wilayas`
        },
        {
          title: `Qui est TIMGAD VOYAGES ?`,
          description: `C’est un réseau d'agences de voyages présent sur les
          cinq (5) wilayas en Algérie`
        },
        {
          title: `Vous existez depuis quand ?`,
          description: `Nous sommes une branche de TIMGAD VOYAGES existante
          depuis 1982, concernant le portail web c’est tout nouveau sur le marché`
        },
        {
          title: `Pouvons-nous vous rendre visite ?`,
          description: `Êtes-vous un particuler ou entreprise ?
          <ul style="padding-left: 1.5rem; list-style-type: lower-alpha">
            <li>si particuler: On vous propose une réservation en ligne et
              livraison à domicile
            </li>
            <li>une entreprise: On fixe un rendez-vous au niveau de Votel</li>
          </ul>
          `
        },
        {
          title: `Ma réservation est-elle confirmée ?`,
          description: `Oui`
        },
        {
          title: `Êtes-vous conventionné avec l'ĥotel`,
          description: `Oui, on a des liens directs avec les hôteliers.`
        },
        {
          title: `Quelles sont les horaires de travail opérationnel ?`,
          description: `7/7 jours. Quant au traitement des demandes de
          réservations: de 08h30 à 19h`
        },
        {
          title: `Garantie des vols ?`,
          description: `Vous pouvez confirmer avec les compagnies aériennes
          (avec votre nom ou N° de PNR)`
        },
        {
          title: `Garantie hôtel`,
          description: `Vous pouvez appeler l’hôtel et confirmer votre
          réservation avec le Booking reference
          a- Convernant l'hôtel, reçu contre paiement`
        },
        {
          title: `Délai de livraison`,
          description: `La livraison se fait sous 24H entre 08h30 et 17h.
          <br/>Par contre, le weekend on ne fait pas de livraison`
        },
        {
          title: `Comment ça marche ?`,
          description: `Le client peut accéder au site tout simplement, faire
          une recherche que ce soit vol ou hôtel selon ses besoins. Il choisit la
          date, la compagnie et la classe qui le convient il peut même choisir
          les horaires souhaitées. Après avoir fait sa recherche, il passe à la
          réservation. Dans cette étape, le client remplit les cordonnées ainsi
          que le mode de paiement et confirme sa réservation (on peut demander
          aux clients de lire les conditions de voyage). Un mail et un SMS de
          confirmation seront transmis au client et un agent va le rappeler pour
          prendre la date et l’endroit de livraison. Une fois la réservation
          sera confirmée un coursier va  vous livrer votre voucher à l’adresse
          souhaitée (confirmation de réservation)`
        },
        {
          title: `Quels sont vos points de livraison`,
          description: `Votel assure la livraison dans 5 wilayas (Alger, Sétif,
          Constantine, Tlemcen, Blida)<br/>
          Au début la livraison sera uniquement sur Alger. Pour les autres
          wilayas le payement peut être effectué par virement bancaire (cpa)`
        },
        {
          title: `Comment faire si ma réservation n'est pas confirmée ?`,
          description: `En cas de problème avec sa réservation initiale, Nous
          allons régler le problème et vous contacter dans les plus brefs délais`
        },
        {
          title: `Y'a-t-il des frais à payer pour la livraison ?`,
          description: `Non vous n’allez rien ajouter, le prix affiché est le
          prix total y compris la livraison (inclus sur les frais de dossier)`
        },
        {
          title: `Est-ce que le paiement sera effectué en dinars (surtout pour
          les hôtels) ?`,
          description: `Oui, le paiement sera effectué en dinars`
        },
        {
          title: `Qu'est-ce que je dois présenter à l'aéroport/hôtel ?`,
          description: `Dans les deux cas le voucher qui vous a été délivré
          servira comme preuve de réservation (cela va de même pour le PDF
          reçu par email)`
        },
        {
          title: `Au cas ou il y ait plusieurs passagers: est-ce que chacun de
          ces derniers aura son propre voucher ?`,
          description: `Oui, chaque personne aura son propre voucher, avec le
          numéro de billet<br/>
          Pour l'hôtel, les passagers seront dans un seul voucher`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2ac1fe;

  h1 {
    font-size: 38px;
    text-align: center;
    font-weight: normal;
    color: white;
    letter-spacing: 0.03em;
    padding: 0 1rem;

    @media screen and (max-width: 700px) {
      font-size: 26px;
    }
  }
}

.content {
  padding: 5rem 1rem;
  max-width: 1200px;

  .faq-title {
    padding-bottom: 2rem;
    font-size: 32px;
    font-weight: normal;
    color: #6b6b6b;
    letter-spacing: 0.03em;

    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  /deep/ .expansion-panel__header {
    font-size: 22px;
    color: #6b6b6b;
    padding: 1.5rem 2rem;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  /deep/ .card__text {
    color: #6b6b6b;
    font-size: 20px;
    padding: 1rem 2rem;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
}
</style>
