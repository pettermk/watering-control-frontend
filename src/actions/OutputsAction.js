import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const OUTPUTS_REQUEST = '@@outputs/OUTPUTS_REQUEST';
export const OUTPUTS_SUCCESS = '@@outputs/OUTPUTS_SUCCESS';
export const OUTPUTS_FAILURE = '@@outputs/OUTPUTS_FAILURE';
export const OutputsAction = () => ({
  [RSAA]: {
      endpoint: 'https://92.221.106.142/web/outputs/',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        OUTPUTS_REQUEST, OUTPUTS_SUCCESS, OUTPUTS_FAILURE
      ]
  }
})
