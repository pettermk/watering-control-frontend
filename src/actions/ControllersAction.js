import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const CONTROLLERS_REQUEST = '@@controllers/CONTROLLERS_REQUEST';
export const CONTROLLERS_SUCCESS = '@@controllers/CONTROLLERS_SUCCESS';
export const CONTROLLERS_FAILURE = '@@controllers/CONTROLLERS_FAILURE';
export const ControllersAction = () => ({
  [RSAA]: {
      endpoint: 'https://homeautomation-api.kvalvaag-tech.com/web/controllers/',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        CONTROLLERS_REQUEST, CONTROLLERS_SUCCESS, CONTROLLERS_FAILURE
      ]
  }
})
