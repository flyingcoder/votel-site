<template>
  <div
    class="flip-container"
    :style="`background-image: url(/images/destinations/${destination.image}); background-size: cover`"
  >
    <div class="flipper">
      <div class="front">
        <p :class="!small ? 'destination-big-title' : 'destination-small-title'">{{ destination.title }}</p>
      </div>
      <div class="back">
        <v-btn large outline dark flat nuxt to="/destination/paris/hotel">Vol</v-btn>
        <span class="destination-small-title" style="vertical-align: bottom">-</span>
        <v-btn large outline dark flat nuxt to="/destination/paris/hotel">Hotel</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'destination-flip-card',
  props: {
    destination: Object,
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.destination-big-title {
    font-size: 60px;
    color: #fff;
    text-shadow: 0px 2px 4px rgba(#000, .5);
  }

.destination-small-title {
  @extend .destination-big-title;
  font-size: 40px;
}

.flipper {
  /deep/ .btn {
    font-weight: bold;
    font-size: 18px;
  }

  /deep/ .btn__content {
    background-color: rgba(black, .2)
  }
}

// Flip animation
/* entire container, keeps perspective */
.flip-container {
  perspective: 1000px;
}
  /* flip the pane when hovered */
  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateX(-180deg);
  }

.flip-container, .front, .back {
  width: 100%;
}

.front, .back {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* flip speed goes here */
.flipper {
  width: 100%;
  height: 100%;

  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
}

/* hide back of pane during swap */
.front, .back {
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateX(0deg);
  background: rgba(#616161, .1);
}

/* back, initially hidden pane */
.back {
  transform: rotateX(-180deg);
  background: rgba(#616161, .3);
}
</style>
