import * as outputs from '../actions/OutputsAction'

const initialState = {
    outputs: []
}

export default (state=initialState, action) => {
  switch(action.type) {
      case outputs.OUTPUTS_SUCCESS:
          return {
              ...state,
              outputs: action.payload
          }
    default:
      return state
  }
}
