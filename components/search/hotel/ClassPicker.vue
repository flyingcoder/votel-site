<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-bottom="30"
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
        <!-- Persons -->
        <div v-for="(room, index) in rooms" :key="index">
          <p class="room-title">
            Chambre {{ index + 1 }}
            <v-btn icon @click="subtractRooms(index)" v-if="index > 0">
              <v-icon size="18">remove</v-icon>
            </v-btn>
          </p>
          <!-- Adults -->
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Adultes</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <div class="persons-selector">
                <button
                  class="subtract"
                  @click="subtractAdults(index)"
                  :disabled="room.adults <= 0"
                ><v-icon size="18" color="white">remove</v-icon></button>
                <input type="text" v-model="room.adults">
                <button
                  class="add"
                  @click="incrementAdults(index)"
                  :disabled="room.adults >= maxPerRoom"
                ><v-icon size="18" color="white">add</v-icon></button>
              </div>
            </v-list-tile-action>
          </v-list-tile>

          <!-- Room type -->
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Type</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-select :items="roomsTypes[room.adults]" v-model="room.type"></v-select>
            </v-list-tile-action>
          </v-list-tile>

          <!-- Kids -->
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Enfants</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <div class="persons-selector">
                <button
                  class="subtract"
                  @click="subtractKids(index)"
                  :disabled="room.kidsCount <= 0"
                ><v-icon size="18" color="white">remove</v-icon></button>
                <input type="text" v-model="room.kidsCount">
                <button
                  class="add"
                  @click="incrementKids(index)"
                  :disabled="room.kidsCount >= maxKids"
                ><v-icon size="18" color="white">add</v-icon></button>
              </div>
            </v-list-tile-action>
          </v-list-tile>

          <!-- Babies -->
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Bébés</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <div class="persons-selector">
                <button
                  class="subtract"
                  @click="subtractBabies(index)"
                  :disabled="room.babies <= 0"
                ><v-icon size="18" color="white">remove</v-icon></button>
                <input type="text" v-model="room.babies">
                <button
                  class="add"
                  @click="incrementBabies(index)"
                  :disabled="room.babies >= maxBabies"
                ><v-icon size="18" color="white">add</v-icon></button>
              </div>
            </v-list-tile-action>
          </v-list-tile>


          <v-list-tile v-if="room.kids.length">
            <v-list-tile-content>
              <v-layout style="width: 100%">
                <v-flex xs6>
                  <v-select v-model="room.kids[0].age" :items="kidsAges" label="Âge enf. 1"></v-select>
                </v-flex>
                <v-flex xs6 v-if="room.kids.length === 2">
                  <v-select v-model="room.kids[1].age" :items="kidsAges" label="Âge enf. 2"></v-select>
                </v-flex>
              </v-layout>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-if="room.kids.length" style="padding-top: 1rem">
            <v-list-tile-content>
              <v-switch v-model="room.extraBed" label="Lit supplémentaire" />
            </v-list-tile-content>
          </v-list-tile>

          <v-btn @click="incrementRooms" flat v-if="rooms.length === index + 1 && rooms.length < maxRooms">
            <v-icon size="18">add</v-icon>
            Ajouter chambre
          </v-btn>

          <v-divider v-if="rooms.length !== index + 1"></v-divider>
        </div>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>

export default {
  name: 'hotel-class-picker',
  props: ['value'],

  data () {
    return {
      menu: false,
      maxPerRoom: 4,
      maxRooms: 4,
      maxKids: 2,
      maxBabies: 2,

      roomsTypes: {
        1: ['Single'],
        2: ['Double', 'Twin'],
        3: ['Triple'],
        4: ['Quad']
      },

      rooms: []
    }
  },

  watch: {
    rooms: {
      handler (value, oldValue) {
        this.$emit('input', value)
      },
      deep: true
    },

    value (value) {
      this.rooms = value
    }
  },

  computed: {
    kidsAges () {
      return [...Array(13).keys()].map(i => i + 2)
    },

    fieldValue () {
      let result = ''
      let adults = 0
      let kids = 0
      let rooms = 0

      this.rooms.forEach(el => {
        ++rooms
        adults += el.adults
        kids += el.kidsCount
      })

      result += `${adults} Adultes`

      if (kids) {
        result += `, ${kids} Enfants`
      }

      result += `, ${rooms} Chambres`

      return result
    }
  },

  methods: {
    subtractAdults (index) {
      if (this.rooms[index].adults > 0) {
        --this.rooms[index].adults
      }
    },

    incrementAdults (index) {
      if (this.rooms[index].adults < this.maxPerRoom) {
        ++this.rooms[index].adults
      }
    },

    subtractBabies (index) {
      if (this.rooms[index].babies > 0) {
        --this.rooms[index].babies
      }
    },

    incrementBabies (index) {
      if (this.rooms[index].babies < this.maxBabies) {
        ++this.rooms[index].babies
      }
    },

    subtractKids (index) {
      if (this.rooms[index].kidsCount > 0) {
        --this.rooms[index].kidsCount
        this.rooms[index].kids.pop()
      }
    },

    incrementKids (index) {
      if (this.rooms[index].kidsCount < this.maxKids) {
        ++this.rooms[index].kidsCount
        this.rooms[index].kids.push({ age: null })
      }
    },

    subtractRooms (index) {
      if (this.rooms.length > 0) {
        this.rooms.splice(index, 1)
      }
    },

    incrementRooms () {
      if (this.rooms.length < this.maxRooms) {
        this.rooms.push({
          adults: 1,
          type: 'Single',
          kidsCount: 0,
          kids: [],
          babies: 0,
          extraBed: false
        })
      }
    }
  },

  created () {
    if (this.value) {
      this.rooms = this.value
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

  .room-title {
    font-size: 18px;
    font-family: Roboto;
    font-weight: bold;
    padding: 0 1rem;
    margin: 0;
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
