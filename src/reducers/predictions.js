function postPrediction(state = [], action) {
  switch(action.type) {
    case "ADD_PREDICTION" :
    //return the new state with the new comment
    return [...state, {
      user: action.author,
      text: action.prediction
    }];
    case 'REMOVE_PREDICTION':
    //we need to return the new state without the deleted comment
    return [
      //from the start to the one we want to delete
      ...state.slice(0, action.i),
      //after the deleted one to the end
      ...state.slice(action.i + 1)
    ]
    default:
      return state;
  }
    return state;
}

function predictions(state = [], action) {
  if (typeof action.showId !== 'undefined') {
    return{
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.showId]: postPrediction(state[action.showId], action)
    }
  }
  return state;
}

function increment(state = [], action) {
    switch(action.type) {
      case 'INCREMENT_LIKES' :
      console.log("incrementing likes");
      const i = action.index;
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], likes: state[i].likes +1},
        ...state.slice(i + 1), //after the one we are updating
      ]
      //return the updated state
    default:
      return state;
  }
}

export default predictions;
