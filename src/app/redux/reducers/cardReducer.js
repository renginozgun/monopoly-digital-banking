const initialState = {
  cards: {},
  giverAccount: null,
  takerAccount: null,
};

function cardReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log("reducerdan", action);

  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
    case "SET_GIVER_ACCOUNT":
      return {
        ...state,
        giverAccount: action.payload,
      };
    case "SET_TAKER_ACCOUNT":
      return {
        ...state,
        takerAccount: action.payload,
      };
    default:
      return state;
  }
}

export default cardReducer;
