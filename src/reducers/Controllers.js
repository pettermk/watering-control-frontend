import * as controllers from '../actions/ControllersAction'

const initialState = {
    controllers: []
}

export default (state=initialState, action) => {
  switch(action.type) {
      case controllers.CONTROLLERS_SUCCESS:
          return {
              ...state,
              controllers: action.payload
          }
    default:
      return state
  }
}
