<template>
  <div class="info-card">
    <div class="info-card-header">
      <p>
        <v-icon size="18">euro_symbol</v-icon>
        Monnaie
      </p>
      <p>Monnaie de France</p>
    </div>

    <div class="info-card-content">
      <span style="flex: 1">Euro</span>
      <span class="currency">&euro;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'currency-card'
}
</script>

<style lang="scss" scoped>
.info-card {
  box-shadow: 0px 4px 10px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1);
  background-color: white;
  border-radius: 4px;
  max-height: 150px;
  padding: 1rem 1.5rem;

  margin: 1rem auto;

  .info-card-header {
    p {
      font-family: Roboto;
      font-size: 14px;
      color: #7b7b7b;
      margin-bottom: .3rem;
    }
    i {
      color: #2ac1fe;
    }
  }

  .info-card-content {
    display: flex;
    font-family: Roboto;
    color: #212121;
    font-size: 52px;
    font-weight: 300;

    .currency {
      color: #2ac1fe;
      font-family: monaco;
    }
  }
}
</style>
