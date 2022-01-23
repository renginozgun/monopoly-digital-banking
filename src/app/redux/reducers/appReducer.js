
const initialState = {
    gameView:false
  };
  
  function appReducer(state = initialState, action) {
  
  const {type, payload} = action
  
  console.log("reducerdan", action)
  
  switch(action.type) {
    case "SET_GAME_VIEW":
      return{
        ...state,
        gameView:action.payload
      }
    default:
      return state;
    }
  }
  export default appReducer;