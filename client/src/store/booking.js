import axios from 'axios';

const state = {
  times: []
}

const getters = {
  bookingTimes(state) {
    return state.times.filter(time => (!time.isBooked))
  },
};

const actions = {
  fetchTimes({commit}) {
    axios
      .get('http://localhost:9000/times')
      .then(data => {
        console.log(data.data);
        let times = data.data;
        commit('setTimes', times);
      })
      .catch(error => console.log(error))
  },
  addNewDate({commit}, obj) {
    axios
      .post('http://localhost:9000/times/create', obj)
      .then(data => {
        console.log(data.data);
        let times = data.data;
        commit('addNewTime', times);
      })
      .catch(error => console.log(error));

  },
}

const mutations = {
  setTimes(state, times) {
    state.times = times
  },
  addNewTime(state, times) {
    state.times.push(times);
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};
