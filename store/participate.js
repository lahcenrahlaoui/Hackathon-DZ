export const actions = {
  async LOGIN_USER(state, payload) {
    return this.$axios.post('auth/login/', payload).then(response => {
      if (response.status === 200) {
        if(response.data.is_staff===true) {
          state.dispatch('SET_TOKEN', response.data)
          return 1200;
        }
        else
          return 1401;
      }
    }).catch(error => {
      if (error.response.status === 401)
        return 1404;
      if (error.response.status=== 500)
        return 1500;

    })
  },
}
