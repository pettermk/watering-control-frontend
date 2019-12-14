import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth, * as fromAuth from './Auth.js'
import inputs from './Inputs.js'
import outputs from './Outputs.js'
import controllers from './Controllers.js'

const createRootReducer = (history) => combineReducers({
  auth: auth,
  inputs: inputs,
  outputs: outputs,
  controllers: controllers,
  router: connectRouter(history),
})

export default createRootReducer

export const isAuthenticated =
 state => fromAuth.isAuthenticated(state.auth)

export const accessToken = 
  state => fromAuth.accessToken(state.auth)

export const isAccessTokenExpired =
  state => fromAuth.isAccessTokenExpired(state.auth)

export const refreshToken =
  state => fromAuth.refreshToken(state.auth)

export const isRefreshTokenExpired =
  state => fromAuth.isRefreshTokenExpired(state.auth)

export const authErrors =
  state => fromAuth.errors(state.auth)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}

