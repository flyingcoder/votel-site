<template>
  <div class="a-propos-infos">
    <v-layout wrap v-for="(info, index) in infos" :key="index" class="info-container">
      <v-flex md4 sm12 class="info-icon-container">
        <div :class="`info-icon icons icon-${ info.icon }`"></div>
      </v-flex>
      <v-flex md8 sm12 class="info-title-container">
        <h3 class="info-title">{{ info.title }}</h3>
        <p class="info-text" v-html="info.text"></p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import 'simple-line-icons/css/simple-line-icons.css'

export default {
  name: 'a-props-infos',

  data () {
    return {
      infos: {
        raison: {
          title: `La raison d'existence`,
          icon: 'bulb',
          text: `Votel est née à partir d’un besoin sur le marché de réservation
          de voyage, les gens perdent beaucoup de temps et d’effort en
          déplacement chez les agences pour faire des simples recherches et
          comparaison des tarifs pour des billets d’avion ou des chambres
          d'hôtels pour leurs voyages.`
        },

        alternative: {
          title: `L'alternatif OTA Algérienne`,
          icon: 'refresh',
          text: `Votel Réservation vient avec le concept d’une OTA (Agence de
          voyage en ligne) en Algérie, un portail web accessible 24/7 avec un
          support clients assurée par une équipe à taille humaine avec haute
          disponibilité afin de rester proches des voyageurs dans l’organisation
          de leurs projets de voyage.<br/> Aussi avec un service de livraison en
          convention avec des professionnels du domaine “FastMail” Votel a pu
          compléter sa chaîne de valeur pour proposer pour assurer un service
          complet qui commence par une réservation en ligne sur le site et se
          termine par une livraison à domicile avec un paiement en Cash comme
          alternatif au E-Paiement qui n’est pas encore assez démocratisé en
          Algérie.`
        },

        vision: {
          title: 'Vision',
          icon: 'eyeglass',
          text: `Votel réservation se donne une visionne de devenir l’adresse
          incontournable numéro un en Algérie pour toute personne désirante un
          billet d’avion ou une réservation d'hôtel. Nous continuons sans cesse
          de travailler et innover afin de proposer toujours le meilleurs dans
          ce secteur pour atteindre et garder cette position et être toujours à
          la hauteur de nos clients & collaborateurs.`
        },

        pourquoi: {
          title: 'Pourquoi nous ?',
          icon: 'badge',
          text: `Votel est le choix le plus judicieux pour toute personne qui
          cherche un bon service, sans se déplacer avec le meileurs prix. Nous
          travaillions continuellement et sans cesse afin de garder la première
          position avec ces valeurs sur le marché.`
        },

        structure: {
          title: 'Structure',
          icon: 'layers',
          text: `Notre back-office se composent de plusieurs personnes (Cadres
          stratégiques et agents opérationnels) divisé entre:<br/> ● Département
          technique.<br/> ● Téléconseiller & Service client.<br/> ● Service
          commerciale.`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.a-propos-infos {
  padding: 5rem 0;

  .info-container {
    padding: 3rem 0;

    @media screen and (max-width: 960px) {
      padding: 0 0 2rem 0;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  .info-icon-container {
    .info-icon {
      color: #2ac1fe;
      font-size: 96px;
      width: 180px;
      height: 180px;
      border: 1px dashed #a1a1a1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 960px) {
        margin: auto;
        margin-bottom: 1rem;
      }
    }
  }

  .info-title {
    font-size: 32px;
    color: black;
    font-weight: normal;

    @media screen and (max-width: 960px) {
      text-align: center;
    }

    &::after {
      content: "";
      display: block;
      margin-top: .5rem;
      width: 100px;
      height: 1px;
      border: 1px solid #2ac1fe;

      @media screen and (max-width: 960px) {
        margin: auto;
        margin-top: .5rem;
      }
    }
  }

  .info-text {
    padding: 3rem 0;
    font-family: Roboto;
    font-size: 16px;
    color: #515151;
    line-height: 24px;
    max-width: 700px;

    @media screen and (max-width: 960px) {
      margin: auto;
      text-align: justify;
    }
  }
}
</style>
