import {createStore} from "vuex";
import axios from "axios"

export default createStore({
  state() {
    return {
      cities:[],
    }
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    }
  },
  actions: {
    getCities({commit}) {
      try {
        axios
          .get('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities')
          .then(response => commit('setCities', response.data));
      } catch(e) {
          console.error(e.message);
      }
    },
    postData({commit}, data) {
      try {
        axios
          .post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', data)
          .then(response => {
            if (response.data.success) {
              window.location.href = '/success';
            }
            else {
              alert("Ошибка отправки заявки");
            }
          });
      } catch(e) {
          console.error(e.message);
      }
    }
  }
})