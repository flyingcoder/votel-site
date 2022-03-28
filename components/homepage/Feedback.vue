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
          pic: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/274291266_1260262194381759_7786479435556376677_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG47jb4HmRDnKoCCrgEQkzU71IOjDb6DcLvUg6MNvoNwnj02FlYo7NDZTsVO9Uc06iUjAchuXkk9066I0zlixjr&_nc_ohc=N1bugljQbgEAX8YdJZ-&tn=m69joY2UgDsfb2pY&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9fX3LSzhvpDFcE0qROb75KyIk3QXSx2uhT4_PC3uSdsA&oe=62472941',
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
          pic: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/270115310_4637152309708707_3084609041519880642_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGHA4ZSFEghGO4ln6ThD0FyH9fC4bNluWMf18Lhs2W5Y1lRIp8o4tX7sTt0sQ6b8AC9jY-qv4w8qnnrTb1Suz0P&_nc_ohc=FMRrq-Mo7ssAX9Tvck6&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT9QJdcKvtl92evilSFfzfU0u_ZX4oX67Ci028wYipENfw&oe=62473F5F',
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
          pic: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/275813456_10225877629860799_8152699128561290652_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG7MZ7YlPMiKiUZxC_iE4dpG-CCZVHRkrkb4IJlUdGSuYepbHwhEeY1KHsaR7s2OYWRVs7EQYLGokqwtiOZceL3&_nc_ohc=zlaiqXpnM1cAX_EfKSo&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8Y8965tr9pFBpWPhzEie8coPuIKOMaHpyOMGuR_NpmbQ&oe=6245F049',
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
          pic: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/274740684_5020739204649092_5175585091666454969_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcAr3OQJAphVZovxHWvXFweZd1Gf3sQd95l3UZ_exB35SlqE5pVFqZU8_W-BVbnwmcvnlvO8YeB7ys7Hy9NsYg&_nc_ohc=5eXuZbuCgrsAX-aYooj&tn=m69joY2UgDsfb2pY&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT-g55f_utZModbAY8utwYecHq63fS5T4EKS5bH_Hm_64A&oe=6245EC74',
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
          pic: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.18169-9/19511123_10213911044990709_4847471569907332376_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7yih9x5SArsh22WogzuoR_dQ_WzNN8Jv91D9bM03wm4qciTCzSdEkvnczRAPaLp1Yjok2U8T33TnNN1nNE4yN&_nc_ohc=-bLboM8M_koAX8TPMJ8&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_2YmYCD-RbiPtC-V5jOUIf6Lf2wpIxx2_9jwGuYPGbCg&oe=6265D24A',
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
