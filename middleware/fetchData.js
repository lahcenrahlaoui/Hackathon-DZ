//import https from 'https'
import axios from 'axios'

var apiURL = 'https://api.hackathon2021.dz/api/v1/'

function getCookies(app) {

  /*TODO: TEMPORARY UNTIL PRODUCTION MODE*/
  var access_token = app.$cookies.get('access_token')
  var refresh_token = app.$cookies.get('refresh_token')
  if (access_token || refresh_token) {
    return [1, access_token, refresh_token]
  } else {
    return [0, null]
  }
}

async function getDataFromToken(app,store, access_token) {
  console.log('getDataFromToken')
 /* const agent = new https.Agent({
    rejectUnauthorized: false
  })*/
  await axios.post(apiURL + 'auth/token/info/', null, {
    //httpsAgent: agent,
    headers: { 'Authorization': `Bearer ${access_token}` }
  }).then(function(response) {
    try {
      console.log(response.data);
      store.commit('user/SAVE_DATA', response.data)
    } catch (e) {
      app.$cookies.removeAll()
      console.error(e)
      throw e

    }
  }).catch(function(e) {
    app.$cookies.removeAll()
    throw e
  })
}


export default async function({ app, store, res, req, redirect, error }) {

 /* const agent = new https.Agent({
    rejectUnauthorized: false
  })*/
  try {
    var cookiesResult = getCookies(app)


    if (cookiesResult[0] === 1 && !cookiesResult[2]) {
      store.commit('user/SET_TOKEN', {
        access: cookiesResult[1],
        refresh: cookiesResult[2]
      })
      await getDataFromToken(app,store, cookiesResult[1])
    } else if (cookiesResult[0] === 1 && cookiesResult[2]) {
      store.commit('user/SET_TOKEN', {
        access: cookiesResult[1],
        refresh: cookiesResult[2]
      })
      await axios({
        url: apiURL + 'auth/token/refresh/',
        method: 'POST',
        data: { refresh: cookiesResult[2] },
        //config: { httpsAgent: agent }
      }).then(async function(response) {
        try {
          store.commit('user/SET_TOKEN', response.data)
          await getDataFromToken(app,store, response.data.access)
        } catch (e) {
          console.error(e)

        }
      }).catch(function(e) {
        console.error(e)
        redirect('/')

      })
    } else {

    }

  } catch (e) {
    console.error(e)
    redirect('/')
  }

}
