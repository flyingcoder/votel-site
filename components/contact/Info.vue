<template>
  <div class="contact-info">
    <h4 class="contact-title">Localisation</h4>

    <div class="contact-items">
      <div class="contact-item">
        <div>
          <v-icon size="18">location_on</v-icon>
          <a href="https://www.google.com/maps/search/36.7808027,+3.0602305" target="_blank">
            <p>07 rue port Saïd,<br/>16000 Alger centre</p>
          </a>
        </div>

        <div>
          <v-icon size="18">phone</v-icon>
          <p><a href="tel:+213671214301">+213 671 214 301</a></p>
        </div>

        <div>
          <v-icon size="18">email</v-icon>
          <p><a href="mailto:contact@votel-dz.com">contact@votel-dz.com</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-info'
}
</script>

<style lang="scss" scoped>
.contact-info {
  border: 2px dashed #dce1ea;
  max-width: 350px;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    margin: auto;
  }

  .contact-title {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 300;
    color: #3c5065;
    text-transform: uppercase;
    padding: 0 0 1.3rem 0;
  }

  .contact-items {
    .contact-item {
      i {
        color: #51c2fb;
        vertical-align: top;
        position: relative;
        top: 2px;
      }

      p {
        display: inline-block;
        padding: 0 .5rem;
        font-family: Roboto;
        font-size: 15px;
        color: #6b6b6b;

        a {
          text-decoration: none;
          color: #6b6b6b;
        }
      }
    }
  }
}
</style>
