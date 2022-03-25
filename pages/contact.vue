<template>
  <div>
    <contact-box class="c-box" />
    <contact-map class="contact-map" />
  </div>
</template>

<script>
import ContactBox from '@/components/contact/Box'
import ContactMap from '@/components/contact/Map'

export default {
  name: 'contact',
  components: { ContactBox, ContactMap }
}
</script>

<style lang="scss" scoped>
.c-box {
  position: relative;
  z-index: 2;
}

.contact-map {
  width: 100%;
  height: 500px;
  z-index: 1;
  margin-top: -10rem;
}
</style>
