
const initialState = {
  cards:{}
};

function cardReducer(state = initialState, action) {

const {type, payload} = action

console.log("reducerdan", action)

switch(action.type) {

  case "SET_CARDS":
   console.log("hey")
    return{
      ...state,
      cards:action.payload
    }
  default:
    return state;
  }
}

export default cardReducer;