export const state = () => (
  {
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    is_superuser: null,
    is_active: null,
    is_staff: null,
    role: null,
    tokens: null,
  }
)
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
      console.error(error);
      if (error.response.status === 401)
        return 1404;
      if (error.response.status=== 500)
        return 1500;

    })
  },
  async LOGOUT_USER(state,payload){
    /*return this.$axios.post('auth/user/logout/', payload).then(response => {
      if (response.status === 200) {
        state.dispatch('REMOVE_DATA', response.data)
      }
    })*/
    this.$cookies.removeAll()
    state.commit('REMOVE_DATA')
  },
  SET_TOKEN(state, payload) {
    state.commit('SET_TOKEN', payload)
    if (payload.access)
      this.$cookies.set('access_token', payload.access, {
        path: '/',
        expires: new Date(new Date().getTime() + 1000 * 3600 * 24 ),
      })
    this.$cookies.set('refresh_token', payload.refresh, {
      path: '/',
      expires: new Date(new Date().getTime() + 1000 * 3600 * 24 * 30 * 12),
    })
  },
}
export const mutations = {
  SAVE_DATA(state, payload) {
    const token = state.tokens
    state.username = payload.username
    state.email = payload.email
    state.profile_pic = payload.profile_pic
    state.tokens = token
    state.firstname = payload.firstname
    state.lastname = payload.lastname
    state.is_superuser = payload.is_superuser
    state.is_active = payload.is_active
    state.role = payload.role
  },
  SET_TOKEN(state, payload) {
    if (!state.tokens)
      state.tokens = {
        access: payload['access'],
        refresh: null
      }
    state.tokens.access = payload['access']
    if (payload.refresh)
      state.tokens.refresh = payload.refresh
  },
  REMOVE_DATA(state,payload) {
    state={
      username: null,
      email: null,
      firstname: null,
      lastname: null,
      is_superuser: null,
      is_active: null,
      is_staff: null,
      role: null,
      profile_pic: null,
      access: null,
      refresh: null
    }
  }
}

