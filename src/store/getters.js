const getters = {
  isLogin: (state) => state.user.isLogin,
  visible: (state) => state.pageState.loginVisible
};
export default getters;
