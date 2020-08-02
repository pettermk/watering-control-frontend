import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const INPUTS_REQUEST = '@@inputs/INPUTS_REQUEST';
export const INPUTS_SUCCESS = '@@inputs/INPUTS_SUCCESS';
export const INPUTS_FAILURE = '@@inputs/INPUTS_FAILURE';
export const InputsAction = () => ({
  [RSAA]: {
      endpoint: 'https://homeautomation-api.kvalvaag-tech.com/web/inputs/',
      method: 'GET',
      //body: JSON.stringify({message: message}),
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        INPUTS_REQUEST, INPUTS_SUCCESS, INPUTS_FAILURE
      ]
  }
})
