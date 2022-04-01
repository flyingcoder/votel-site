<template>
  <div>
    <home-page-header />
    <how-it-works />
    <packages />
    <top-destinations />
    <about />
    <feedback />
  </div>
</template>

<script>
import HomePageHeader from '@/components/homepage/Header'
import HowItWorks from '@/components/homepage/HowItWorks'
import TopDestinations from '@/components/homepage/TopDestinations'
import Packages from '@/components/homepage/Packages'
import About from '@/components/homepage/About'
import FeedBack from '@/components/homepage/Feedback'

export default {
  layout: 'homepage',
  components: {
    HomePageHeader,
    HowItWorks,
    TopDestinations,
    Packages,
    'about': About,
    'feedback': FeedBack
  }
}
</script>

<style lang="scss">
.section-title {
  font-size: 40px;
  font-weight: normal;
  color: #6B6B6B;
  letter-spacing: 0.03em;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
}
</style>
