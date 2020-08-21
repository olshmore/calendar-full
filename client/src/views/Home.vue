<template>
  <div class="home">
     <v-spacer></v-spacer>
      <div v-for="(time, index) in bookingTimes" :key="index">
          <p>{{time.opDate}} - {{time.opTime}} - {{time.opMaster}}</p>
      </div>
      <v-spacer></v-spacer>

      <v-text-field
              v-model="selectedDate"
              label="Дата"
              placeholder="Дата"
              outlined
      ></v-text-field>

      <v-text-field
              v-model="editTime"
              label="Время"
              placeholder="Время"
              outlined
      ></v-text-field>
      <v-text-field
              v-model="editMaster"
              label="Имя мастера"
              placeholder="Имя мастера"
              outlined
      ></v-text-field>

      <v-btn @click="addNewDate(selectedDate)" class="mx-2" fab dark color="teal">
          <v-icon dark>mdi-plus</v-icon>
      </v-btn>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import booking from '../store/booking'
export default {
  name: "home",
  components: {},
  data () {
    return {
      selectedDate: '',
      editMaster: '',
      editTime: '',
    }
  },
  mounted() {
    this.$store.dispatch('fetchTimes');
    this.date = new Date().toISOString().slice(0, 10);
  },
  computed: {
    ...mapState([
      'times'
    ]),
    bookingTimes () {
      return this.$store.getters.bookingTimes;
    },
  },
  methods: {
    addNewDate (opDate) {
      let opTime = this.editTime;
      let opMaster = this.editMaster;
      let isBooked = false;
      let obj = {
        opDate,
        opTime,
        opMaster,
        isBooked
      };
      this.$store.dispatch('addNewDate', obj);

    },
  }
};
</script>
