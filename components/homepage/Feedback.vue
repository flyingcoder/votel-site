<template>
  <div class="feedback">
    <h2 class="feedback-title">Que pensent-ils de Votel</h2>

    <div class="feedback-persons">
      <a
        @click.prevent="selectFeedback(index)"
        v-for="(feedback, index) in feedbacks"
        :key="index"
      >
        <img
          :src="feedback.pic" alt="Photo profile utilisateur"
          :class="{'selected': selectedFeedback === index}"
        >
      </a>

      <p class="feedback-person-name">
        <a :href="feedbacks[selectedFeedback].url" target="_blank">
          {{ feedbacks[selectedFeedback].name }}
        </a>
      </p>

      <!-- <div class="feedback-score">
        <v-icon v-for="i in feedbacks[selectedFeedback].score" :key="i">star</v-icon>
        <v-icon v-for="i in (5 - feedbacks[selectedFeedback].score)" :key="i">star_border</v-icon>
      </div> -->

      <blockquote class="feedback-text" v-html="feedbacks[selectedFeedback].message"></blockquote>

      <div class="feedback-more-container">
        <a
          href="https://www.facebook.com/voteldz/reviews/"
          class="feedback-more"
          target="_blank"
        >
          Plus d'avis
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage-feedback',

  data () {
    return {
      selectedFeedback: 0,
      feedbacks: [
        {
          name: 'Hocine Boukabous',
          score: 4,
          pic: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-1/c2.0.160.160/p160x160/35359369_10215685964372072_8638374753582710784_n.jpg?_nc_cat=0&oh=80f23dfc5c2535f0257c94321f37827e&oe=5BEB0541',
          url: 'https://www.facebook.com/hocine.boukabous/posts/10215470514185952:0',
          message: `
            Une équipe sympathique, un accueil chaleureux et un service plus
            que correcte.<br/>
            L'idée de recevoir le billet et payer sans se déplacer nous fait
            gagner du temps et de l'énergie.<br/>
            Merci à toute l'équipe et beaucoup de succès.
          `
        },
        {
          name: 'Zora Guers',
          score: 5,
          pic: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-1/p160x160/18010226_1914140738874043_482984861516150432_n.jpg?_nc_cat=0&oh=ac49064a40917630de5f8d1b5104c1e6&oe=5BB68687',
          url: 'https://www.facebook.com/zora.guers/posts/2103530776601704:0',
          message: `
            C'est une équipe formidable très compétente et très sérieuse,
            franchement merci pour votre professionnalisme je suis très
            satisfaite pour le travail que vous faites et pour votre accueil et
            votre sympathie...bravo les filles je vous souhaite beaucoup de
            réussite dans l'avenir..vous êtes belles et adorables..bonne
            continuation
          `
        },
        {
          name: 'Yacef Mohamed Zineddine Zinoparis',
          score: 5,
          pic: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-1/p160x160/12510413_1009579162446755_8504555148595652081_n.jpg?_nc_cat=0&oh=dfdec402ae3b269deba9e053e3beea48&oe=5BB7D6F1',
          url: 'https://www.facebook.com/hanaa.boughrara/posts/2218466448163802:0',
          message: `
            Enfin des sites Internet sérieux existe en Algérie.<br/>
            franchement rien à dire.<br/>
            réserver un billet d’avion et se le faire livrer chez soit............
            c super pratique, et surtout ce qui m’a fait le plus frappé c’est la
            netteté de la recherche sur le site vraiment vraiment vraiment
            pratique est très très très facile de trouver ce que l’on cherche<br/>
            Bonne continuation à toute l’équipe
          `
        },
        {
          name: 'Hanaa Boughrara',
          score: 5,
          pic: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-1/p160x160/32470965_2213962435280870_8568484949798158336_n.jpg?_nc_cat=0&oh=80d1abae952674a1c38bf9995a1c008f&oe=5BEBD398',
          url: 'https://www.facebook.com/hanaa.boughrara/posts/2218466448163802:0',
          message: `
            Je tiens à remercier toute l'équipe votel , qui a été sérieuse ,
            professionnelle et très efficace , pour moi vous êtes une très belle
            découverte , j'espère que vous resterez tjrs avec cet esprit la ,
            surtout ne changez pas.<br/>
            PS: je remercie en particulier l'équipe qui réponds aux messages sur
            messenger , vous êtes les meilleurs<br/>
            Merci à tous , Ramadan moubarek inchallah
          `
        },
        {
          name: 'Imene DG',
          score: 5,
          pic: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-1/p160x160/34779047_1323121124485978_2042206814094753792_n.jpg?_nc_cat=0&oh=576c2d65c4a83bfb3bb6850c1911eb0b&oe=5BA10CE3',
          url: 'https://www.facebook.com/Shi.Nightlife/posts/1330807547050669:0',
          message: `
            Si je pouvais mettre une note de +5 étoiles je l’aurai fait enfin
            un site sérieux disponible et franchement rien à dire concernant la
            livraison très ponctuel le coursier .<br/>

            Je recommande à tous le monde ce site pour toutes réservations,
            je n’ai jamais été aussi satisfaite.<br/>

            Bonne continuation à toute l’équipe
          `
        }
      ]
    }
  },

  methods: {
    selectFeedback (index) {
      this.selectedFeedback = index
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  padding: 5rem 0;

  .feedback-title {
    font-size: 40px;
    font-weight: normal;
    color: #6b6b6b;
    text-align: center;
    letter-spacing: 0.03em;

    @media screen and (max-width: 600px) {
      font-size: 28px;
    }
  }

  .feedback-persons {
    text-align: center;
    padding-top: 2rem;

    img {
      margin: 1rem;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      filter: grayscale(100%);

      &.selected {
        filter: none;
      }

      @media screen and (max-width: 600px) {
        margin: .3rem;
        width: 45px;
        height: 45px;
      }
    }

    .feedback-person-name {
      padding: 1rem;
      margin: 0;
      font-family: Roboto;
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      color: #6b6b6b;

      a {
        color: inherit;
        text-decoration: none !important;
      }
    }

    .feedback-score {
      padding: .5rem 0 2rem 0;

      i {
        color: #FFDF00;
      }
    }

    .feedback-text {
      font-family: Roboto;
      font-size: 22px;
      color: #6b6b6b;
      text-align: center;
      line-height: 30px;
      max-width: 700px;
      margin: auto;

      @media screen and (max-width: 600px) {
        padding: 0 2rem;
        font-family: 'Product Sans';
        font-size: 16px;
        line-height: 26px;
      }
    }

    .feedback-more-container {
      text-align: center;
      padding-top: 1rem;

      .feedback-more {
        font-family: Roboto;
        color: #2ac1fe;
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>
