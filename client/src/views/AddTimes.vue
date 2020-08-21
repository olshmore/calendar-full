<template>
    <div>
        <h1 class="text-center font-weight-light ma-6">Добавить окна для записи</h1>

        <!-- Calendar -->

        <v-sheet height="600">
            <v-calendar
                    ref="calendar"
                    v-model="focus"
                    color="primary"
                    :events="events"
                    :event-color="getEventColor"
                    :type="type"
                    @click:date="viewDay"
                    @change="updateRange"
            ></v-calendar>
        </v-sheet>

        <!-- Add Times Section -->

        <div v-if="selectedDate!==''">
            <h1 class="text-center font-weight-light ma-6">Добавить окна на {{selectedDate}}:</h1>
            <v-form ref="form">
                <v-container>
                    <v-row class="text-center">


                        <v-col cols="12" sm="5" md="5">
                            <div class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-text-field--placeholder">
                                <div class="v-input__control">
                                    <div class="v-input__slot">
                                        <fieldset aria-hidden="true">
                                            <legend style="width: 42px;"><span>&#8203;</span></legend>
                                        </fieldset>
                                        <div class="v-text-field__slot">
                                            <label class="v-label v-label--active theme--light"
                                                   style="left: 0px; right: auto; position: absolute;">Время</label>
                                            <cleave v-model="editTime" class="form-control" :raw="false" :options="options.time"
                                                    placeholder="чч:мм"></cleave>
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--light">
                                            <div class="v-messages__wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" sm="5" md="5">
                            <v-select
                                    v-model="editMaster"
                                    :items="masters"
                                    menu-props="auto"
                                    label="Имя мастера"
                                    hide-details
                                    single-line
                                    outlined
                            ></v-select>
                        </v-col>

                        <v-col cols="12" sm="2" md="2">
                            <v-btn @click="addNewDate(selectedDate)" class="mx-2" fab dark color="teal">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </v-col>

                    </v-row>
                </v-container>
            </v-form>
        </div>

        <!-- Existing Times Section -->


    </div>
</template>

<script>
  export default {
    name: 'AddTimes',
    data () {
      return {
        selectedDate: '',
        editTime: null,
        editMaster: 'Виктория Катулкина',
        options: {
          time: {
            time: true,
            timePattern: ['h', 'm'],
            delimiter: ':',
          },
        },
        masters: [
          'Роман Андреевич', 'Ольга Кукареку',
          'Виктория Катулкина', 'Даниил Катулкил'
        ],
      }
    },
    computed: {},
    methods: {
      // Calendar
      viewDay ({date}) {
        this.selectedDate = date
      },

    }
  }
</script>

<style scoped>

</style>





