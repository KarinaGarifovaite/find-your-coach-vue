export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token; //Converting to boolean
  },
  didlogout(state) {
    return state.didlogout;
  },
};
