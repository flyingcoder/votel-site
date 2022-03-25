<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-bottom="45"
    lazy
    offset-y
    allow-overflow
    min-width="300px"
    class="classpicker"
  >
    <v-text-field
      slot="activator"
      prepend-icon="supervisor_account"
      v-model="fieldValue"
      readonly
    ></v-text-field>

    <!-- Content -->
    <v-card class="classpicker-card">
      <v-list>
        <!-- Classes -->
        <v-list-tile
          v-for="(item, index) in classList"
          :key="index"
          @click="updateCabin(item.value)"
          :class="{'active': cabinClass === item.value}"
        >
          <v-list-tile-avatar>
            <v-icon size="20">{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="cabinClass === item.value">
            <v-icon size="16">check</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider></v-divider>

        <!-- Persons -->
        <v-list-tile v-for="(ageGroup, index) in ageList" :key="index">
          <v-list-tile-content>
            <v-list-tile-title>{{ ageGroup.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ ageGroup.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <div class="persons-selector">
              <button
                class="subtract"
                @click="subtractAgeGroup(index)"
                :disabled="ageGroup.value <= 0"
              ><v-icon size="18" color="white">remove</v-icon></button>
              <input type="text" v-model="ageGroup.value">
              <button
                class="add"
                @click="incrementAgeGroup(index)"
                :disabled="ageGroup.value >= 9"
              ><v-icon size="18" color="white">add</v-icon></button>
            </div>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'flight-class-picker',
  props: ['value'],

  data () {
    return {
      menu: false,
      cabinClass: 'Y',
      class: {
        cabinClass: 'Y',
        ADT: 1,
        INF: 0,
        CHD: 0,
        YTH: 0,
        YCD: 0
      },

      classList: {
        promo: {
          value: 'Y',
          icon: 'account_balance_wallet',
          title: 'Promotionnelle'
        },

        eco: {
          value: 'C',
          icon: 'business_center',
          title: 'Économique plein tarif'
        },

        business: {
          value: 'F',
          icon: 'looks_one',
          title: 'Affaire/Business'
        }
      },

      ageList: {
        adt: { label: 'ADT', title: 'Adultes', subtitle: '> 12 ans', value: 1 },
        inf: { label: 'INF', title: 'Bébés', subtitle: '< 2 ans', value: 0 },
        chd: { label: 'CHD', title: 'Enfants', subtitle: '2-11 ans', value: 0 },
        yth: { label: 'YTH', title: 'Jeunes', subtitle: '12-24 ans', value: 0 },
        ycd: { label: 'YCD', title: 'Séniors', subtitle: '> 60 ans', value: 0 }
      }
    }
  },

  computed: {
    fieldValue () {
      let result = ''

      for (let index in this.ageList) {
        if (this.ageList[index].value > 0) {
          if (result !== '') {
            result += `, `
          }

          result += `${this.ageList[index].value} ${this.ageList[index].title}`
        }
      }

      let classTitle = ''

      for (let index in this.classList) {
        if (this.classList[index].value === this.cabinClass) {
          classTitle = this.classList[index].title
        }
      }

      return `${result}, ${classTitle}`
    }
  },

  methods: {
    update () {
      this.updateClass()
      this.$emit('input', this.class)
    },

    updateClass () {
      this.class.cabinClass = this.cabinClass
      this.class.ADT = this.ageList.adt.value
      this.class.INF = this.ageList.inf.value
      this.class.CHD = this.ageList.chd.value
      this.class.YTH = this.ageList.yth.value
      this.class.YCD = this.ageList.ycd.value
    },

    updateCabin (cabin) {
      this.cabinClass = cabin
      this.update()
    },

    subtractAgeGroup (index) {
      if (this.ageList[index].value > 0) {
        --this.ageList[index].value
        this.update()
      }
    },

    incrementAgeGroup (index) {
      if (this.ageList[index].value < 9) {
        ++this.ageList[index].value
        this.update()
      }
    }
  }
}
</script>

<style lang="scss">
.classpicker {
  input {
    margin-left: -1rem;
  }
}

.classpicker-card {
  .list__tile__title {
    font-size: 16px;
  }

  .active {
    color: #2ac1fe;

    i {
      color: #2ac1fe;
    }
  }

  .persons-selector {
    input {
      width: 40px;
      height: 32px;
      border: 1px solid #dce1ea;
      background: white;
      text-align: center;
      font-size: 16px;
      color: #3c5065;
      outline: none;
    }

    button {
      width: 32px;
      height: 32px;
      padding: 0;
      background-color: #2ac1fe;
      outline: none;

      &:disabled {
        background-color: rgba(#3c5065, .21);
      }
    }

    .subtract {
      border-radius: 3px 0 0 3px;
    }

    .add {
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>
