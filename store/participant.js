export const actions = {
  async SIGNUP(state, payload) {
    return this.$axios.post('teams/', payload).then(response => {
      if (response.status === 201) {
        return 'OK'
      } else {
        return response.data.response
      }
    }).catch(error => {
      if (error.response.status === 401)
        return 1404
      if (error.response.status === 500)
        return 1500

    })
  },
  async GET_PARTICIPANTS_DASHBOARD({ state,commit,rootState}, payload) {
    const access_token = rootState.user.tokens.access;

    return this.$axios.get('teams/dashboard_statistics/',{
      headers: { 'Authorization': `Bearer ${access_token}` }
    }).then(response => {
        if (response.status === 200) {
          return response.data
        }
      }
    ).catch(error => {
      if (error.response.status === 401)
        return 1404
      if (error.response.status === 500)
        return 1500

    })
  },
  async GET_PARTICIPANTS({state,commit,rootState},payload){
    const access_token = rootState.user.tokens.access;
    return this.$axios.get('teams/participants/',{
      headers: { 'Authorization': `Bearer ${access_token}` }
    }).then(response => {
        if (response.status === 200) {
          return response.data
        }
      }
    ).catch(error => {
      if (error.response.status === 401)
        return 1404
      if (error.response.status === 500)
        return 1500

    })
  },
  async PARTICIPANT_SEND_CONFIRMATION_EMAIL({state,commit,rootState},payload){
    const access_token = rootState.user.tokens.access;
    return this.$axios.post('teams/participants/confirmEmail/?template=1',payload,{
      headers: { 'Authorization': `Bearer ${access_token}` }
    }).then(response => {
        if (response.status === 200) {
          return 1200
        }
      }
    ).catch(error => {
      if (error.response.status === 401)
        return 1404
      if (error.response.status === 500)
        return 1500

    })
  }
}
