<template>
  <v-toolbar class="votel-toolbar" :flat="!secondary" :color="!secondary ? 'transparent' : 'white'">
    <!-- Title -->
    <v-toolbar-title>
      <nuxt-link to="/">
        <img
          v-if="!secondary"
          class="logo"
          src="/images/logox70white.png"
          srcset="/images/logox50white.png 600w, /images/logox70white.png 601w"
          alt="Logo Votel Réservation"
        />
        <img v-else class="logo sec" src="/images/logox40blue.png" alt="Logo Votel Réservation">
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Menu mobile -->
    <v-menu class="menu-mobile"
      offset-y left min-width="145px"
      @click="menu = !menu"
      open-on-hover
    >
      <v-btn slot="activator" icon class="hidden-md-and-up" :dark="!secondary"><v-icon>menu</v-icon></v-btn>

      <v-list>
        <template v-for="(submenu, indexsub) in menuItems">
          <v-list-tile v-if="submenu.type === 'menu'" :key="indexsub">
            <v-menu offset-x left min-width="145px" open-on-hover class="mobile-submenu" full-width style="width: 100%; height: 100%;">
              <v-list-tile-action slot="activator">
                {{ submenu.title }}
              </v-list-tile-action>

              <v-list>
                <v-list-tile :to="item.url" v-for="(item, idx) in submenu.items" :key="idx" nuxt>
                  <v-list-tile-action>{{ item.title }}</v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile>

          <v-list-tile
            v-else
            :key="indexsub"
            :to="submenu.url"
            nuxt
          >
            <v-list-tile-action>{{ submenu.title }}</v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-menu>

    <!-- Menu Desktop -->
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-for="(item, index) in menuItems">
        <!-- Item without submenu -->
        <v-menu v-if="item.type === 'menu'" offset-y right min-width="145px" :key="index">
          <v-btn slot="activator" class="menu-item" :class="{'menu-item-secondary': secondary}" flat color="white" dark>{{ item.title }}</v-btn>
          <v-list>
            <v-list-tile v-for="(submenu, indexsub) in item.items" :key="indexsub" :to="submenu.url" nuxt>
              <v-list-tile-action>{{ submenu.title }}</v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-menu>

        <!-- Item with submenu -->
        <v-btn
          v-else
          flat
          class="menu-item white--text"
          :class="{'menu-item-secondary': secondary}"
          :key="index"
          nuxt
          :to="item.url"
        >{{ item.title }}</v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      menu: false,
      menuItems: {
        evisa: {
          title: 'E-Visa',
          type: 'menu',
          items: {
            dubai: { title: 'Dubaï', url: '/visa/dubai' },
            egypt: { title: 'Égypte', url: '/visa/egypte' },
            turkey: { title: 'Turquie', url: '/visa/turquie' }
          }
        },
        services: {
          title: 'Services',
          type: 'menu',
          items: {
            assurance: { title: 'Assurance de voyage', url: '/services/assurance' },
            telex: { title: `Réservation d'hôtel confirmée + Telex`, url: '/services/telex' }
          }
        },
        // blog: { title: 'Blog', url: '' },
        faq: { title: 'FAQ', url: '/faq' },
        about: { title: 'À propos', url: '/apropos' },
        contact: { title: 'Contact', url: '/contact' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.votel-toolbar {
  /deep/ .nuxt-link-active {
    display: flex;
  }

  .logo {
    height:70px;

    &.sec {
      height: 40px;
    }

    @media screen and (max-width: 600px) {
      height: 40px;
    }
  }

  .menu-item {
    font-size: 18px;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(#000000, 0.15);
  }

  .menu-item-secondary {
    @extend .menu-item;
    color: #0d253e !important;
    text-shadow: none;
    font-weight: normal;
  }

  .btn {
    /deep/ .btn__content {
      text-transform: none;
    }
  }

  .btn--active {
    color: #2ac1fe !important;

    /deep/ .btn__content::before {
      background: none !important;
    }
  }

  .menu-mobile {
    padding-right: 1rem;

    /deep/ button {
      @media screen and (min-width: 601px) {
        height: 70px;
        width: 70px;

        i {
          font-size: 50px;
        }
      }
    }

  }
}
.mobile-submenu {
  /deep/ .btn {
    .btn__content {
      text-align: left !important;
      padding: 0 .5rem !important;
      font-size: 16px !important;
    }
  }
}
</style>
