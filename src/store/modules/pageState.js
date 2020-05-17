const initState = () => {
  return {
    loginVisible: false
  };
};

const PageState = {
  namespaced: true,
  state: initState(),
  actions: {
    LOGIN_VISIBLE(context) {
      context.commit("LOGIN_VISIBLE");
    }
  },
  mutations: {
    LOGIN_VISIBLE: (state, { visible }) => {
      state.loginVisible = visible;
    }
  }
};

export default PageState;
