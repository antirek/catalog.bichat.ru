/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  authKey: null,
  name: null
};

const getters = {
  name: (state) => state.name,
  authKey: (state) => state.authKey,
  isAuthenticated: (state) => state.authKey ? true : false,
};

const actions = {
  USER_LOAD: async (context) => {
    try {
//      const { data } = await User.me();
//      console.log('USER_LOAD', data);
//      context.commit('USER_SET', data);
    } catch (e) {
      console.log('e', e);
    }
  },
};

const mutations = {
  USER_SET: (state, payload) => {
    console.log('user', payload)
    state.authKey = payload.authKey;
    state.name = payload.name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
