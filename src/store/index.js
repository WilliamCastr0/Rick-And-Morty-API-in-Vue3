import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    informations: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setInformations(state, payload) {
      state.informations = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        commit('setCharacters', data.results);
        commit('setInformations', data.info);
        commit('setCharactersFilter', data.results);
      } catch (error) {
        console.error(error);
      }
      return this.nextPage;
    },

    async changePreviousCharacters({ commit, state } ) {
      const newUrl = state.informations.prev;

      const response = await fetch(newUrl);
      const data = await response.json();
      commit('setCharacters', data.results);
      commit('setInformations', data.info);
      commit('setCharactersFilter', data.results);
    },

    async changeNextCharacters({ commit, state } ) {
      const newUrl = state.informations.next;

      const response = await fetch(newUrl);
      const data = await response.json();
      commit('setCharacters', data.results);
      commit('setInformations', data.info);
      commit('setCharactersFilter', data.results);
    }

  },
  modules: {
  }
})
