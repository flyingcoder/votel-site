<template>
  <h1 class="a-props-title text-xs-center">Qui sommes-nous ?</h1>
</template>

<script>
export default {
  name: 'a-props-title'
}
</script>

<style lang="scss" scoped>
.a-props-title {
  font-size: 48px;
  font-weight: normal;
  color: black;

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }

  // Title underline
  &::after {
    content: "";
    display: block;
    margin: auto;
    margin-top: 1rem;
    width: 300px;
    height: 2px;
    border: 1px solid #2ac1fe;

    @media screen and (max-width: 960px) {
      width: 200px;
    }
  }
}
</style>
