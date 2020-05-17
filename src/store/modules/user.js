const initUser = () => {
  return {
    name: "",
    isLogin: false
  };
};

const User = {
  namespaced: true,
  state: initUser(),
  actions: {
    LOGIN: (state, name) => {
      state.name = name;
    }
  },
  mutations: {}
};

export default User;
