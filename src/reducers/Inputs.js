import * as inputs from '../actions/InputsAction'

const initialState = {
    inputs: []
}

export default (state=initialState, action) => {
  switch(action.type) {
      case inputs.INPUTS_SUCCESS:
          return {
              ...state,
              inputs: action.payload
          }
    default:
      return state
  }
}

export const inputsFromServer = (state) => state.inputs
